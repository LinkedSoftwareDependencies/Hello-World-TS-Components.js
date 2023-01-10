import { GreetClass } from "./GreetClass";

export class HelloClass extends GreetClass {
    public readonly name: string;

    constructor(name: string) {
        super();
        this.name = name;  
    }

    public greet() : void {
        console.log(`Hello ${this.name}!`);
    }
}