let adad1 = prompt("enter number")
let adad2 = prompt("enter second number")

function gcd(adad1,adad2){
let adadkoochak;
let adadbozorg;

if(adad1 > adad2){
    adadbozorg = adad1;
    adadkoochak = adad2;
}
else if(adad1<adad2){
    adadbozorg = adad2;
    adadkoochak = adad1;
}
else{
    adad1 = adad2 && (gcd = adad1 ||adad2)
    return adad1;
}

for (i = adadkoochak; i>=1; i--){
    if(adadkoochak % i == 0 && adadbozorg % i == 0){
        return i;
    }
  }
}
 function lcm(adad1,adad2){
    let adadkoochak;
    let adadbozorg;
    if(adad1 > adad2){
        adadbozorg = adad1;
        adadkoochak = adad2;
    }
    else if(adad1 < adad2){
        adadbozorg = adad2;
        adadkoochak = adad1;
    }
    else{
        adad1 = adad2 && (lcm = adad1 || adad2)
        return adad1
    }
    for(i= adadbozorg; i<= adadbozorg * adadkoochak; i++){
        if(i % adadkoochak == 0 && i&adadbozorg == 0){
            return i;
        }
    }
 }
 alert("gcd :" + gcd(adad1,adad2));
 alert("lcm :")+ lcm(adad1,adad2);
