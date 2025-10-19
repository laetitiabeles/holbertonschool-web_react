import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="clickButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('#clickButton').on('click', _.debounce(updateCounter, 500));
// .debounce sert à limiter le nombre d'appels pour éviter le spam
