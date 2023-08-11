const {readFile, writeFile}=require('fs');
console.log("start");
readFile('./content/sub_content/first.txt', 'utf-8',(err,result)=>{
 if(err){
    console.log(err);
    return ;
 }
 else{
    const first=result;
    readFile('./content/sub_content/second.txt','utf-8',(err,result)=>
    {
        if(err){
            console.log(err);
            return;
        }
        else{
            const second=result;
            console.log("started with the task");
            writeFile('./content/result-async.txt',`here is the result: ${first},${second}`,{flag:'a'},(err,result)=>{
                if(err){
                    console.log(err);
                    return ;
                }
                else {
                    console.log(result);
                }
            });
        }
    });
 }
});
console.log("done with the task");