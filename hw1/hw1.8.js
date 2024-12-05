let num = prompt("enter a number")
let char = prompt("enter a character")

function name1(num,char){
    let output = ''
    for(i = 1; i <= num; i++){
        for(j = 1;j<= i;j++){
            output += char;
        }
        console.log(output);
        output = '';
        
    }

}
function name2(num , char) {
    let output = ''
    for(i = num; i>=1;i--){
        for(j = 1;j<=num;j++){
            if(j>=i){
                output += char;
            }
            else{
                output += "";
            }
        }
        console.log(output);
        output = '';
    }  
}
name1(num,char);
console.log("------");
name2(num,char);
