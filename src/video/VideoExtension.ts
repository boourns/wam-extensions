export type VideoExtensionDelegate = {
    getVideoOptions(): VideoModuleConfig
    connectVideo(options: VideoExtensionOptions): void
    render(inputs: WebGLTexture[], currentTime: number): WebGLTexture[]
    disconnectVideo(): void
}

export type VideoExtensionOptions = {
    width: number
    height: number
    gl: WebGLRenderingContext
}

export type VideoModuleConfig = {
    numberOfInputs: number
    numberOfOutputs: number
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