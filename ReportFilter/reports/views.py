import datetime

from flask import Blueprint, request, make_response, jsonify
from flask.views import MethodView

from ReportFilter import app, db
from ReportFilter.models import Report, DateRange

reports_blueprint = Blueprint('reports', __name__)

@app.route("/reports")
def contacts():
    '''
    Show all reports
    '''
    reports = Report.query.order_by(Report.posted_date).all()
    json_results = []
    for report in reports:
        data = {
            'title': report.title,
            'task description': report.description,
            'posted_date': str(report.posted_date),
            }
        json_results.append(data)

    return jsonify(items=json_results)


class RangeAPI(MethodView):

    def post(self):
        post_data = request.get_json()

        try:
            d_range = DateRange(
                start=datetime.datetime.fromtimestamp(int(post_data.get('start'))),
                end=datetime.datetime.fromtimestamp(int(post_data.get('end')))
            )

            # insert the range
            db.session.add(d_range)
            db.session.commit()

            responseObject = {
                'status': 'success',
                'message': 'Successfully added daterange.'
            }
            return make_response(jsonify(responseObject)), 201

        except Exception as e:
            responseObject = {
                'status': 'fail',
                'message': 'Please choose another period.'
            }
            return make_response(jsonify(responseObject)), 401

range_view = RangeAPI.as_view('range_api')
reports_blueprint.add_url_rule(
    '/reports/range',
    view_func=range_view,
    methods=['POST']
)
