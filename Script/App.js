"use strict";
(function () {
    function DisplayHomePage(){
        console.log("Calling DisplayHomePage...");
        let aboutUsButton = document.getElementById("AboutUsBTN");
        aboutUsButton.addEventListener("click", function(){
            location.href="About.html";
        })
        let MainContent = document.getElementsByTagName("main")[0];
        let MainParagraph = document.createElement("p");
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is my first main paragraph";
        MainContent.appendChild(MainParagraph);
        let FirstString = "This is";
        let SecondString = `${FirstString} my second string`; // String literal
        MainParagraph.textContent = SecondString;
        let DocumentBody = document.body;
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my first article paragraph</p>`;
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }
    function DisplayProductsPage(){
        console.log("Calling DisplayProductsPage...");
    }
    function DisplayServicesPage(){
        console.log("Calling DisplayServicesPage...");
    }
    function DisplayContactsPage(){
        console.log("Calling DisplayContactsPage...");
    }
    function DisplayAboutPage(){
        console.log("Calling DisplayAboutPage...");
    }
    function Start() {
        console.log("Starting App");
        switch (document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "Contacts":
                DisplayContactsPage();
                break;
            case "About":
                DisplayAboutPage();
                break;
        }
    }
    window.addEventListener("load", Start);
})()