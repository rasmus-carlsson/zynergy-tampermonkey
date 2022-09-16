// ==UserScript==
// @name         Generate demo data button
// @namespace    https://github.com/rasmus-carlsson/zynergy-tampermonkey
// @version      1.0
// @description  Adds a "Generate demo data" button in the Zynergy navbar
// @author       https://github.com/rasmus-carlsson
// @match        https://*.azurewebsites.net/app/*
// @match        http*://localhost:*/app/*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    // Get the toolbar
    const navbar = document.querySelector(".navbar-header");
    if (!navbar) return;

    // Create the button div
    const div = document.createElement("div");
    div.classList.add("home-button");
    div.style.marginRight = "8px";

    // Create button anchor
    const currentUrl = window.location.href;
    const baseUrlRegex = /http(s?):\/\/(((.*)-frontend.azurewebsites.net)|(localhost:[0-9]*))?\/app\/(.*?)\/([^\/]*)/g;
    const baseUrl = currentUrl.match(baseUrlRegex);
    const a = document.createElement("a");
    a.title = "Generate demo data";
    a.href = `${baseUrl}/batch/process/552b8bb1-8d1c-4fb3-87a9-068aa242ab89`;
    div.appendChild(a);

    // Add button anchor icon
    const icon = document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-database");
    icon.classList.add("fa-2x");
    icon.style.color = "#fff";
    a.appendChild(icon);

    // Add the button to the toolbar
    navbar.insertBefore(div, navbar.children[1]);
})();