/**
 * Created by victoria on 02.05.2017.
 */
var search_line = document.getElementById('search_line');

search_line.addEventListener('focus', function () {
    this.classList.add('focused');
    this.classList.remove('usual');
}, true);

search_line.addEventListener("blur", function () {
    this.classList.remove('focused');
    this.classList.add('usual');
}, true);

var settings = document.getElementById('settings');

settings.onclick = function(event) {
    var settings_menu = document.getElementById('settings_menu');
    settings_menu.style.display = 'block';
}

var body = document.querySelector('body');

body.onclick = function (event) {
    var target = event.target;

    if (target.id == "settings") return;

    var settings_menu = document.getElementById('settings_menu');
    settings_menu.style.display = 'none';
}