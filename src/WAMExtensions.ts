import { NoteExtension } from "./notes/NoteExtension";
import { PatternExtension } from "./patterns/PatternExtension";
import { ModulationTargetExtension } from "./modulationTarget/ModulationTargetExtension";
import { VideoExtension } from "./video/VideoExtension";
import { AssetExtension } from "./assets/AssetExtension";
import { CollaborationExtension } from "./collaboration/CollaborationExtension"
import { RecordingExtension } from "./recording/RecordingExtension"

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