$(document).ready(function() {
    var text = ["maybe the next step in your healing journey is just telling more people to fuck right off."];
    var x = Math.floor((Math.random() * 1)); /* change number to fit how many quotes are in the array */ 
    $('#quote').html(text[x]);
});
