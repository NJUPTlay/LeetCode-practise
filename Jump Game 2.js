var jump=function(nums){
    let max=0;
    let steps=0;
    let end=0;
    for(let i=0;i<nums.length-1;i++){
        if(i==end){
            steps++;
            end=max;
        }
    }
    return steps
}