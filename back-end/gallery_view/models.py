from gallery_view import db,app

class Image(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    img = db.Column(db.Text, nullable=False)
    url = db.Column(db.Text, nullable=False)
    name = db.Column(db.Text, nullable=False)
    mimetype = db.Column(db.Text, nullable=False)


# initializing the db and creating the tables
db.init_app(app)
# Creates the logs tables if the db doesn't already exist
with app.app_context():
    db.drop_all()
    db.create_all()
