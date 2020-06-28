//Escape from Cross site scripting.

const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Function has a prerendered html format. It grabs the info from the data of tweet, and places the values of the keys into the assigned locations. For the img, since the key value is a string, and as long as it is a string, the source will still work
//moment is a module that parses the time and presents it in a readable format

const createTweetElement = (tweetData) => {
  const article = `<article class="tweet-container">
    <header class="old-tweet-userinfo">
      <div>
        <img src=${tweetData.user.avatars}>
        <p>${tweetData.user.name}</p>
      </div>
      <p class="Username">${tweetData.user.handle}</p>
    </header>
    <p class="tweet">
      ${escape(tweetData.content.text)}
    </p>
    <footer>
      <p class="dateSinceTweet">
      ${moment(tweetData.created_at, "").fromNow()}
      </p>
    </footer>
  </article>`;
  return article;
};

//Render tweet function uses a helper function to produce the tweet in the proper format, and push them into the html. The classes are predone so CSS can do its job properly"
const renderTweets = (tweets) => {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);    
    $('.old-tweet').prepend($tweet);
  }
};

//This will retrieve the tweets in the database, and render them with a helper function
const loadTweets = () => {  
  $.ajax('/tweets', { method: 'GET', dataType: 'JSON', success: renderTweets });
};

//To keep things DRY- timedSlideUp helps to hide the alert message after a certain time has reached
//Delay is just long enough so that the user can read it, and allows another alert to pop up if necessary
const timedSlideUp = () => {
  $('.alert-message').delay(3500).slideUp('fast');
};

//Prepares page, and renders all tweets on page
$(document).ready(function() {
  $('.alert-message').hide().removeClass("hidden");
  $('form').on('submit', (evt) => {
    evt.preventDefault();
    let tweetText = $('#tweet-text').val();

    //Conditional check to verify if Tweet is empty or over the character limit, if either conditions are true, an error message slides down
    
    if (tweetText === "" || null) {
      if ($('.alert-message').is(":hidden")) {
        $('.alert-message').text('Whoops... You forgot to write your Tweet!').slideDown('slow', timedSlideUp);
      }
    } else if (tweetText.length > 140) {
      if ($('.alert-message').is(":hidden")) {
        $('.alert-message').text('Whoops... Your Tweet is too long!').slideDown('slow', timedSlideUp);
      }
    } else {

      //Action and method have to match the form that we are grabbing the information from
      //Empties tweets, and resets counter, before loading them again

      $.ajax("/tweets", { method: 'POST', data: $('form')
      .serialize() })
      .then(() => {$('.old-tweet')
      .empty(), loadTweets(); 
      $('.counter').text("140");
      $('#tweet-text').val("");
      });
    }
  });
  loadTweets();
});