export const onRequestGet = async({ env }) => {
    const tokens = await env.TOKENS.get("tokens", { type: "json" });
    const response = await request("https://api.spotify.com/v1/me/player/currently-playing", tokens.accessToken, tokens.refreshToken, env.CLIENT_ID, env.CLIENT_SECRET);

    return new Response(JSON.stringify(response), {
        headers: {
            "content-type": "application/json"
        }
    });
};

const refreshToken = async(refreshToken, CLIENT_ID, CLIENT_SECRET) => {
    const bodyData = new URLSearchParams({
        grant_type: "refresh_token",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: refreshToken
    });

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        body: bodyData
    });

    if (response.status !== 200)
        return null;

    const body = await response.json();

    const newSession = {
        accessToken: body.access_token,
        refreshToken: body.refresh_token ? body.refresh_token : session.refreshToken,
    };

    await env.TOKENS.put("tokens", JSON.stringify(newSession));

    return body.access_token;
};

const request = async(url, accessToken, refreshToken, CLIENT_ID, CLIENT_SECRET) => {
    let response = await fetch(url, {
        headers: {
            authorization: "Bearer " + accessToken
        }
    });

    if (response.status === 401) {
        const newAccessToken = await refreshToken(session);

        if (!newAccessToken) {
            return null;
        }

        response = await fetch(url, {
            headers: {
                authorization: "Bearer " + newAccessToken
            }
        });
    }

    const body = await response.json();

    if (response.status >= 200 && response.status < 300) {
        return body;
    }

    return null;
};