export default class EventsEmitter<T> {
    private listeners: { [key: string]: Array<(data: T) => void> } = {};

    public subscribe(event: string, listener: (data: T) => void) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(listener);
    }

    public unsubscribe(event: string, listener: (data: T) => void) {
        if (this.listeners[event]) {
            this.listeners[event] = this.listeners[event].filter(l => l !== listener);
        }
    }

    public clearEvents() {
        this.listeners = {};
    }

    public clearEvent(event: string) {
        this.listeners[event] = [];
    }

    public once(event: string, listener: (data: T) => void) {
        const newListener = (data: T) => {
            listener(data);
            this.unsubscribe(event, newListener);
        };
        this.subscribe(event, newListener);
    }

    public hasListeners(event: string): boolean {
        return this.listeners[event] && this.listeners[event].length > 0;
    }

    public emit(event: string, data: T) {
        if (this.hasListeners(event)) {
            this.listeners[event].forEach(listener => listener(data));
        }
    }
}