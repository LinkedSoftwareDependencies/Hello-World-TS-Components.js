import { GreetClass } from "./GreetClass";

export class BonjourClass extends GreetClass {
    public readonly name: string;

    constructor(name: string) {
        super();
        this.name = name;  
    }

    public greet() : void {
        console.log(`Bonjour ${this.name}!`);
    }
}