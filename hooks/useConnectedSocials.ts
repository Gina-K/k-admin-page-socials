import {useEffect, useState} from 'react';

import {BASE_URL} from '@/constants';
import type {UsersConnectedSocialsList} from '@/types/general';

export const useConnectedSocials = (): { connectedSocials: UsersConnectedSocialsList } => {
    const [connectedSocials, setConnectedSocials] = useState([]);

    useEffect(() => {
        const loadSocials = async () => {
            const response = await fetch(`${BASE_URL}/socials`);
            const data = await response.json();
            setConnectedSocials(data);
        }

        loadSocials();
    }, []);

    return {connectedSocials};
};