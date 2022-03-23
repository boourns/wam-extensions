// Collaboration Extension lets plugins manage collaboratively edited text documents.

export type CollaborationOperation = {
    operation: "INSERT" | "DELETE"
    position: number
    length?: number
    text?: string
}

export type RemoteSelection = {
    anchor: number
    head: number
    color: string
    username: string
    userId: string
}

export interface CollaborationDocumentInterface {
    toString(): string
    onUpdate(callback?: (operations: CollaborationOperation[]) => void): void
    insert(position: number, text: string): void
    delete(index: number, length: number): void
    applyOperations(operations: CollaborationOperation[]): void
    updateSelection(anchor: number, head: number): void
    selections(): RemoteSelection[]
}

export class CollaborationExtension {
    getDocument?: (pluginId: string, documentId: string) => CollaborationDocumentInterface
}