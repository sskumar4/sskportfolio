import safetrip from "./images/safetrip.jpg"
import SPProject from "./images/SPProject.jpg"
import eatdaburger from "./images/eatdaburger.jpg"
import notetaker from "./images/notetaker.jpg"
import weatherDashboard from "./images/weatherDashboard.jpg"

export default[
  {
    "id": 2,
    "name": "SafeTrip",
    "image": safetrip,
    "githublink": "https://github.com/sskumar4/safetrip",
    "deploymentlink": "https://safer-trip.herokuapp.com/safetrip",
    "technologies": "React, Express, mongo, node JS, html, CSS, BootStrap CSS, Heroku, APIs",
    "description": "SafeTrip is a full stack MERN application that finds the safety score of a given destination and allows the user to save the destination in a wish list as a future travel destination. The app allows the user to delete the saved city and enter travel notes for the city in the wish list page." 
    
  },
  
  {
    "id": 1,
    "name": "Sports Finder",
    "image": SPProject,
    "githublink": "https://bit.ly/3l6HhAY",
    "deploymentlink": "https://bit.ly/34gCy8T",
    "technologies": "HTML, CSS, Javascript, AJAX, jquery, Materialize, Openweathermap and Ticket master APIs",
    "description": "A sports finder application developed as a group project that allows the user to enter the City to display sports events near city with date, time, venue, and map of the sports event in the same page when the user enters a city in the search box." 
  },
  
  {
    "id": 4,
    "name": "Eat-The-Burger",
    "image": eatdaburger,
    "githublink": "https://bit.ly/3nd18Qu",
    "deploymentlink": "https://bit.ly/3ihKj3f",
    "technologies": "JavaScript, ORM, jQuery, Node.js, Express.js, Handlebars.js, mySQL Database, HTML, CSS, BootStrap, Heroku",
    "description": "Eat the Burger is a full stack app that the front-end and back-end interact with each other. Users can create custom named burgers and submit through the form. They are added to the MySQL database. All database queries are run through a custom built ORM." 
  },
  {
    "id": 5,
    "name": "Note Taker",
    "image": notetaker,
    "githublink": "https://bit.ly/34inebW",
    "deploymentlink": "https://bit.ly/36oAePP",
    "technologies": "HTML, CSS, Javascript, nodeJS, express",
    "description": "Application used to write, save, and delete notes. This application uses an express backend which saves and retrieves note data from a JSON file." 
  },
  {
    "id": 6,
    "name": "Weather Dashboard",
    "image": weatherDashboard,
    "githublink": "https://bit.ly/3fUQN7Y",
    "deploymentlink": "https://bit.ly/3eQiltX",
    "technologies": "HTML, CSS, bootstrap javascript, axios, api (openweathermap)",
    "description": "Weather dashboard is an application to display weather data for cities using the OpenWeather API and local storage."
  }
]
