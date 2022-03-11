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

export type MultiplayerState = {
    users: MultiplayerUser[]
    userId: string
}

export interface MultiplayerExtensionInterface {
    userListUpdated(userState: MultiplayerState): void
    receiveMessage(userId: string, message: any): void
}

export class MultiplayerExtension {
    delegates: Map<string, MultiplayerExtensionInterface>
    userState: MultiplayerState

    constructor(userState: MultiplayerState) {
        this.delegates = new Map()
        this.userState = userState
    }

    register(pluginId: string, delegate?: MultiplayerExtensionInterface) {
        if (delegate) {
            this.delegates.set(pluginId, delegate)
        } else {
            this.delegates.delete(pluginId)
        }
    }

    broadcastMessage?: (pluginId: string, message: any) => Promise<boolean>

    updateUsers(userState: MultiplayerState) {
        this.userState = userState
        
        for (let d of this.delegates.values()) {
            d.userListUpdated(userState)
        }
    }
}