export default class EventEmitter<T> {
    private listeners: Array<(data: T) => void> = [];

    public subscribe(listener: (data: T) => void) {
        this.listeners.push(listener);
    }

    public unsubscribe(listener: (data: T) => void) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }

    public clear() {
        this.listeners = [];
    }

    public once(listener: (data: T) => void) {
        const newListener = (data: T) => {
            listener(data);
            this.unsubscribe(newListener);
        };
        this.subscribe(newListener);
    }

    public hasListeners(): boolean {
        return this.listeners.length > 0;
    }

    public emit(data: T) {
        if (this.hasListeners()) {
            this.listeners.forEach(listener => listener(data));
        }
    }
}