const searchCountry = function (country) {
  return new Promise(function (resolve, reject) {
    let ajax = new XMLHttpRequest;
    let url = 'https://nasa-twitter.herokuapp.com/twitter?busca='+country;

    ajax.open('GET', url, true);
    ajax.send();

    ajax.addEventListener('loadend', function(ev) {
      if (ajax.readyState === 4 && ajax.status >= 200 && ajax.status < 300) {
        return resolve(ajax, ev);
      }

      if (ajax.readyState === 4 && ajax.status >= 400) {
        return reject(ajax, ev);
      }
    });
  });
};

const getTwitts = function(country) {
  searchCountry(country)
    .then(function(response) {
      var twitter_field = document.querySelector('.twitt');
      twitter_field.classList.remove('hide');

      var texts = '';
      var twitts = JSON.parse(response.response);

      twitter_field.innerHTML = '';
      start(0, twitts.statuses, twitter_field);
    })
    .catch(function(error) {
      console.log('Error', error);
    });
};

function start(counter, array, twitter_field){
  if(counter < 3){
    setTimeout(function(){
      counter++;
      twitter_field.innerHTML += array[counter].text + '<br><br>';
      start(counter, array, twitter_field);
    }, 2000);
  }
}
