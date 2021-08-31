import { NoteExtension } from "./notes/NoteExtension.js";
import { PatternExtension } from "./patterns/PatternExtension.js";
import { ModulationTargetExtension } from "./modulationTarget/ModulationTargetExtension.js";
import { VideoExtension } from "./video/VideoExtension";

export type WAMExtensions = {
    notes?: NoteExtension
    patterns?: PatternExtension
    modulationTarget?: ModulationTargetExtension
    video?: VideoExtension
}

declare global {
    interface Window { WAMExtensions: WAMExtensions; }
}

window.WAMExtensions = window.WAMExtensions || {};