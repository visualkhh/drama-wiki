export interface ConstructorType<T> {
    new(...args: any[]): T;
}
export class Manager {
    instance = new Map<ConstructorType<any>, any>();

    get<T>(type: ConstructorType<T>): T {
        if (!this.instance.has(type)) {
            this.instance.set(type, new type());
        }
        return this.instance.get(type);
    }
}