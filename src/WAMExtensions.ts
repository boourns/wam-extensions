import { NoteExtension } from "./notes/NoteExtension.js";
import { PatternExtension } from "./patterns/PatternExtension.js";
import { ModulationTargetExtension } from "./modulationTarget/ModulationTargetExtension.js";
import { VideoExtension } from "./video/VideoExtension";
import { AssetExtension } from "./assets/AssetExtension.js";
import { CollaborationExtension } from "./collaboration/CollaborationExtension.js"

export type WAMExtensions = {
    assets?: AssetExtension
    notes?: NoteExtension
    patterns?: PatternExtension
    modulationTarget?: ModulationTargetExtension
    video?: VideoExtension
    collaboration?: CollaborationExtension
}

declare global {
    interface Window { WAMExtensions: WAMExtensions; }
}

window.WAMExtensions = window.WAMExtensions || {};