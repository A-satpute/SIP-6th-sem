const words= ["hello","word","javascript"];
const count=words.reduce(function(total,word)
{
    return total+=word.length;
},0);
    
const wordsarr=words.reduce((total,word)=>total+=word.length,0);
console.log(count);
console.log(wordsarr);