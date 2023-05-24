import {useEffect, useState} from 'react';

import {BASE_URL} from '@/constants';
import type {AvailableSocialConnectionsList} from '@/types/general';

export const useAvailableSocials = (): { availableSocials: AvailableSocialConnectionsList } => {
    const [availableSocials, setAvailableSocials] = useState([]);

    useEffect(() => {
        const loadSocials = async () => {
            const response = await fetch(`${BASE_URL}/available`);
            const data = await response.json();
            setAvailableSocials(data);
        }

        loadSocials();
    }, []);

    return {availableSocials};
};