// Challenge 1

function ageInDays() {
    var birthYear = prompt('What year where you born?');
    var year = new Date().getFullYear();
    var ageInDayss = (year - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-results').appendChild(h1);
}

function reset (){
    document.getElementById('ageInDays').remove();
}