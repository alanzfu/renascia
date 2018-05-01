'use strict'

var main = function () {
  var footer = `<div class="row section-header footer-header">
    <div class="col-sm-12 section-content">
      <h1>Renascia</h1>
      <h2>Revive - Renew - Restore - Reborn</h2>
      <div class="row footer"><div class="col-sm-12"><p>Copyright Renascia. All rights reserved.</p></div></div>
    </div>
  </div>`

  var header = `
    <div class="row nav">
      <div class="container">
        <div class="col-sm-4">
          <a href="index.html">
            <img class="header-logo" src="img/logo.png">
          </a>
        </div>
        <div class="col-sm-8 ">
          <ul>
            <li>
              <a href="index.html">HOME</a>
            </li>
            <li>
              <a href="team.html">TEAM</a>
            </li>
            <li>
              <a href="deals.html">DEALS</a>
            </li>
            <li>
              <a href="about.html">ABOUT</a>
            </li>
            <li>
              <a href="specialization.html">SERVICES</a>
            </li>
            <li>
              <a href="contact.html">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `

  $('navbar').html(header)
  $('footer').html(footer)
}

$(document).ready(main)
