$(document).ready(function() {
    var text = ["maybe the next step in your healing journey is just telling more people to fuck right off.", "sometimes the reason good things aren't happening to you is because you're a huge fucking cunt."];
    var x = Math.floor((Math.random() * 2)); /* change number to fit how many quotes are in the array */ 
    $('#quote').html(text[x]);
});
