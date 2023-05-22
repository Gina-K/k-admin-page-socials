import {BASE_URL} from '@/pages/constants';

export const updateSocialData = (connection) => {
    const updateUrl = `${BASE_URL}/socials/${connection.id}`;

    fetch(updateUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(connection),
    })
        .then(response => response.json())
        .then(data => data);
}

export const dateNow = new Date().toLocaleDateString("en-GB", {day: "2-digit", month: "long", year: "numeric"});