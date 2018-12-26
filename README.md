# Project Over View 
GoLuckyCat is a services exchange plaform built on the MEAN (MongoDb, Express, Angular, Node.js) stack. The web application connects Users and Providers, in their language, to exchange services for a fee (determined by user). 

 The platform is designed with intutitive user, provider and  administrative functionalities. 

 Project Board: Todo, Inprogress, Done are listed here:
 https://github.com/LostAnchovy/goluckycat/projects/1

## Table of Contents
* [Configuration Instructions](#configuration-instructions)
* [Installation Instructions](#installation-instructions)
* [Features](#features)
* [Outstanding_Tasks](#Outstanding_Tasks)
* [Bugs](#Known_Bugs)

## Configuration Instructions

* **MEAN stack** - This applicaiton is built with the MEAN stack. It is recommended to  install, at a minium, the Angular CLI (Command Line Interface), and Node.Js.

## Installation Instructions
* git clone the respository here:  https://github.com/LostAnchovy/goluckycat
* npm (Node Package Manager) install dependencies on client and server side by using command, "NPM Install" in the terminal.
* The application is currently using the SendGrid emailing platform to assist with user password reset. Other email providers can be used such as "Gmail" or a provider host designated email for production. Changes will need to be made in the controllers.users.js under "PROVIDER".

* create a sendGrid Account by going here: www.sendgrid.com

* create a ".env" file in the root folder with the the following and add your own credientials. This is necessary to make to run the application. 

  * CONFIG_DB = mongodb://localhost:27017/ "Your mongoDB DB name here"
  * USER_NAME = "Username for Email address" for SendGrid. 
  * CREDENTIALS = "Password" for SendGrid
  * SECRET = "Your Secret Key" Make up anything for yourself for JWT tokens. JWT need a secret key to be authenticated. 
  
* To access the admin level a user must be created with an isAdmin boolean == true. Default user rights is set to false. Change the user.js file under models to make the adjustment. User can be created using "Postman application".  Admin rights will be routed to the Admin Dashboard, else user will be routed to main page.
* From root directory run command line: Node or Nodemon server.js to start the server then go to localhost:4000 to view the project.

## Features:
* User and Admin authenication
* Custom Pipes
* Form validation & Authenication
* API routeGuards (Protected Routes based on user permissions)
* CRUD operations and RESTful Api 
* Integrated JWT token authenication technology

## Outstanding_Tasks:
* Application photos need to be routed to a photo server service amazon s3 bucket or comparable service and integrated into the forms. Only the route of the image should be saved in the database. This should be used for profile pictures for providers.
* Integration of payment system(Stripe, Paypal)
* Integration of a review system once task is complete.
* Application needs to be unit tested with a Mocha, Karma etc... to check for bugs
* Application needs to be deployed to AWS and connected to the GoluckyCat web domain. 

## Known_Bugs:
* When user or admin logs in it, depending on role, it sould be routed to a profile. Sometimes pressing on the profile (in navbar) link does not work. When reloaded the link works. Possibly a component life cycle issue.
* other bug issues to be updated.
