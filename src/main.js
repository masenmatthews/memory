import { memory } from './memory';
import './styles.css';

window.onload = memory();

$( document ).ready(function() {
    console.log( "you rule" );
    event.preventDefault()
    $( "button#cell" ).click(function() {
      $(this).toggleClass( "selected" );
});
});
