// Collaboration Extension lets plugins manage collaboratively edited text documents.

export interface CollaborationDocumentInterface {
    toString(): string
    onUpdate(callback: (update: any) => void): void
    insert(position: number, text: string): void
    delete(index: number, length: number): void
}

export class CollaborationExtension {
    getDocument?: (pluginId: string, documentId: string) => CollaborationDocumentInterface
}