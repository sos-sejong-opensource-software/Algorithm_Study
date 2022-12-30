function solution(arr)
{
    var answer = [];
    /*
    for(var i=0; i<arr.length; i++){
        //첫번째 원소는 배열에 추가
        //두번째 원소부터는 answer배열의 마지막 요소와 비교해보고 결정
        if(i==0 || !(answer[answer.length-1]==arr[i])) answer.push(arr[i]);
    */
    arr.forEach((elem, index) => {
        if(index==0 || !(answer[answer.length-1]==elem)) answer.push(elem);
    });
        
    /* Great Code Example
    function solution(arr)
    {
        return arr.filter((val,index) => val != arr[index+1]);
    }
    */
    return answer;
}