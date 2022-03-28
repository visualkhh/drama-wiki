export class ApiService {
    constructor() {
        console.log('ApiService constructor');
    }
    say() {
        console.log('ApiService say');
    }
    get(s: string) {
        return s + '----------------';
    }
}