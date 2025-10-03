export declare class FloatingDialog {
    private dialog;
    private content;
    constructor();
    updatePosition(x: number, y: number): void;
    hide(): void;
    show(): void;
    updateMessages(newMessages: string[]): void;
    destroy(): void;
}
