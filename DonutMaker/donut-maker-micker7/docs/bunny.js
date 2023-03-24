
let bunnyCount = 0;
let autoClickerPrice = 10;
let autoClicker = 0;
let bunnyChange;
let bunnyMultiplier = 1;
let multiplierCost = 10;

//----------------------------------------------------------------------------------------------------------FIRE AUDIO
const audio = new Audio(src="/donut-maker-micker7/docs/Cooking a Bun.mp3");


//-----------------------------------------------------------------------------------------------------------PRICE DISPLAY

document.getElementById('multiplierPrice').innerHTML = 'Price: ' + multiplierCost.toPrecision(2) + ' Bunnies';
document.getElementById('autoPrice').innerHTML = 'Price: ' + autoClickerPrice.toPrecision(2) + ' Bunnies';


//-----------------------------------------------------------------------------------------------------------MULTIPLIER PER CLICK

function calculateBunnyMultiplier(){
    if(bunnyCount >= multiplierCost){
       bunnyCount = bunnyCount - multiplierCost;
       bunnyMultiplier = bunnyMultiplier * 1.1;
       document.getElementById("cute").src="/donut-maker-micker7/docs/man overun by bunnies.png";
       bunnyChange = setInterval(function () { changeBunnyPic() }, 5000);  
       multiplierCost++;
       document.getElementById('multiplierPrice').innerHTML = 'Price: ' + multiplierCost.toPrecision(2) + ' Bunnies';
       document.getElementById('addMultiply').innerHTML = "Bunny Multiplier Per Click Count: " + bunnyMultiplier.toPrecision(2);
       document.getElementById('addBunny').innerHTML = 'Bunny Count: ' + bunnyCount.toPrecision(2);
    }
    else{
        alert("Not Enough Bunnies to Purchase This!")
    }    
}

//----------------------------------------------------------------------------------------------------------FIRST AUTO MAKER

function autoBunnyMaker() {
    if(autoClicker > 2){
        alert("Only 3 Auto Bunny Makers Allowed.")
    }
    else if (bunnyCount >= autoClickerPrice) {
        bunnyCount = bunnyCount - autoClickerPrice;
        document.getElementById("cute").src="/donut-maker-micker7/docs/rabbit on spit.jpg";
        bunnyChange = setInterval(function () { changeBunnyPic() }, 5000);
        audio.play();
        autoClicker++;
        autoClickerPrice = autoClickerPrice * 1.1;
        setInterval(function () { incrementBunny() }, 1000);
        document.getElementById('autoPrice').innerHTML = 'Price: ' + autoClickerPrice.toPrecision(2) + ' Bunnies';
        document.getElementById('addBunny').innerHTML = 'Bunny Count: ' + bunnyCount.toPrecision(2);
        document.getElementById('addClicker').innerHTML = 'Auto Clicker Count: ' + autoClicker;
    }
    else{
        alert("You Do Not Have Enough Bunnies!")
    }
   
}

//---------------------------------------------------------------------------------------------------------ADD TO BUNNY COUNT
function incrementBunny() {
    bunnyCount = bunnyCount + bunnyMultiplier;
    document.getElementById('addBunny').innerHTML = 'Bunny Count: ' + bunnyCount.toPrecision(4);
}

//---------------------------------------------------------------------------------------------------------CHANGE BUNNY PICS
function changeBunnyPic(){
    document.getElementById("cute").src="/donut-maker-micker7/docs/bunny.png";
    clearTimeout(bunnyChange);
}

//----------------------------------------------------------------------------------------------------------RELOAD GAME
async function resetData() {
    
    document.getElementById("cute").src="/donut-maker-micker7/docs/solo bunny.jpg";
    await sleep(3000);
    window.location.reload();  
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

