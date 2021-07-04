# wam-extensions
Extensions to the Web Audio Module API

# What?
WAM extensions are optional additions to the webaudiomodule API that extend the interaction between WAM plugin and host.

# How?
WAM extensions are added to the browser context as `window.WAMExtensions`.  WAM plugins can check for the existence of a specific extension, and then choose to load the special functionality or operate without the extension.

# Why extensions?  Why not build into core?
The idea behind WAM extensions came from documenting my pain points using AudioUnits in iOS to make music, and from looking at where DAWs have chosen to more tightly integrate their own plugins than what they are able to do with existing plugin technologies like VST or AU.

The problems solved by these extensions are not needed by 90% of WAM extensions.  But where the extensions are used, they significantly improve the user experience.  By keeping these extensions external, we can keep core focused on pluggable audio modules, and keep each extension focused on solving only the problem it was built to solve. 

In most cases, if a host does not implement a WAM extension, the plugin should be able to still function.  Some plugins require certain WAM extensions in order to function, but hosts are free to only implement the extensions necessary to provide the desired user experience.

# Current extensions

# Notes
Notes allows an audio plugin to publish a list of notes and names that it responds to.  The host passes this note list to the sequencer plugins that are connected to the audio plugin.

For example, here is the pianoroll WAM without the notes extension:

<img width="346" alt="image" src="https://user-images.githubusercontent.com/699550/124386981-e2a5cd80-dcaa-11eb-95a0-b106d760ba92.png">

And here is the pianoroll WAM with the notes extension, sending notes to the drumsampler WAM:

<img width="380" alt="image" src="https://user-images.githubusercontent.com/699550/124386833-39f76e00-dcaa-11eb-85bf-a1069824a0bc.png">

# Clips
<img width="144" alt="image" src="https://user-images.githubusercontent.com/699550/124386845-4a0f4d80-dcaa-11eb-8e4d-c26c05331e35.png">

Clips provide a way for the host to organize and sequence a list of separate sequencer phrases, without any knowledge of the sequencer internals.  The user is able to perform or arrange sequencer clips, but the sequencer is a pluggable WAM.  For example, the sequencer may be a pianoroll where each clip is specific notes on the staff, or it may be a step sequencer, or it could be a random generator with clip-specific variables like seed and length.

# ModulationTarget
This extension allows a WAM to directly modulate another WAM's parameter.  This lets us build various automation styles as WAM plugins, and again push the responsibility out of the host.  For example, a WAM plugin implementing this extension could implement an LFO or a step modulator, or more traditional style point-to-point automation.

