import { NoteExtension } from "./notes/NoteExtension.js";
import { PatternExtension } from "./patterns/PatternExtension.js";
import { ModulationTargetExtension } from "./modulationTarget/ModulationTargetExtension.js";
import { VideoExtension } from "./video/VideoExtension.js";
import { AssetExtension } from "./assets/AssetExtension.js";
import { CollaborationExtension } from "./collaboration/CollaborationExtension.js"
import { RecordingExtension } from "./recording/RecordingExtension.js"

export type WAMExtensions = {
    assets?: AssetExtension
    notes?: NoteExtension
    patterns?: PatternExtension
    modulationTarget?: ModulationTargetExtension
    video?: VideoExtension
    collaboration?: CollaborationExtension
    recording?: RecordingExtension
}

declare global {
    interface Window { WAMExtensions: WAMExtensions; }
}

window.WAMExtensions = window.WAMExtensions || {};