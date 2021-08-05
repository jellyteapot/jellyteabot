/* Get current hour.*/
let dateNow = new Date();
let hNow = dateNow.getHours();

/*Adjust background depending on time of day */
function newDay() {
    document.body.style.backgroundImage = 'linear-gradient(to top, #2b5876 0%, #4e4376 100%)';
}
function pinkMorning() {
    document.body.style.backgroundImage = 'linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)';
}
function sunrise() {
    document.body.style.backgroundImage = 'linear-gradient(to top, #fddb92, #d1fdff)';
}
function brightDay() {
    document.body.style.backgroundImage = 'linear-gradient(to top, #84fab0 0%, #8fd3f4 100%)';
}
function afternoonDelight() {
    document.body.style.backgroundImage = 'linear-gradient(to top, #37ecba 0%, #72afd3 100%)';
}
function goodbyeSun() {
    document.body.style.backgroundImage = 'linear-gradient(to top, #007adf 0%, #00ecbc 100%)';
}
function sunSetter() {
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)';
}
function dayOver() {
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #ed6ea0 0%, #ec8c69 100%)';
}
function eveningGlow() {
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)';
}
function pinkHorizon() {
    document.body.style.backgroundImage = 'linear-gradient(to top, #ec77ab 0%, #7873f5 100%)';
}
function bedTime() {
    document.body.style.backgroundImage = 'linear-gradient(to bottom, hsl(224.1, 70%, 60%) 0%, #884D80 100%)';
}
function countingSheep() {
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #070b34 0%, #855988 100%)';
}

if (hNow >= 0 && hNow <=2) {
    newDay();
} else if (hNow >= 3 && hNow <= 5) {
    pinkMorning();
} else if (hNow >=6 && hNow <=8) {
    sunrise();
} else if (hNow >=9 && hNow <=10) {
    brightDay();
} else if (hNow >=11 && hNow <=13) {
    afternoonDelight();
} else if (hNow == 14) {
    goodbyeSun();
} else if (hNow == 15) {
    sunSetter();
} else if (hNow == 16) {
    dayOver();
} else if (hNow == 17) {
    eveningGlow();
} else if (hNow == 18) {
    pinkHorizon();
} else if (hNow >= 19 && hNow <= 21) {
    bedTime();
} else if (hNow >=22 && hNow <24) {
    countingSheep();
};

const progressContainer = $(".progress-container");
const progressText = $("#progress-text");
progressTextArr = ['Scanning retinas...', 'Taking fingerprints...', 'Extracting blood sample...', 'Conducting mandatory DBS checks...']
//let progressTextIndex = 0;

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000));
}

async function runProgressUpdates() {

    for (let i=0; i < progressTextArr.length; i++) {
        let index= i;
        console.log(index);
        progressText.text(progressTextArr[index]);
        console.log(progressText.text());
        progressContainer.fadeIn(1750).delay(750).fadeOut(1750);
        await sleep(1.75+1.75+.75);
    };  
};

const famFriends = (alias, nicknames, day, month, year, relationship) => {
    return {
        alias,
        nicknames,
        day,
        month,
        year,
        relationship,
    }
}

const willJ = famFriends('Will', ['Bill', 'Bilbo', 'Bingo', 'Bing Bong', 'Smelly', 'Sweetie'], 9, 10, 1991, 'boyfriend');
const jac = famFriends('Jacquelin', ['Mother of Buns'], 23, 8, 1997, 'me');
const mum = famFriends('Mum', ['Tuti', 'Mummy', 'Oran gila'], 1, 9, 1962, 'parent');

//This is for main page.
const dobData = new URLSearchParams(window.location.search);

$(document).ready(function(){
    const userDay = dobData.get('birthdate');
    const userMonth = dobData.get('birthmonth');
    console.log(`User is born on ${userDay}/${userMonth}`);

    runProgressUpdates();
});