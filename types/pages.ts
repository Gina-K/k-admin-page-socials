export interface UsersConnectedSocialsList extends Array<UsersConnectedSocial>{}

interface UsersConnectedSocial {
    id: string;
    socialName: string;
    accountName: string;
    connectionDate: string;
    accountUrl: string;
    modified: string;
    displayName: string;
    notes?: string;
}

export interface AvailableSocialConnectionsList extends Array<AvailableSocialConnection>{}

export interface AvailableSocialConnection {
    id: string;
    name: string;
    isConnected: boolean;
}