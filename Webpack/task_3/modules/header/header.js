import $ from 'jquery';
import '../header/header.css';
import logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

function header() {
  const headerElem = $('<header></header>');
  const img = $('<img />').attr('src', logo).attr('alt', 'Holberton Logo');
  const title = $('<h1>Holberton Dashboard</h1>');

  headerElem.append(img, title);
  $('body').append(headerElem);
}

export default header;
