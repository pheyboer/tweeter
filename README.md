# Tweeter Project

A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5, CSS, and client side JavaScript. Created as a project for Lighthouse Labs.

This version is desktop, tablet, and mobile friendly.

Users can create short posts of up to 140 characters and have them append to the main page. Posts are sequential, with the most recent posts appearing at the top of the page. Tweeter fetches a list of posts from a simplified 'server' and allows users to add posts to this list dynamically. All requests are made asynchronously

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Final Screenshots

!["screenshot of Desktop view"](https://github.com/pheyboer/tweeter/blob/master/docs/Desktop.png?raw=true)
!["Screenshot of Mobile view"](https://github.com/pheyboer/tweeter/blob/master/docs/Mobile.png?raw=true)

## Dependencies

- "body-parser": "^1.15.2",
- "chance": "^1.0.2",
- "express": "^4.13.4",
- "md5": "^2.1.0"
- Node 5.10.x or above