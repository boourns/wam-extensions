export interface RunPresetDelegate {
    runPreset: () => void
}

export class RunPresetExtension {
    delegates: Map<string, RunPresetDelegate>
   
    constructor() {
       this.delegates = new Map()
    }

    register(instanceId: string, delegate: RunPresetDelegate) {
        this.delegates.set(instanceId, delegate)
    }

    deregister(instanceId: string) {
        this.delegates.delete(instanceId)
    }

    runPreset(instanceId: string) {
        let delegate = this.delegates.get(instanceId)
        if (delegate) {
            delegate.runPreset()
        }
    }
}