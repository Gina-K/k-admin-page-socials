import {useReducer} from 'react';

import {ConnectedSocialsList} from '@/components/ConnectedSocialsList';
import type {UsersConnectedSocial, UsersConnectedSocialsList} from '@/types/general';

type Props = {
    connectedSocials: UsersConnectedSocialsList;
}

enum ConnectionsActionTypes {
    CHANGE_NAME = 'CHANGE_NAME',
    CHANGE_NOTES = 'CHANGE_NOTES'
}

interface ConnectionsAction {
    type: ConnectionsActionTypes;
    connection: UsersConnectedSocial;
}

export const ConnectedSocialsWrapper = ({connectedSocials}: Props) => {
    const [connections, dispatch] = useReducer(connectionsReducer, connectedSocials);

    const handleChangeName = (connection: UsersConnectedSocial) => {
        dispatch({
            type: ConnectionsActionTypes.CHANGE_NAME,
            connection: connection
        });
    }

    const handleChangeNotes = (connection: UsersConnectedSocial) => {
        dispatch({
            type: ConnectionsActionTypes.CHANGE_NOTES,
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

const connectionsReducer = (connections: UsersConnectedSocialsList, action: ConnectionsAction) => {
    switch (action.type) {
        case 'CHANGE_NAME':
        case 'CHANGE_NOTES': {
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