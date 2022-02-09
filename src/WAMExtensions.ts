import { NoteExtension } from "./notes/NoteExtension.js";
import { PatternExtension } from "./patterns/PatternExtension.js";
import { ModulationTargetExtension } from "./modulationTarget/ModulationTargetExtension.js";
import { VideoExtension } from "./video/VideoExtension";
import { AssetExtension } from "./assets/AssetExtension.js";

export type WAMExtensions = {
    assets?: AssetExtension
    notes?: NoteExtension
    patterns?: PatternExtension
    modulationTarget?: ModulationTargetExtension
    video?: VideoExtension
}

declare global {
    interface Window { WAMExtensions: WAMExtensions; }
}

window.WAMExtensions = window.WAMExtensions || {};