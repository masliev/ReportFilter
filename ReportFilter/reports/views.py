from flask import request, make_response, jsonify

from ReportFilter import app
from ReportFilter.models import Report

@app.route("/reports")
def contacts():
    '''
    Show alls reports
    '''
    reports = Report.query.order_by(Report.title).all()
    return render_template('web/contacts.html', contacts=contacts)