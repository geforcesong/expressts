interface iAdd {
    add(a: number): number;
}

class Computer implements iAdd {
    add(a: number): number {
        return a + 1;
    }

    add10(a: number): number {
        return a + 10;
    }
}

var computer = new Computer();
console.log(computer.add(1));
console.log(computer.add10(1));

// for now everything is working, however what i want is below,

let methodName:string = 'add10';
// computer[methodName]();

// now there is an error: [ts] Element implicity has an 'any' type because type 'Computer' has no index signature
// I don't want to use this way to fix, i want a safer way.

(<any>computer)[methodName](); // don't want this fix