/* using array literal
 let fruits=["apple","banana","mango"];

 using Array constructor

 let fruits= new Array("apple","banana","mango");
 */

 let fruits=["apple","banana","mango"];
//length
console.log(fruits.length());

//push
fruits.push("ashi");
console.log(fruits);

//pop
fruits.pop();
console.log(fruits);

//unshift
fruits.unshift("ashi")
console.log(fruits);
//shift

fruits.shift();
console.log(fruits);

//includes

console.log(fruits.includes("mango"));

//indexof
//uss element ka index return kar dega

console.log(fruits.indexOf("mango"));

//join
//saare element join kar degi jisse bhi join karna hai
console.log(fruits.join("-"));

//slice
//element batayga uss range ke right bound se phale

console.log(fruits.slice(1,3));

//splice
//elements delete kar ta hai uss range tak right bound ko include kar ke
console.log(fruits.splice(1,4));


let fruits=["apple","banana","mango"];

//for loop

for(var i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

//for of loop

for(let i of fruits)
{
    console.log(i);
}

//for each loop
fruits.forEach(function(i)
{
    console.log(i);
})