import os

from flask import Flask
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app_settings = os.getenv(
    'APP_SETTINGS',
    'ReportFilter.config.DevelopmentConfig'
)
app.config.from_object(app_settings)

bcrypt = Bcrypt(app)
db = SQLAlchemy(app)

from ReportFilter.auth.views import auth_blueprint
from ReportFilter.reports.views import reports_blueprint
app.register_blueprint(auth_blueprint)
app.register_blueprint(reports_blueprint)
