export type ThemeUpdateCallback = (themeCss: string) => void

export class ThemeExtension {
    listeners: Map<string, ThemeUpdateCallback>
    theme: string

    constructor(theme: string) {
        this.theme = theme

        this.listeners = new Map()
    }

    addListener(pluginId: string, callback?: ThemeUpdateCallback) {
        if (callback) {
            this.listeners.set(pluginId, callback)
            callback(this.theme)
        } else {
            this.listeners.delete(pluginId)
        }
    }
}