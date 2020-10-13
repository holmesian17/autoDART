// ==UserScript==
// @name         Auto-DART
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  default the choice to the proper desk
// @author       You
// @match        https://dart.lrs.org/input/
// @match        https://dart.lrs.org
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js


// ==/UserScript==

window.addEventListener('load', function() {
    document.evaluate("//select[@name='input_3']",document.body,null,9,null).singleNodeValue.selectedIndex=3;
    // alert("Your page has loaded.")
}, false);

/* DISABLE TIMEOUT

function keepAlive() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', "/restricted_file_url");
    httpRequest.send(null);
}

setInterval(keepAlive, 840000);  //My session expires at 15 minutes
*/
