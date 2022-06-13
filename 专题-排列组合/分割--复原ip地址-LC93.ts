
/**
 * @param {string} s
 * @return {string[]}
 */
 const restoreIpAddresses = function (s) {
    const len = s.length;
    const strArr=[...s];
    const partition=[];
    const result = [];

    backTracking(0,0);

    return result;

    function backTracking(start,part) {
        if(start==len){
            if(part==4) result.push(partition.join('.'));
            return;
        }
        if(start+(4-part)*3 <len)return;
        for(let i=start;i<start+3&&i<len;i++){
                if(!isValid(start,i+1)) continue;
                const substr=s.substring(start,i+1);
                partition.push(substr);
    
                backTracking(i+1,part+1);
    
                partition.pop();

           
        }

    }
    function isValid(L, R) {
            const len = R - L;
            if (len > 1 && strArr[L]==0) return false;
            const substr=s.substring(L,R);
            if( Number(substr)>255) return false;
            return true;
    }
};

console.log(restoreIpAddresses("25525511135"))