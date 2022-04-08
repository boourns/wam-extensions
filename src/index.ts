import {WAMExtensions} from "./WAMExtensions"
export {WAMExtensions}

import {AssetExtension, AssetExtensionInterface, WamAsset} from "./assets/AssetExtension"
export {AssetExtension, AssetExtensionInterface, WamAsset} 

import {NoteExtension,NoteDefinition, NoteListenerCallback} from "./notes/NoteExtension"
export {NoteExtension,NoteDefinition, NoteListenerCallback}

import {PatternExtension, PatternDelegate, PatternEntry} from "./patterns/PatternExtension"
export {PatternExtension, PatternDelegate, PatternEntry}

import {ModulationTargetExtension, ModulationTargetDelegate} from "./modulationTarget/ModulationTargetExtension"
export {ModulationTargetExtension, ModulationTargetDelegate}

import {VideoExtension, VideoExtensionDelegate, VideoExtensionOptions, VideoModuleConfig} from "./video/VideoExtension"
export {VideoExtension, VideoExtensionDelegate, VideoExtensionOptions, VideoModuleConfig}

import { CollaborationExtension, CollaborationDocumentInterface, CollaborationOperation, RemoteSelection } from "./collaboration/CollaborationExtension"
export { CollaborationExtension, CollaborationDocumentInterface, CollaborationOperation, RemoteSelection }

import { RecordingExtension, RecordingDelegate } from "./recording/RecordingExtension"
export { RecordingExtension, RecordingDelegate }

export default {
    AssetExtension,
    NoteExtension,
    PatternExtension,
    ModulationTargetExtension,
    VideoExtension,
    CollaborationExtension,
    RecordingExtension
}
