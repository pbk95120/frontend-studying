export let age = 'kim';
export type Name = string | boolean;

export type Automobile = {
    wheel : number,
    model : string
}

export interface Bike {
    wheel : 2,
    model : string
}

export type ObjFunction = (x? :any) => void

namespace GoodDog {
    export type Dog = string;
}

namespace BadDog {
    export interface Dog {name : string};
}