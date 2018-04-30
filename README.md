# Healthera Tech Test

The main goal of this Tech Test is creating a clone of the Healthera patient portal, so the pharmacists can have access to subscribed patients and send them a message with information about prescriptions or answers to any questions.
<p>
<img src="https://user-images.githubusercontent.com/29259526/39251212-a8e9a258-489a-11e8-8265-ab9bde9f14b1.png" width="650" ="align-center">
</p>

## User stories

```
As a pharmacist
So I can give the patient the right information about his prescription
I want to be able to **access** to the Patient Portal

As a pharmacist
So I can see all the patients using the app
I want to be able to **search** a patient

As a pharmacist
So I can update the patient with specific information
I want to **select** the patient to send a message

As a pharmacist
So I can provide the right information about patient's prescription
I want to be able to **send** a message to the selected patient.

As a pharmacist 
So I can keep a record of the information given to the patient
I want to be able to **view** all the messages on the screen

To be Completed:

As a user
so I can check the patients who have a user verification
I want to be able to view the verified or unverified patients when clicking a button

As a user
So I can see my the patient's details
I want to be able to select a tab and display all the information

```

## Approach

My first step was a brainstorm of ideas and creation of user stories using a domain model as a guide to understand the user requirements.
To have a better understanding of this application, I drew a diagram with the client requirements and an idea of an MVP.

Diagram:
<p>
<img src="https://user-images.githubusercontent.com/29259526/39365608-81895204-4a29-11e8-9be4-7f3df6bf7420.png" width="500" ="align-center">
</p>

MVP:

<p>
<img src="https://user-images.githubusercontent.com/29259526/39366580-3b2e3358-4a2c-11e8-91fb-36c77216bba9.png" width="500" ="align-center">
</p>

So, having an idea of my MVP and the requirements, I have started to plan the implementation of the app using react and jest as a testing framework and I looked at some online turorials to get confident with react again.

I've followed Test Driven Development principles, starting with basic tests to render a basic component like header and testing more complicated units of code later on. My idea was to reuse react components to keep my code DRY, therefore, I created parent and child components so I was able to pass parameters from parent to children.

To complete this tech test, it wasn't required the use of database or API's, so to keep patients names I used datda.json file from where I retrieved the patient data when need it. In this case only one patient was saved into data.json, I need to improve funtionality of chatbox, so It clears when selecting a different patient.

This project was developed in 3 and half days.

Screenshot of the app:

<p>
<img src="https://user-images.githubusercontent.com/29259526/39423547-503cadc0-4c6a-11e8-8a8b-2b3447532b40.png" width="500" ="align-center">
</p>

<p>
<img src="https://user-images.githubusercontent.com/29259526/39423585-85fab1e6-4c6a-11e8-8edb-8d459eeb9bcc.png" width="500" ="align-center">
</p>

<p>
<img src="https://user-images.githubusercontent.com/29259526/39423618-b9fd6de4-4c6a-11e8-8e25-64cf2932230e.png" width="500" ="align-center">
</p>

<p>
<img src="https://user-images.githubusercontent.com/29259526/39423726-29068c8e-4c6b-11e8-8b83-a961ff8fc4e1.png" width="500" ="align-center">
</p>


## Getting started

This instructions will get you a copy of the project up on your local machine for development and testing purposes

### Installing
 
Clone the project to your local directory
- $git clone https://github.com/jennymarin1989/Healthera-Tech_Test.git
- $cd healthera
- $npm install

### Testing

Run tests:

- $npm run test

### Deployment

- $npm start


## Thoughts

Due to other commitments, I was unable to complete all user stories,if given more time, I would improve the app by:

 - Improving and refactoring unit tests
 - Adding User interface testing like Cypress
 - Adding functionality to view verified and unverified patients
 - Adding functionality to view patient details
 - Improving app styling, adding avatars
 - clearing the chatbox when other patient is selected

One of the biggest challenges I found in this project was testing event handlers, like onClick or onChange, I wasn't able to simulate the event in my test due to a node error, I spent time reserching about it. If given more time I would find the solution to pass the test.
Rendering components horizontally and the creation of the chatbox was also a challenge, I used Flexview package and bootstrap for it.


# Technologies

- Javascript
- React.js
- Enzyme
- Jest

# Author

Jenny Arenas