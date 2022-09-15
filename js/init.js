// INITIALISE RESOURCES
console.log("%cfuck off 🌷", "color:#e8a0e3;font-size:14px;padding:14px;font-family:monospace;");

// CHANGE GREETING
$(document).ready(function() {
    const text = ["Hi", "Hey", "Hello"];
    const x = Math.floor((Math.random() * text.length));
    $('#greet').html(text[x]);
});

// START AOS
AOS.init({
    // global settings
});