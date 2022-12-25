from gallery_view import app, db
from flask import request
from werkzeug.utils import secure_filename
from gallery_view.models import Image
import requests
from flask import jsonify, make_response, send_file
import io
from PIL import Image as PIL_image

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# the function that checks if the file name is image type
def is_image_type(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# the function that upload image from computer files
def upload_image_from_computer(request):

    # the URL address of the files downloaded from the computer is kept as an empty string.
    pic_url = ''
    # picture are placed in 'picture' field while sending by front-end.
    pic = request.files['picture']
    filename = secure_filename(pic.filename)
    mimetype = pic.mimetype
    # check if the file type is image
    if not is_image_type(filename):
        return make_response(jsonify(
            {"message": "The file type is not valid.", }
        ), 400)

    if not filename or not mimetype:
        return make_response(jsonify(
            {"message": "The image could not be saved.", }
        ), 400)

    # picture saved to database
    img = Image(img=pic.read(), name=filename, mimetype=mimetype, url=pic_url)
    db.session.add(img)
    db.session.commit()

    return make_response(jsonify(
        {"message": "The picture saved successfully.", "unique_id":img.id}
    ), 200)  

# the function that upload image from url
def upload_image_from_url(request):

    # image's url are placed in ['picture_url']['fileUrl'] field while sending by front-end.
    pic_url = eval(request.form['picture_url'])['fileUrl']
    try:
        # getting image from url
        url_request = requests.get(pic_url)
        pic = url_request.content
        mimetype = url_request.headers['content-type']
        filename = pic_url
    except:
        return make_response(jsonify(
            {"message": "The image could not be saved.", }
        ), 400)   
    
    if not filename or not mimetype:
        return make_response(jsonify(
            {"message": "The image could not be saved.", }
        ), 400)

    # picture saved to database
    img = Image(img=pic, name=filename, mimetype=mimetype, url=pic_url)
    db.session.add(img)
    db.session.commit()

    return make_response(jsonify(
        {"message": "The picture saved successfully.", "unique_id":img.id}
    ), 200)    

# rest API function that uploads images to the system
@app.route('/upload_image', methods=['POST'])
def upload():
    # check if the post request has the picture or picture's link
    if ('picture' not in request.files) and ('picture_url' not in request.form):
        return make_response(jsonify(
            {"message": "The image could not be saved.", }
        ), 400)

    # if both the link and the image are given, the image is saved, the link is ignored.
    if 'picture' in request.files:
        return upload_image_from_computer(request)
    else:
        return upload_image_from_url(request)


# rest API function that download images from the system
@app.route('/download_image', methods=['GET'])
def download_image():
    args = request.args
    # check if the request parameter has the unique_id
    if not 'unique_id' in args:
        return make_response(jsonify(
            {"message": "The request is not valid.", }
        ), 400)

    unique_id = args['unique_id']
    image = Image.query.filter_by(id=unique_id).first()

    # check if the image exists in database
    if image:
        return send_file(io.BytesIO(image.img), mimetype=image.mimetype)
    else:
        return make_response(jsonify(
            {"message": "There is no picture in system with Id.", }
        ), 400)


# rest API function that get image's ids from the system
@app.route('/list_images', methods=['GET'])
def list_images():

    # getting all image from database
    images = Image.query.all()
    unique_ids = []

    # The database is returned in query object type. 
    # Since the query object is not JSON Serializable, we are creating our own list again.
    for image in images:
        download_url = request.host_url + '/download_image?unique_id=' + str(image.id);
        unique_ids.append({"id": image.id, "download_url": download_url})

    return make_response(jsonify(
        {"message": "All pictures listed successfully.", 'unique_ids': unique_ids}
    ), 200)


# rest API function that get image's height and width
@app.route('/analyse_image', methods=['GET'])
def analyse_image():
    args = request.args
    # check if the request parameter has the unique_id
    if not 'unique_id' in args:
        return make_response(jsonify(
            {"message": "The request is not valid.", }
        ), 400)

    unique_id = args['unique_id']
    image = Image.query.filter_by(id=unique_id).first()

    # check if the image exists in database
    if image:
        # converts from byte array to PIL Image type to get width and height properties
        picture = PIL_image.open(io.BytesIO(image.img))
        width = picture.width
        height = picture.height
        return make_response(jsonify(
            {"message": "All pictures listed successfully.",
             'image_information': { 'width':width, 'height':height }}
        ), 200)
    else:
        return make_response(jsonify(
            {"message": "There is no picture in system with Id.", }
        ), 400)
