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