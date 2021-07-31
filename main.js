/* Get current hour.*/
let dateNow = new Date();
let hNow = dateNow.getHours();

function nightTime() {
    document.body.style.backgroundImage = 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)';
}
function newDay() {
    document.body.style.backgroundImage = 'linear-gradient(-20deg, #4a4969 0%, #7072ab 50%,#cd82a0 100%)';
}
function pinkMorning() {
    document.body.style.backgroundImage = 'linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)';
}
function earlyMorning() {
    document.body.style.backgroundImage = 'linear-gradient(to top, #fddb92, #d1fdff)';
}

/*Time testing: */
earlyMorning();
/*

if (hNow >= 0 && hNow <=2) {
    nightTime();
} else if (hNow >= 3 && hNow <= 4) {
    newDay();
} else if (hNow == 5) {
    pinkMorning();
} else if (hNow >=6 && hNow <=8)
if (hNow >= 8 && hNow <= 12) {
    earlyMorning();
} else if 