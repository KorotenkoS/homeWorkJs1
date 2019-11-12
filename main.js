'use strict'

var names = ["vasa", "pitya", "anya", "vera", "alex"];

var container = document.querySelector('#list-names');

var html = '';

for(var name of names){
        html += '<li>' + name + '</li>'
};
console.log(html);

container.innerHTML = html;  

