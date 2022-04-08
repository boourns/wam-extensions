export interface RecordingDelegate {
    armRecording: (armed: boolean) => void
}

export class RecordingExtension {
    delegates: Map<string, RecordingDelegate>
   
    constructor() {
       this.delegates = new Map()
    }

    register(instanceId: string, delegate: RecordingDelegate) {
        this.delegates.set(instanceId, delegate)
    }

    deregister(instanceId: string) {
        this.delegates.delete(instanceId)
    }

    armRecording(instanceId: string, armed: boolean) {
        let delegate = this.delegates.get(instanceId)
        if (delegate) {
            delegate.armRecording(armed)
        }
    }
}