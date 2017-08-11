/**
 * Application entry point
 */

// Load application styles
import $ from 'jquery';
import 'styles/foundation.scss';
import './foundation/entries/foundation';
import axios from 'axios';
import Vue from 'vue';
$(document).foundation();

// ================================
// START YOUR APP HERE
// ================================

// util tests
// console.log(Foundation.Box.GetDimensions(document.body));
// console.log(Foundation.MediaQuery);

// $(window).on('changed.zf.mediaquery', (event, newSize, oldSize) => {
//   console.log(newSize,oldSize);
// });

// axios.get('http://wordpress.org/wp-json/wp/v2/posts')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


var app = new Vue({
  el: "#app",
  data() {
    return {
      msg: "Test Api Stuf"
    }
  }
});

console.log(app);
