const {readFileSync, writeFileSync}=require('fs');
const fs=require('fs');
console.log('start')
// console.log(fs.readFileSync('./content/sub_content/second.txt','utf-8'));
const first=readFileSync('./content/sub_content/first.txt', 'utf-8');
const second=readFileSync('./content/sub_content/second.txt', 'utf-8');
console.log('started with the task');
// console.log(first);
// fs.writeFileSync('./content/sub_content/second.txt', "hello Sushil , wrote smthng in second file");
// fs.appendFileSync('./content/sub_content/second.txt',"appending this text");
// writeFileSync('./content/result.txt',  `Here is the result : ${first}, ${second}`);
writeFileSync('./content/sub_content/first.txt',"hello there how are you doning", {flag:'a'});//flag:'a' directs to append this text to the file.
console.log("done with the task");