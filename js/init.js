// INITIALISE RESOURCES
console.log("%cfuck off 🌷", "color:#e8a0e3;font-size:1.5rem;padding:1rem;font-family:monospace;");

// UPDATE GREETING
const setGreeting = () => {
    const greetings = ["Hi", "Hey", "Hello"];
    const rnd = Math.floor((Math.random() * greetings.length));
    $('#greet').html(greetings[rnd]);
}

// UPDATE AVATAR
const setAvatar = () => {
    fetch("https://api.lanyard.rest/v1/users/272535850200596480")
        .then((response) => response.json())
        .then((json) => {
            const avatarHash = json.data.discord_user.avatar;
            const status = json.data.discord_status;
            const spotify = json.data.listening_to_spotify;
            const url = `https://cdn.discordapp.com/avatars/272535850200596480/${avatarHash}.png`;

            $('#avatar').attr("src", url);

            if (spotify) {
                $('#avatar').css("border-color", "#1fdf64");
            } else {
                switch (status) {
                    case "online":
                        $('#avatar').css("border-color", "#43b581");
                        break;
                    case "idle":
                        $('#avatar').css("border-color", "#faa61a");
                        break;
                    case "dnd":
                        $('#avatar').css("border-color", "#f04747");
                        break;
                    default:
                        $('#avatar').css("border-color", "#747f8d");
                }
            }
        });
}

// 
$(document).ready(() => {
    setGreeting();
    setAvatar();
});