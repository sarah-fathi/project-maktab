let userScore = 0;
let computerScore = 0;
function playGame() {
    let options = ["قیچی" , "کاغذ" , "سنگ"];

    let userChoice = prompt("(سنگ , کاغذ ,قیچی)چه چیزی را انتخاب میکنید؟");
    let computerChoice = options[Math.floor(Math.random())* options.length];

    console.log(`شما: ${userChoice} ,کامپیوتر: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("برنده : مساوی");
    } else if (
    ( userChoice === "سنگ" && computerChoice === "قیچی") ||
    ( userChoice === "کاغذ" && computerChoice === "سنگ" ) ||
    ( userChoice === "قیچی" && computerChoice === "کاغذ")
    ) {
        console.log("برنده : شما");
        userScore++;  
    } else {
        console.log("برنده : کامپیوتر");
        computerScore++
    }
    console.log(` امتیازها:  شما${userScore} -  کامپیوتر${computerScore} `);
    let askquestion = prompt(" آیا میخواهید دوباره بازی کنید؟(بله/خیر) ");
    if (askquestion.toLowerCase() === "بله") {
        playGame();
    } else {
        console.log(" بازی تمام شد ");   
    }   
}
playGame()