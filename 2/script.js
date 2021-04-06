// Challenge 2
function genCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-genCat');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    // div.appendChild(image);
    // div.append(image);
    div.appendChild(image);
}