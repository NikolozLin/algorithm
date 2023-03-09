/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    if (t.length > s.length) return '';
    const cnt = new Map();
    ([...t]).forEach(element => {
        if (cnt.has(element)) {

            cnt.set(element, cnt.get(element) + 1);
        } else {
            cnt.set(element, 1)
        }
    });

    let need =t.length;

    let n=s.length
    // 目标子串的【 start， end】
    let start =0; 
    let end =-1;
    let minLen=n+1; //窗口最小 初始化一个不可能的大值。

    //滑动窗口 左右闭合区间
    let left=0;
    let right=-1;

    while(++right<s.length){
        let newCh=s.charAt(right);

        if(cnt.has(newCh)){
            if(cnt.get(newCh)>0){
                need--
            }
            cnt.set(newCh,cnt.get(newCh)-1)
        }

        while(need==0){
            //记录当前窗口
            if(right-left+1<minLen){
                minLen=right-left+1;
                [start,end]=[left,right]
            }

            let ch= s.charAt(left);
            if(cnt.has(ch)){
                if(cnt.get(ch)>=0){ //判断需要的字符数量 ，如果刚好满足 或者需要 则需要修改 需要的字符长度need 
                    need++;
                }
                cnt.set(ch,cnt.get(ch)+1)
            }
            left++;//窗口缩小
        }
    }
return s.slice(start,end+1)

};
// =================================== 历史 初次ac 性能不足

//  var minWindow2222 = function(s, t) {
//     if (s.length < t.length) return '';

//     // const hashMap = new Map();// 记录出现位置
//     const numMap = {};// 记录出现个数

//     for (let i = 0; i < t.length; i++) {
//         if (!numMap[t.charAt(i)]) {
//             numMap[t.charAt(i)] = 1;
//         } else {
//             numMap[t.charAt(i)] += 1;
//         }
//     }


//     function checkOK() {
//         return Object.values(numMap).every((item) => item<=0);
//     }

//     const windowNum =[0,-1];
//     let l = 0;
//     let r = -1;
//     while(r<s.length){
//         // r右移动
//         while(!checkOK() ){
//             r++;
//             numMap[s.charAt[r]]&&numMap[s.charAt[r]]--;
//         }
//         // l左移
//         while(checkOK()&&l<r){
//             numMap[s.charAt[l]]&&numMap[s.charAt[l]]++;
//             l++;
//         }

//         if(&& r-l+1<windowNum[1]-windowNum[0]){
//             windowNum[0]=l+1;
//             windowNum[0]=r;
//         }

//     }

//     return s.slice(windowNum[0], windowNum[1] + 1);
// };
// @lc code=end
