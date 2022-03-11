// Multiplayer extension enables plugins to understand multiple users within the session.

// Via the multiplayer extension, the host provides:
// - a list of all users within the session
// - the current user's user ID ("my ID")
// - the ability for plugins to broadcast, and receive, events from all users.

// Plugins register a delegate of interface MultiplayerExtensionInterface with the loaded MultiplayerExtension.

export type MultiplayerUser = {
    id: string,
    name: string,
    color: string
}

export interface MultiplayerExtensionInterface {
    userListUpdated(users: MultiplayerUser[], myId: string): void
    receiveMessage(message: any): void
}

export class MultiplayerExtension {
    delegates: Map<string, MultiplayerExtensionInterface>
    users: MultiplayerUser[]
    userId: string

    constructor(users: MultiplayerUser[], userId: string) {
        this.delegates = new Map()
        this.users = users
        this.userId = userId
    }

    register(pluginId: string, delegate?: MultiplayerExtensionInterface) {
        if (delegate) {
            this.delegates.set(pluginId, delegate)
        } else {
            this.delegates.delete(pluginId)
        }
    }

    broadcastMessage?: (pluginId: string, message: any) => Promise<boolean>
    updateUsers?: (users: MultiplayerUser[], userId: string) => void
}