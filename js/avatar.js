// UPDATE NAVBAR AVATAR
$(document).ready(function() {
    fetch("https://api.lanyard.rest/v1/users/272535850200596480")
        .then((response) => response.json())
        .then((json) => {
            const avatarHash = json.data.discord_user.avatar;
            const url = `https://cdn.discordapp.com/avatars/272535850200596480/${avatarHash}.png`;

            $('#avatar').attr("src", url);
        });
});

// CHANGE BORDER TO DISCORD ONLINE STATUS COLOR
$(document).ready(function() {
    fetch("https://api.lanyard.rest/v1/users/272535850200596480")
        .then((response) => response.json())
        .then((json) => {
            const status = json.data.discord_status;
            console.log(status);
            if (status == "online") {
                $('#avatar').css("border-color", "#43b581");
            } else if (status == "idle") {
                $('#avatar').css("border-color", "#faa61a");
            } else if (status == "dnd") {
                $('#avatar').css("border-color", "#f04747");
            } else {
                $('#avatar').css("border-color", "#747f8d");
            }
        });
});