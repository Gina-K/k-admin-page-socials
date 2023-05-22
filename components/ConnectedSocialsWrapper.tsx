import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {useEffect, useReducer} from 'react';
import {ConnectedSocialsList} from '@/components/ConnectedSocialsList';
import {NotConnectedSocialsList} from '@/components/NotConnectedSocialsList';

export const ConnectedSocialsWrapper = ({connectedSocials}) => {
    const [connections, dispatch] = useReducer(connectionsReducer, connectedSocials);

    const handleChangeName = (connection) => {
        dispatch({
            type: 'changedName',
            connection: connection
        });
    }

    const handleChangeNotes = (connection) => {
        dispatch({
            type: 'changedNotes',
            connection: connection
        });
    }

    return (
        <ConnectedSocialsList
            connections={connections}
            onChangeName={handleChangeName}
            onChangeNotes={handleChangeNotes}
        />
    );
}

const connectionsReducer = (connections, action) => {
    switch (action.type) {
        case 'changedName':
        case 'changedNotes': {
            return connections.map((connection) => {
                if (connection.id === action.connection.id) {
                    return action.connection;
                } else {
                    return connection;
                }
            });
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}