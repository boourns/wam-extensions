export type VideoExtensionDelegate = {
    connectVideo(options: VideoExtensionOptions, texture?: WebGLTexture): WebGLTexture
    render(currentTime: number): void
    disconnectVideo(): void
}

export type VideoExtensionOptions = {
    width: number
    height: number
    gl: WebGLRenderingContext
}

export class VideoExtension {
    delegates: Map<string, VideoExtensionDelegate>
    connections: Map<string, string>
    
    constructor() {
        this.delegates = new Map()
        this.connections = new Map()
    }

    setDelegate(pluginId: string, delegate?: VideoExtensionDelegate) {
        if (delegate) {
            this.delegates.set(pluginId, delegate)
        } else {
            this.delegates.delete(pluginId)
        }
    }

    getDelegate(pluginId: string): VideoExtensionDelegate | undefined {
        return this.delegates.get(pluginId)
    }
}