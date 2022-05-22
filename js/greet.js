$(document).ready(function() {
    var text = ["Hi, I'm Nano :)", "Hey, I'm Nano :)", "Hello, I'm Nano :)"];
    var x = Math.floor((Math.random() * text.length));
    $('#greet').html(text[x]);
});