const text = "Hello World";
const wordCount = {};

text.split("").forEach(word => {
  wordCount[word] = (wordCount[word] || 0) + 1;
  
});
wordCount.sort((a,b)=>{
  a+b
})

console.log(wordCount); 