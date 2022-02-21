function getSubsequence(str:string){
    processString(str,0,'')
}

function processString(str:string,i:number,pStr:string){
    if(i==str.length){
        console.log(pStr);
        return;
    }
    processString(str,i+1,pStr)
    processString(str,i+1,pStr+str[i])


}

getSubsequence('abc')