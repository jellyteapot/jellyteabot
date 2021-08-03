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
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)';
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

//This is for main page.
$(document).ready(function(){
    $("#dialog-two-dt").hide();
    $("#dialog-three-dt").hide();

    $("#dialog-one-dt").click(function() {
        $(this).hide();
        $("#dialog-two-dt").show();
    });
    $("#dialog-one-tb").click(function() {
        $(this).hide();
        $("#dialog-two-dt").show();
    })
    let keyCount = 0;
    $("#type1-input").keypress(function(e) {
        if(e.which >= 97 && e.which <= 122) {
            keyCount ++;
            if (keyCount >= 3) {
                $("#dialog-two-dt").hide();
                $("#dialog-three-dt").show();
            }
        }
    })

    if(window.location.href == 'phase-two.html') {
        const formDob = $("#dob-please");
        const dobDay = formDob.elements['#birthdate'];
        const dobMonth = formDob.elements['#birthmonth'];
        let dobDayVal = dobDay.value;
        let dobMonthVal = dobMonth.value;
    }
  });


const famFriends = (alias, nicknames, day, month, year) => {
    return {
        alias: alias,
        nicknames: nicknames,
        day: day,
        month: month,
        year: year,
    }
}

const willJ = famFriends('Will', ['Bill', 'Bilbo', 'Bingo', 'Bing Bong', 'Smelly', 'Sweetie'], 9, 10, 1991);
const jac = famFriends('Jacquelin', ['Mother of Buns'], 23, 8, 1997);
const mum = famFriends('Mum', ['Tuti', 'Mummy', 'Oran gila'], 1, 9, 1962);