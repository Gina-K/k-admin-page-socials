import {BASE_URL} from '@/constants';
import type {UsersConnectedSocial} from '@/types/general';

export const updateSocialData = (connection: UsersConnectedSocial) => {
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

export const getSocialNameFromAddressBar = () => {
    let path = window.location.pathname;
    let socialName = path.substr(path.lastIndexOf("/") + 1);
    return socialName;
}