//map
//saare elements par condition apply kar dega
array=[1,2,3,4,5,6,7,8,9]
const double=array.map(function(x){
    return x*2;
});


const doubledemo=array.map(x=>x*2);

console.log(double);
console.log(doubledemo);

//filtar
//tumhari condition dekhega 
//jo bhi element 
const even=array.filtar(function(x){
    return x%2==0;
});


const evendemo=array.filtar(x=>x%2==0);
console.log(even);
console.log(evendemo);

//reduce
//sare element ko ek variable me convert kar ta hai

const sum=array.reduce(function(sum,x)
{
    return sum+x;
},0);

const sum1=array.reduce(function(sum,x)
{
    return sum+x;
});

const sum2=array.reduce((sum,x)=>sum+x,0);

console.log(sum);
console.log(sum1);
console.log(sum2);

//find
//jaise hi condition satisfy hui vese he return kar diya



//some
//bata ta hai ki condition elements satisfy kar rha hai ki nhi 

//every
//bata ta hai ki saare elements satisfy condition kar rahe hai ya nahi