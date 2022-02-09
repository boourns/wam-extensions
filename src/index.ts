import {WAMExtensions} from "./WAMExtensions.js"
export {WAMExtensions}

import {AssetExtension, AssetExtensionInterface, WamAssetRecord, LoadableWamAsset} from "./assets/AssetExtension.js"
export {AssetExtension, AssetExtensionInterface, WamAssetRecord, LoadableWamAsset} 

import {NoteExtension,NoteDefinition, NoteListenerCallback} from "./notes/NoteExtension.js"
export {NoteExtension,NoteDefinition, NoteListenerCallback}

import {PatternExtension, PatternDelegate, PatternEntry} from "./patterns/PatternExtension.js"
export {PatternExtension, PatternDelegate, PatternEntry}

import {ModulationTargetExtension, ModulationTargetDelegate} from "./modulationTarget/ModulationTargetExtension.js"
export {ModulationTargetExtension, ModulationTargetDelegate}

import {VideoExtension, VideoExtensionDelegate, VideoExtensionOptions} from "./video/VideoExtension.js"
export {VideoExtension, VideoExtensionDelegate, VideoExtensionOptions}

export default {
    AssetExtension,
    NoteExtension,
    PatternExtension,
    ModulationTargetExtension,
    VideoExtension
}
