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

Dificult features:

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

So, having an idea of my MVP and the requirements, I have started to plan the implementation of the app using react and jest as a testing framework and I looked at some online turorial to get confident with react again.

At this stage, I've been following TDD and I've created basic tests to render a basic component like header. My idea is to reuse react components to keep my code DRY.

# Technologies

- React.js
- Enzyme
- Jest

# Author

Jenny Arenas