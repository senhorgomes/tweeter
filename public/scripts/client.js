/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (data) => {
  const article = `<article class="tweet-container">
  <header class="old-tweet-userinfo">
    <div>
      <img src=${data.user.avatars}>
      <p>${data.user.name}</p>
    </div>
    <p class="Username">${data.user.handle}</p>
  </header>
  <p class="tweet">
    ${data.content.text}
  </p>
  <footer>
  <p class="dateSinceTweet">
    ${data.created_at}
  </p>
  </footer>
</article>`;

return article
}
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);