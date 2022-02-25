// Asset extension is for plugins that load or save external assets

// Plugins register a delegate of interface AssetExtensionInterface with the loaded AssetExtension.

export type WamAsset = {
    uri: string // could be globally-loadable, could be a host-specific URI to indicate where to fetch asset
    name: string // friendly name for the file.
    content?: Blob // content of the asset
}

export type WamAssetType = "AUDIO" | "DATA"

export interface AssetExtensionInterface {
    fetchAssetList(): WamAsset[]
}

export class AssetExtension {
    delegates: Map<string, AssetExtensionInterface>

    constructor() {
        this.delegates = new Map()
    }

    register(pluginId: string, delegate?: AssetExtensionInterface) {
        if (delegate) {
            this.delegates.set(pluginId, delegate)
        } else {
            this.delegates.delete(pluginId)
        }
    }

    // plugins call these functions, implemented by host
    pickAsset?: (pluginId: string, assetType: WamAssetType, loadCallback: (asset: WamAsset | undefined) => Promise<void>) => void
    loadAsset?: (pluginId: string, assetUri: string) => Promise<WamAsset | undefined>
}
