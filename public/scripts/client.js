/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

'use strict';

// Function createTweetElement takes in a tweet object and returns tweet article
// element containing html structure of tweet
// object taken from initial-tweets.json
// function should return $tweet to the caller
// Document ready function to ensure Javascript runs after HTML

$(document).ready(function () {
  // Escape function to prevent XSS
  const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Function to turn tweet object into article element
  const createTweetElement = function (tweet) {
    //Use Timeago.js to convert time
    const tweetTime = timeago.format(tweet.created_at);
    const $tweet = $(`
    <article class="tweet">
      <header class="tweet-header">
        <div class="fullname-avatar">
          <img class="avatar2" src="${tweet.user.avatars}">
          <h2>${tweet.user.name}</h2>
        </div>
        <div class="username">
          <p>${tweet.user.handle}</p>
        </div>
      </header>
      <p class="tweet-content">${escape(tweet.content.text)}</p>
      <footer>
        <span class="tweet-time">${tweetTime}</span>
        <div class="tweet-interact">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
    `);

    return $tweet;
  };

  // Function to append tweet to #tweeet-container
  // loop through tweets
  // call createTweetElement for each tweet
  // take return value and append it to tweets container
  const renderTweets = function (tweets) {
    $('#tweet-container').empty();

    for (let i = 0; i < tweets.length; i++) {
      const $tweet = createTweetElement(tweets[i]);
      $('#tweet-container').prepend($tweet);
      // $('#tweet-container').append($tweet); // Reverse Order of tweets
    }
  };

  //renderTweets(tweetData);

  // Event Listener for Submit form and prevent default behaviour

  $('form').on('submit', function (event) {
    event.preventDefault();

    // Error message hidin before validation
    //$('.err-msg-cont').slideUp();

    // Validation checks
    const tweetText = $('#tweet-text').val().trim();
    const tweetLength = tweetText.length;
    // Get text from tweet-text area and trim white space
    if (tweetLength === 0) {
      $('.err-msg').text('The tweet is empty! Please enter some text');
      $('.err-msg-cont').slideDown();
      //adding set timeout to slide the error back up after 2 seconds
      setTimeout(function () {
        $('.err-msg-cont').slideUp();
      }, 2500);
      return;
    }

    if (tweetLength > 140) {
      $('.err-msg').text('Your tweet must be less than 140 characters!');
      $('.err-msg-cont').slideDown();
      //adding set timeout to slide the error back up after 2 seconds
      setTimeout(function () {
        $('.err-msg-cont').slideUp();
      }, 2500);
      return;
    }

    // Serialize form data and send it to the server as a query string
    // if validation passes
    const serializedFormData = $(this).serialize();

    // Check serialized data
    console.log('Serialized Form Data:', serializedFormData);

    // Use JQUERY library to submit a POST request that sends the serialized data
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: serializedFormData,
      success: function (response) {
        console.log('Sucess! Tweet Posted', response);

        // Load tweets. Clear text area. Reset Counter targetting right classes
        loadTweets();
        //$('#tweet-container').prepend(newTweet);
        $('#tweet-text').val('');
        $('.counter').text(140);
      },
      error: function (xhr, error) {
        console.log(
          'Error Posting Tweet, or you didnt fill anything out',
          xhr,
          error
        );
      },
    });
  });

  // Function to get tweets from tweets page
  const loadTweets = function () {
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: function (response) {
        console.log('Tweets loaded', response);
        renderTweets(response);
      },
      error: function (error) {
        console.log('Error fetching tweet', error);
      },
    });
  };

  loadTweets();

  // Added event listener for keydown 'enter' in the form submission area
  $('#tweet-text').on('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      $('form').submit();
    }
  });

  $('#toggleFormBtn').on('click', function () {
    $('.new-tweet').toggleClass('show'); // Toggle the 'show' class on the form
  });
});
