import {useEffect, useState} from 'react';
import {BASE_URL} from '@/pages/constants';

export const useConnectedSocials = () => {
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