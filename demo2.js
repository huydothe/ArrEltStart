let lastIndexOf=(arr,elt,start=arr.length)=>{
    for(let i=start-1;i>=0;i--){
        if(arr[i]===elt){
            return i;
        }else {
            return -1
        }
    }
}
console.log(lastIndexOf([2,1,2,4,5,6,7],2))