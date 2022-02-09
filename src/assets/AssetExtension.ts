// Asset extension is for plugins that load or save external assets

// Plugins register a delegate of interface AssetExtensionInterface with the loaded AssetExtension.

export type WamAssetRecord = {
    id: string // random token set by host to identify this asset in the project
    uri: string
    name: string // friendly name for the file.
}

export type LoadedWamAsset = {
    asset: WamAssetRecord
}

export type WamAssetType = "AUDIO" | "DATA"

export interface AssetExtensionInterface {
    fetchAssetList(): WamAssetRecord[]
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
    pickAsset?: (assetType: WamAssetType, loadCallback: (asset: LoadedWamAsset) => void) => void
    loadAsset?: (asset: WamAssetRecord) => Promise<LoadedWamAsset>
}
