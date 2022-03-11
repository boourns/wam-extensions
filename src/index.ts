import {WAMExtensions} from "./WAMExtensions.js"
export {WAMExtensions}

import {AssetExtension, AssetExtensionInterface, WamAsset} from "./assets/AssetExtension.js"
export {AssetExtension, AssetExtensionInterface, WamAsset} 

import {NoteExtension,NoteDefinition, NoteListenerCallback} from "./notes/NoteExtension.js"
export {NoteExtension,NoteDefinition, NoteListenerCallback}

import {PatternExtension, PatternDelegate, PatternEntry} from "./patterns/PatternExtension.js"
export {PatternExtension, PatternDelegate, PatternEntry}

import {ModulationTargetExtension, ModulationTargetDelegate} from "./modulationTarget/ModulationTargetExtension.js"
export {ModulationTargetExtension, ModulationTargetDelegate}

import {VideoExtension, VideoExtensionDelegate, VideoExtensionOptions, VideoModuleConfig} from "./video/VideoExtension.js"
export {VideoExtension, VideoExtensionDelegate, VideoExtensionOptions, VideoModuleConfig}

import { MultiplayerExtension, MultiplayerUser, MultiplayerState, MultiplayerExtensionInterface } from "./multiplayer/MultiplayerExtension.js"
export { MultiplayerExtension, MultiplayerUser, MultiplayerState, MultiplayerExtensionInterface }

export default {
    AssetExtension,
    NoteExtension,
    PatternExtension,
    ModulationTargetExtension,
    VideoExtension,
    MultiplayerExtension
}
