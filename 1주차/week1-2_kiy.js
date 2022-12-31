function solution(s) {
    let arr = s.split(" ");
    const newArr = [];

    for(let i=0; i<arr.length; i++){
        let word = arr[i];
        let newWord = '';
        console.log(word);
        for(let j=0; j<word.length; j++){
            if(j%2==0) newWord += word[j].toUpperCase();
            else newWord += word[j].toLowerCase();   
        }
        newArr.push(newWord);
    }
   // console.log(arr);
    console.log(newArr);   
    return newArr.join(" ");
    
    //return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();}) 
    //return s.toLowerCase().split(' ').map(i => i.split('').map((j, idx) => idx % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}
