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
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData =  [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  // Function to turn tweet object into article element
  const createTweetElement = function (tweet) {
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
      <p class="tweet-content">${tweet.content.text}</p>
      <footer>
        <span class="tweet-time">${tweet.created_at}</span>
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
      $('#tweet-container').append($tweet);
    }
  };

  renderTweets(tweetData);
});
