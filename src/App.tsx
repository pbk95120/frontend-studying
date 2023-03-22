import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BlobOptions } from 'buffer';
import { type } from 'os';

function App() {

  let name :string = 'park';
  let sing :{title :string, name :string } = {title:'버스커', name:'kim'};
  let nam2: string | number = 'kim';
  let arr : (number | string)[] = ['1', 2, 3];
  let obj : {data : number | null} = {data : 1};
  let school : {}

  function mytype(x : number) :number {
    return x*2;
  }

  function mytype2(x? : number) :number {
    if (x){
      return x*2;
    }
    else {
      return 2;
    }
  }

  function len(x :string | number) :number{
    return x.toString.length;
  }

  function ok(a :number, b:boolean, c:string) :string{
    let result :number =0;
    result +=a;
    if(b===true){
      result+=500;
    }

    if(c==='상'){
      result+=100;
    }

    if(result>=600){
      return '합격';
    }
    else{
      return '불합격';
    }
  }

  function nar(x :number|string){
    if (typeof x ==='number'){
      return x*2;
    } 
  }

  function nar2(x :number|string){
    return (x as number * 3);
  }

  function cleaning(x :(string|number)[]){
    let finish :number[] = [];
    x.map((a)=>{
      if (typeof a ==='string'){
        finish.push(parseInt(a))
      } else {
        finish.push(a)
      }
    })

    return finish
  }

  function finalsub( x :{ subject :string|string[]}){
    if ( typeof x.subject ==='string'){
      return x.subject;
    }
    else {
      return x.subject[x.subject.length -1];
    }
  }

  let a = ok(700, false, '중');
  let b = finalsub({ subject : ['science', 'art', 'korean'] });

  type obj ={
    color? :string,
    size :number,
    readonly position :number[]
  }

  let test :obj= {
    size :123,
    position :[1,2,3]
  }
  type examin = {
    name :string,
    phone :number,
    email :number|string
  }

  function gababo(x :('가위'|'바위'|'보')) :('가위'|'바위'|'보')[]{
    return ['가위']
  }

  let userinfo :info= {
  name : 'kim',
  age : 30,
  plusone : (x) => {
    return x + 1 
  },
  changename : () => {
    console.log('안녕')
  }
}

type info = {
  name :string,
  age :number,
  plusone : (x : number) => number,
  changename : () => void
}

type cutType = (x : string) => string

let cutZero :cutType = function(x) {
  if (x[0]==='0'){
    return x.slice(1);
  }
  else{
    return x;
  }
}

type removeType = (x :string) => number

let removeDash :removeType = function(x){
  x = x.replace(/-/g, "");
  return parseFloat(x);
}

  function ultraf(x:string, y:cutType, z:removeType){
    let result = y(a);
    let result2 = z(result);
    console.log(result2)
}

let a3 = ultraf('010-1111-2222', cutZero, removeDash)

class Car {
  model :string;
  price :number;
  constructor(a:string, b:number){
    this.model = a;
    this.price = b;
  }

  tax() :number{
    return this.price/10;
  }
}

let Sonata = new Car('sonata', 3000);

class Word {
  num;
  str;

  constructor(...param :any){
    let nums :number[] = [];
    let strs :string[] = [];

    param.forEach((i :number)=>{
      if (typeof i ==='string'){
        strs.push(i)
      }
      else {
        nums.push(i)
      }
    })

    this.num = nums;
    this.str = strs;
  }
}

let obj2 = new Word('kim', 3, 5, 'park');

function printAll(strs: string | undefined){
  if (strs && typeof strs ==='string'){
    return 'kim'
  }
}

type Fish = {swim: string};
type Bird = {fly:string};
function A(animal: Fish | Bird){
  if('swim' in animal){
    return animal.swim
  }
  return animal.fly
}

let day = new Date();
if ( day instanceof Date){
  console.log(day)
}

type Car2 = {
  wheel : '4개',
  color : string
}

type Bike = {
  wheel : '2개',
  color : string
}
function tazo ( x: Car2 | Bike){
  if (x.wheel === '4개' ){
    return x.color
  }
  else {
    return x.color
  }
}

  return (
    <div className="App">
      <p>{tazo({ wheel :'4개', color:'red'})}</p>
    </div>
  );
}

export default App;

