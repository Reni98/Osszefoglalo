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

//slice()
let c= [3,3,6,78,12,0,34,23]
let res =c.slice(2,6)
console.log(c);
console.log(res);

//some()
let szamok23=[3,45,6,7,3,13,45,2,1]
let res2=szamok23.some((val) => val>10)
console.log(res2);

//map()
let szamok24=[4,9,16]
// let res3=szamok24.map(negyzetreemel)

function negyzetreemel(){
    let szam = szamok24.map(Math.sqrt)
    console.log(szam);
    
}
negyzetreemel()
// console.log(res3);


//filter()
let szamok25=[1,2,5,4,23,45,23]
let sz25=szamok25.filter((num) => num > 4)
console.log(sz25);

//reduce() 

let szamok26=[90,5,23,45,12]
let eredmeny=szamok26.reduce(muvelet)

function muvelet(szam1,szam2){
    return szam1-szam2
    
}
console.log(eredmeny);

//reverse()
let megfordit =szamok25.reverse()
console.log(megfordit);

//values()
let varosok=["Szeged","Budapest", "Békéscsaba","Miskolc"]

let res4= varosok.values()

for (const value of res4){
    console.log(value);
    
}

