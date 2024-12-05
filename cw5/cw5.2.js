const obj={
    Nice: 942208 ,
    Dhabi: 1482816,
    Naples: 2186853,
    Vatican: 572}
    function sumcity(obj) {
     let value = Object.values(obj);
     return value.reduce((sum,item)=>sum+item,0 );
     
    }
    function avecity(obj) {
      let value = Object.values(obj);
      let length = value.length;
      return sumcity(obj)/length;
      
    }
