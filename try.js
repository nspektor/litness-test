const request = require('request');
const resultEl = document.getElementById('result')

request({
  url: 'https://api.foursquare.com/v2/venues/explore',
  method: 'GET',
  qs: {
    client_id: FOURSQUARE_ID,
    client_secret: FOURSQUARE_SECRET,
    ll: '40.7243,-74.0018',
    query: 'coffee',
    v: '20170801',
    limit: 1
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
    resultEl.innerText = body
  }
});
