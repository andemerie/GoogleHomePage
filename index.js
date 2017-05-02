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