// UPDATE SPOTIFY "CURRENTLY LISTENING"
const spotifyInfo = async() => {
    while (true) {
        fetch("https://nanos.club/api/spotify")
            .then((response) => response.json())
            .then((json) => {
                const listening = json.is_playing;

                if (!listening) {
                    $("#spotify").css("display", "none");
                } else {
                    const song = json.item.name;
                    const artist = json.item.artists.map(a => a.name).join(" • ");
                    const album = json.item.album.name;
                    const albumCover = json.item.album.images[0].url;
                    const trackID = json.item.id;

                    const length = json.item.duration_ms;
                    const progress = json.progress_ms;

                    $("#spotify").css("display", "block");
                    $("#spotify-album").attr("src", albumCover).prop("title", album);
                    $("#spotify-song").text(song.replace(/ *\([^)]*\)/g, "").replace(/ *\[[^\]]*]/g, "").replace(/ - [Rr]ecorded [Aa]t.*/g, "")).prop("title", song);
                    $("#spotify-artist").text(artist).prop("title", artist);
                    $("#spotify-track").attr("href", "https://open.spotify.com/track/" + trackID);
                    $("#bar-total").text(formatTime(length));
                    $("#bar-current").text(formatTime(progress));
                    $(":root").css("--bar-length", `${(progress / length * 100)}%`);
                    if (screen.width < 1200) {
                        $("#spotify").css("display", "none");
                    }
                }
            });

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        })
    }
}

const formatTime = (ms) => {
    const minutes = Math.floor(ms / 1000 / 60);
    const seconds = Math.floor((ms / 1000 / 60) % 1 * 60);

    return minutes + ":" + seconds.toString().padStart(2, "0");
};

// 
$(document).ready(() => { spotifyInfo(); });