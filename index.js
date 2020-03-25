'use strict';

function generateEndpoint(input) {
  return `https://dog.ceo/api/breeds/image/random/${input}`;
}

function generateHtml(responseJson) {
  console.log(responseJson);
  let dogArray = responseJson.message.map(element => `<img src="${element}" alt="dog image">`);
  console.log(JSON.stringify(dogArray));
  return JSON.stringify(dogArray);
}

function getDogImage(url) {
  fetch(url)
    .then(response => response.json())
    .then(responseJson => 
      $('main').html(generateHtml(responseJson)))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
  $('body').submit(event => {
    event.preventDefault();
    let input = $('#howMany').val();
    let url = generateEndpoint(input);
    getDogImage(url);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});