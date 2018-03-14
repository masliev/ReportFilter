from flask import Blueprint, request, make_response, jsonify

from ReportFilter import app
from ReportFilter.models import Report

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