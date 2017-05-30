/**
 * Created by victoria on 02.05.2017.
 */
var body = document.querySelector('body');
var triangles = document.querySelectorAll('.triangle');
var apps_menu = document.getElementById('apps_menu');
var search_line = document.getElementById('search_line');
var settings = document.getElementById('settings');
var settings_menu = document.getElementById('settings_menu');
var more = document.getElementById('more');
var google_apps = document.getElementById('google_apps');
var hr = document.querySelector('hr');
var more_apps_ul = document.getElementById('more_apps_ul');
var even_more = document.getElementById('even_more');

search_line.addEventListener('focus', function () {
    this.classList.add('focused');
    this.classList.remove('usual');
}, true);

search_line.addEventListener("blur", function () {
    this.classList.remove('focused');
    this.classList.add('usual');
}, true);


settings.onclick = function() {
    settings_menu.style.display = 'block';
};

body.onclick = function (event) {
    var target = event.target;

    if (target.id !== "settings") {
        settings_menu.style.display = 'none';
    }

    if (target.id !== "google_apps" && target.id !== "more") {
        triangles.forEach(function(triangle) {
            triangle.style.display = 'none';
        });
        apps_menu.style.display = 'none';

        more.style.display = 'block';

        hr.style.display = 'none';
        more_apps_ul.style.display = 'none';
        even_more.style.display = 'none';
    }
};

google_apps.onclick = function() {
    triangles.forEach(function(triangle) {
        triangle.style.display = 'block';
    });
    apps_menu.style.display = 'block';
};

more.onclick = function() {
    more.style.display = 'none';

    hr.style.display = 'block';
    more_apps_ul.style.display = 'block';
    even_more.style.display = 'block';

    var apps_menu = document.getElementById("apps_menu");
    apps_menu.scrollTop = apps_menu.scrollHeight;
};
