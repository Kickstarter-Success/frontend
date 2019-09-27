# Front-End-Kickstarter-Success

**Deployed website**:
[Kickstarter Success](https://kickstartersuccess.now.sh/)

## Description

The Kickstarter Success React App is built for anyone to test how likely their campaign will be successful on Kickstart website. Our app displays the successful percentage, category comparison and other data from the machine learning model. As a user of our app, you'll be able to create, edit, delete your campaigns on the dashboard.

## Getting Started

To begin using the App as a client end user, follow the link and Sign Up for a new account with a username and password. User will be prompted to enter username and password again after the inital Sign Up to login to their dashboard.
<!-- <img width="600" height="400" src=/> -->

To login to the App, follow the link and login with the correct username and password.
<!-- <img width="600" height="400" src="" /> -->

To view the dashboard, login with user credentials and the first page rendered after the login is the dashboard On the dashboard page, there will be the user info and campaigns.
<!-- <img width="600" height="400" src="" /> -->

To create a new campaign, click on the "Add a campaign" button or the "ADD CAMPAIGN" on nav bar, enter all the information such as campaign name, campaign category, fundraising goal, country, duration and description. Click "Submit" to save the campaign.
<!-- <img width="600" height="400" src=""> -->

To view the campaign result, click on "View result" at the bottom of a campaign card. Doing so will redirect user to a page with the corresponding campaign with predictions. 

To edit the campaign, click on "Edit" on the result page and that would redirect to the campaign form. User can edit any information on the form and click "Submit" to save all the edits and rerun the prediction.

To delete the campaign, click on "Delete" on the result page and the campaign will be deleted. The page will render back to the dashboard automatically.
<!-- <img width="600" height="400" src="" /> -->

## Prerequisites

All of the below dependencies can be installed using:
`yarn install` or `npm install`

Start development by creating a react app using:
`yarn start` or `npm start`

## Dependencies

This project was created using yarn and designed for react client side. Other dependencies include:

```
"axios": "^0.19.0",
"formik": "^1.5.8",
"now": "^16.2.0",
"react": "^16.9.0",
"react-dom": "^16.9.0",
"react-iframe": "^1.8.0",
"react-loader-spinner": "^3.1.4",
"react-redux": "^7.1.1",
"react-router-dom": "^5.0.1",
"react-scripts": "3.1.2",
"redux": "^4.0.4",
"redux-thunk": "^2.3.0",
"semantic-ui-css": "^2.4.1",
"semantic-ui-react": "^0.88.1",
"styled-components": "^4.4.0",
"yup": "^0.27.0"

```
## Examples of Tables

The "users" table looks like this:

```
"username": "demo",
"password": "123456",
```

The "Add New Campaign" table look like this:

```
"campaign_name": "Awesome projcet"
"campaign_category": "Software"
"Fundraising Goal: "100000"
"Country: "United State"
"Duration: "45 days"
"Description": "This is an awesome project!"

```

## Endpoint Usage

**POST** - Register a new user
\*\*\* Requires a username, and password

https://kickstarter-backend.herokuapp.com/api/auth/register

**POST** - Login a registered user. Also provides Web Token.
\*\*\* Requires username and password

https://kickstarter-backend.herokuapp.com/api/auth/login

**GET** - Returns all campaigns
\*\*\* Requires JSON Web Token
https://kickstarter-backend.herokuapp.com/api//kickstarter/user/:user_id


**POST** - Adds a new campaign
\*\*\* Requires JSON Web Token and a data object
https://kickstarter-backend.herokuapp.com/api//kickstarter/user/:user_id

**PUT** - Edits a campaign with the selected id
\*\*\* Requires JSON Web Token and a data object
https://kickstarter-backend.herokuapp.com/api//kickstarter/:id

**DELETE** - Deletes a campaign with the selected id
\*\*\* Requires JSON Web Token
https://kickstarter-backend.herokuapp.com/api//kickstarter/:id

## Support

There is currently no active support for this app

## Authors and acknowledgment

**UI Engineers**:
Ethan Hoover (https://github.com/Cireimu)

**Front End Engineers**:
Uzias Rivera (https://github.com/uziasr)
Richany Alina Nguon (https://github.com/richanynguon)

**Front End Framework Engineer**:
Jojo Zhang (https://github.com/nomadkitty)

**Backend Engineer**:
Timothy McGowen (https://github.com/mcgowent)

**Data Scientist**
Jordan Ireland (https://github.com/Jordan-Ireland)
John Morrison (https://github.com/JohnMorrisonn)
Elizabeth Ter Sahakyan (https://github.com/elizabethts)

**Project Lead**
Gustavo Isturiz (https://github.com/orgs/Kickstarter-Success/people/gisturiz)

**Full Repo**:
https://github.com/Kickstarter-Success

## Project status

This project was completed for a Lambda School build week September 2019. There may be updates to the application periodically

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details