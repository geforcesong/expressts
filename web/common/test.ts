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

type FNs = keyof Computer;
let methodName:FNs = 'add10';
let ret = computer[methodName](1);
console.log(ret);
