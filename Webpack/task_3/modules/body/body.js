import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

function body() {
  const bodyElem = $('<main></main>');
  bodyElem.append('<p>Dashboard data for the students</p>');
  bodyElem.append('<button id="clickButton">Click here to get started</button>');
  bodyElem.append('<p id="count"></p>');

  $('body').append(bodyElem);

  $('#clickButton').on('click', _.debounce(updateCounter, 500));
}

export default body;
