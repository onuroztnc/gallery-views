# Gallery View Application

It is an application where you can store and list your pictures.

### Home Page

<img width="1440" alt="Screenshot 2022-12-25 at 5 00 30 pm" src="https://user-images.githubusercontent.com/40147847/209458461-3de39af1-837b-40f5-b429-fc9ea8f44ba9.png">

### Upload New Image

You can upload your new pictures by clicking the upload icon in the right corner of the navigation.

When you click on the icon, the website will open a popup. You can upload the new image from your file system or the image's url.

<img width="607" alt="Screenshot 2022-12-25 at 5 05 29 pm" src="https://user-images.githubusercontent.com/40147847/209458642-b811fd49-498d-4ff7-95e0-311267f4231c.png">


#### Note: If both information is given, the system will first load the image from the file system to the system. The system ignores the url address of the image.

The system will notify you after the file upload is complete.

<img width="415" alt="Screenshot 2022-12-25 at 5 12 38 pm" src="https://user-images.githubusercontent.com/40147847/209458690-099756a8-6606-4ddc-a82e-8b879eb4f82c.png">


### Image Analysis

When you move the mouse cursor over the images, you can see the image id.

<img width="437" alt="Screenshot 2022-12-25 at 5 15 32 pm" src="https://user-images.githubusercontent.com/40147847/209458747-b6081f56-344c-4779-98f2-61263cb23ece.png">

You can get detailed information about the picture by clicking on the Info icon.

<img width="394" alt="Screenshot 2022-12-25 at 5 16 30 pm" src="https://user-images.githubusercontent.com/40147847/209458749-c9ce96db-e46a-471f-94a9-d25f68796c71.png">

## How to run

These instructions show you how to run the codes.

- Clone the project's repository 

		git clone https://github.com/onuroztnc/gallery-views

- Go to the directory where the project is

		cd gallery-views
    
- Build Docker's services

		docker-compose build --no-cache

- Create and start containers

		docker-compose up 
    
The system is ready. You can access the project at 		`http://localhost:3000`

