$(document).ready(function(){
    $("#dialog-two-dt").hide();
    $("#dialog-two-tb").hide();

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
            }
        }
    })
  });