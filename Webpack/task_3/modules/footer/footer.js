import $ from 'jquery';
import '../footer/footer.css';

function footer() {
  const footerElem = $('<footer></footer>');
  footerElem.append('<p>Copyright - Holberton School</p>');
  $('body').append(footerElem);
}

export default footer;
