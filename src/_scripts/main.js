// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import ScrollReveal from 'scrollreveal';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to hola!');
  ScrollReveal().reveal('h1');
});
