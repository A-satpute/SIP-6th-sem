const text = "The fox is quick. The fox is smart.";

// Convert to lowercase and split into words
const words = text.toLowerCase().split(/\W+/);

// Count occurrences of "fox"
const countFox = words.filter(word => word === "fox").length;

console.log("Words:", words);
console.log("Count of 'fox':", countFox);
