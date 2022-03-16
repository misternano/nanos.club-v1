$(document).ready(function() {
    var text = ["Hi, I'm Nano :)", "Hey, I'm Nano :)", "Hello, I'm Nano :)"];
    var x = Math.floor((Math.random() * 3));
    $('#greet').html(text[x]);

});