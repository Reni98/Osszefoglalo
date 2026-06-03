//length
let nev=["Elemér","John","Jane"]
let szamok=[2,3,4,4,6,4,5,12,412]
console.log(nev.length);
console.log(szamok.length);

//Array toString() Method
let nevek=["Elemér","John","Jane"]
let a=nevek.toString()
console.log(nevek);
console.log(a);

//join()
let j = nevek.join("#")
console.log(j);

//delete Operator

let objektum ={
    nev:"John Doe",
    age:"45",
    salary:"2000"
}

console.log(delete objektum.age);
console.log(objektum);


//concat() 
let fruit1=["strawberry","bluberry","lemon"]
let fruit2=["watermelon","apple"]
let fruit3=["grapes","mango"]

let fruits=fruit1.concat(fruit2,fruit3)
console.log(fruits);

//flat()
let tomb1=["asztal","szék","telefon", ["egér"], ["szőnyeg", "monitor"], "egérpad"]
let tomb2=tomb1.flat(Infinity)
console.log(tomb2);

//push()
let orszagok=["Magyarország","Törökország"]
orszagok.push("Észtország")
orszagok.push("Oroszország","Anglia","Spanyolország")
console.log(orszagok);

//unshift()
let lottoszamok=[45,67,23]
lottoszamok.unshift(12,42)
console.log(lottoszamok);

//pop()
let elemek=[1,34,53,56,3]
elemek.pop()
console.log(elemek);

//shift()
let szamok12=[34,12,0,78]
szamok12.shift()
console.log(szamok12);

//splice()
let b=[5,67,12,43,1,98]
b.splice(1,4)
console.log(b);

//