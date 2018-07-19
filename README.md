# Neighborhood Map

This application contains a Google Map with a fixed set of Markers. I created it as final project for my [Udacity Nanodegree](https://de.udacity.com/course/front-end-web-developer-nanodegree--nd001).

## Technology Stack
- React, JavaScript, HTML, CSS
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Google Map API](https://developers.google.com/maps/documentation/javascript/tutorial)
- [Foursquare API](https://developer.foursquare.com/places-api)
- [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers/) to guarantee offline accessibility

## How to use
The Map shows a limited set of restaurants in the area of Berlin, Germany.
- Click on a Marker or a name in the list to open the detail information of the restaurant
- Close the detail information by clicking somewhere in the map, on the 'x' or on another name / Marker
- Filter the locations by typing a query in the search field (on the left top)
- Use the offline accessibility of the page even if you don´t have an internet connection

## How to set up
Clone or download the repo. Run ```npm install``` in your command line. Run ```npm start``` in your to open the html in your browser.

If you want to test the offline accessibility you have to follow the guidelines of create-react-app. The following information is part of the automized generated README.md (run ```create-react-app``` to instantiate a new project):

1. The service worker is only enabled in the production environment, e.g. the output of npm run build. It's recommended that you do not enable an offline-first service worker in a development environment, as it can lead to frustration when previously cached assets are used and do not include the latest changes you've made locally.

1. If you need to test your offline-first service worker locally, build the application (using npm run build) and run a simple http server from your build directory. After running the build script, create-react-app will give instructions for one way to test your production build locally and the deployment instructions have instructions for using other methods. Be sure to always use an incognito window to avoid complications with your browser cache.

