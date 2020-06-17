/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createArticle = (data) => {
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

const createTweetElement = (data) => {
}
const $tweet = $(`<article class="tweet">Hello world</article>`);
