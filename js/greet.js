$(document).ready(function() {
    var text = ["Hi", "Hey", "Hello"];
    var x = Math.floor((Math.random() * 3));
    $('#greet').html(text[x]);

});