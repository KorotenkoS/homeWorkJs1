'use strict'

var names = ["vasa", "pitya", "anya", "vera", "alex"];

var container = document.querySelector('#list-names');

function render1(names) {
        var html = '';
        for(var name of names){
        html += '<li>' + name + '</li>'
    }
    return html;
}

container.innerHTML = '';  

