console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var tweet = {
  status:"Happy Father's Day, Dad!"
};

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
  if(err){
    console.log('Something weng wrong!');
  } else{
  console.log('It worked!');
  }
}
