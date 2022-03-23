// Collaboration Extension lets plugins manage collaboratively edited text documents.

export type CollaborationOperation = {
    operation: "INSERT" | "DELETE"
    position: number
    length?: number
    text?: string
}

export interface CollaborationDocumentInterface {
    toString(): string
    onUpdate(callback?: (operations: CollaborationOperation[]) => void): void
    insert(position: number, text: string): void
    delete(index: number, length: number): void
    applyOperations(operations: CollaborationOperation[]): void
}

export class CollaborationExtension {
    getDocument?: (pluginId: string, documentId: string) => CollaborationDocumentInterface
}