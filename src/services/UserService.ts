export class UserService {
    constructor() {
        console.log('UserService constructor');
    }

    say() {
        console.log('UserService say');
    }

    async getData() {
        console.log('UserService getData');
       return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve('data2222');
            }, 5000);
        });
    }
}