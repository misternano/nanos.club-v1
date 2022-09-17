// UPDATE SPOTIFY "CURRENTLY LISTENING"
const spotifyInfo = () => {
    fetch("https://api.lanyard.rest/v1/users/272535850200596480")
        .then((response) => response.json())
        .then((json) => {
            const listening = json.data.listening_to_spotify;
            const song = json.data.spotify.song;
            const artist = json.data.spotify.artist;
            const album = json.data.spotify.album;
            const albumCover = json.data.spotify.album_art_url;
            const trackID = json.data.spotify.track_id;

            const timeStart = json.data.spotify.timestamps.start;
            const timeEnd = json.data.spotify.timestamps.end;
            const difference = timeEnd - timeStart;
            const minutes = Math.floor(difference / 1000 / 60);
            const seconds = Math.floor((difference / 1000 / 60) % 1 * 60);
            const time = minutes + ":" + seconds.toString().padStart(2, "0");

            if (!listening) {
                $("#spotify").css("display", "none");
            } else {
                $("#spotify").css("display", "block");
                $("#spotify-album").attr("src", albumCover).prop("title", album);
                $("#spotify-song").text(song.replace(/ *\([^)]*\)/g, "").replace(/ *\[[^\]]*]/g, "").replace(/ - [Rr]ecorded [Aa]t.*/g, ""));
                $("#spotify-artist").text(artist.split("; ").join(" • "));
                $("#spotify-track").attr("href", "https://open.spotify.com/track/" + trackID);
                $("#bar-total").text(time);
                if (screen.width < 1200) {
                    $("#spotify").css("display", "none");
                }
            }
        });
}


// 
$(document).ready(() => { spotifyInfo(); });