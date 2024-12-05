const obj={
    Nice: 942208 ,
    Dhabi: 1482816,
    Naples: 2186853,
    Vatican: 572}
    
    function values(obj){
    return Object.values(obj);
    }
    
    function sumcity(obj) {
    let value = Object.values(obj);
    return value.reduce((sum,item)=>sum+item,0 );
    
    }
    
    function avecity(obj) {
    let value = Object.values(obj);
    let length = value.length;
    return sumcity(obj)/length;
    
    }
    
    function maxpopulation(obj){
    let arrobj = Object.entries(obj);
    let sortedArray = arrobj.sort((a,b)=> a[1] - b[1]);
    let min = sortedArray[0][0];
    let max = sortedArray[sortedArray.length-1][0];
    return [max,min] ;
    }








    

    const array = [
        { name: "banana", count: 2, pricePerOne: 45000 , discount:5},
        { name: "potato", count: 8, pricePerOne: 23000, discount:15},
        { name: "onion", count: 12, pricePerOne: 12000 , discount:10}
        ]
        
        function payment(arr){
        let totalPay = arr.reduce((sum,item) => {
        return (item.count * item.pricePerOne) - (item.count * item.pricePerOne * item.discount/100);
        },0)
        return totalPay ;
        }