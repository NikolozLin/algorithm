let a=123456
let b=7890
let r=a
while(r!=0){
    if(a<b) [a,b]=[b,a]
    r=a%b
    if(r!=0) {
        a=b;
        b=r
    }
}
console.log( a+'----'+b);