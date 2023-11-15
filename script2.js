count=0
// for (var i=0;i<9;i++){
//     count=9*i;
//     document.getElementsByClassName("box")[i].innerHTML="<div class='cell'><input type='text' id='"+(count+1)+"' class='input'></div><div class='cell'><input type='text' id='"+(count+2)+"' class='input'></div><div class='cell'><input type='text' id='"+(count+3)+"' class='input'></div><div class='cell'><input type='text' id='"+(count+4)+"' class='input'></div><div class='cell'><input type='text' id='"+(count+5)+"' class='input'></div><div class='cell'><input type='text' id='"+(count+6)+"' class='input'></div><div class='cell'><input type='text' id='"+(count+7)+"' class='input'></div><div class='cell'><input type='text' id='"+(count+8)+"' class='input'></div><div class='cell'><input type='text' id='"+(count+9)+"' class='input'></div>"
// }
for (var i = 0; i < 4; i++) {
    count = 4 * i;
    document.getElementsByClassName("box")[i].innerHTML =
        "<div class='cell'><input type='text' id='" + (count + 1) + "' class='input'></div>" +
        "<div class='cell'><input type='text' id='" + (count + 2) + "' class='input'></div>" +
        "<div class='cell'><input type='text' id='" + (count + 3) + "' class='input'></div>" +
        "<div class='cell'><input type='text' id='" + (count + 4) + "' class='input'></div>" ;
}


//how to play game instruction

function help(){
    window.open(
        "https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/", "_blank");
}
var level;
var choosen;
var inId1, inId2;
var gamePaused = false;
var gameWithHelp = false;
var whereGamePaused = 0;
var playTime = 0;


// easy_level board create

easy_board=['213-1-433-21-312', '13423-244-3-2-13', '42-331-413-22-31', '12-4-3-13-211243','34-1431-21-31-34', '24-113-21-42-431', '13423-2-241-4-31', '312-421-24-11-4'];

easy=['2134124334214312', '1342312442312413', '4213312413422431', '1234432134211243','3421431221431234', '2431134213422431', '1342312424134231', '312442132431134'];

//medium level board create

medium_board=['43-22-31-2-4-124','34-221-3-23-43-1','2-31-21-1-42-124','214-12-43-21-3-2', '1-24-13-4-313-21','42-124-33-42-3-4'];

medium=['4312243112343124','3412214312344321','2431421313423124','2144123434214312', '1324213442313421','4231241331421324'];


//hard level board create

hard_board=['24-14-1-3-24-3--','-23-21-3-4-1--12','2-3-4-1-3-2-1-43', '1--23--4---12413','43--34--21--12-4'];

hard=['2431421331241342','1234214334214312','2134431234211243', '1342312442312413','4312342121431234'];


// Gọi hàm updateDateTime để cập nhật ban đầu
updateDateTime();

// Cập nhật ngày và giờ mỗi giây
setInterval(updateDateTime, 1000);

function start(){
    for(var i=0;i<3;i++){
        document.getElementsByClassName("label")[i].setAttribute("onclick","return false;");
    }
    whereGamePaused = 1;
    playTime = 0;
    timer();
    //easy game
    if(document.getElementById("easy").checked){
        level='easy';
        var easy_random=Math.floor(Math.random()*5);
        choosen=easy_random;
        for(var i=0;i<16;i++){
            if(easy_board[easy_random][i]!='-'){
                document.getElementById((i+1).toString()).value=easy_board[easy_random][i];
                document.getElementById((i+1).toString()).readOnly=true;
            }
        }
    }

    //medium game

    else if(document.getElementById("medium").checked){
        level='medium';
        var medium_random=Math.floor(Math.random()*5);
        choosen=medium_random;
        for(var i=0;i<16;i++){
            if(medium_board[medium_random][i]!='-'){
                document.getElementById((i+1).toString()).value=medium_board[medium_random][i];
                document.getElementById((i+1).toString()).readOnly=true;
            }
        }
    }


    //hard game

    else{
        level='hard';
            var hard_random=Math.floor(Math.random()*5);
            choosen=hard_random;
            for(var i   =0;i<16;i++){
                if(hard_board[hard_random][i]!='-'){
                    document.getElementById((i+1).toString()).value=hard_board[hard_random][i];
                    document.getElementById((i+1).toString()).readOnly=true;
                }
            }
    }


        document.getElementById("start").removeAttribute("onclick");
   
}


//check answer
var id=setInterval(() => {
    if (level=="easy"){
        if(document.activeElement.className=="input"){
            if((document.getElementById(document.activeElement.id).value==easy[choosen][document.activeElement.id-1])||(document.getElementById(document.activeElement.id).value=='')){
                for(var i=0;i<16;i++){
                    if(i==15 && document.getElementById((16).toString()).value!='' ){
                            alert("you win !! congratulation.....");
                            clearInterval(id);
                            window.location.reload();
                    }
                    else if(document.getElementById((i+1).toString()).value==''){
                        break;
                    }
                }
            }
            else{
                // if(document.getElementById("rem_live").innerHTML==1){
                //     document.getElementById("rem_live").innerHTML==0;
                //     alert("you lost !!");
                //     document.activeElement.value='';
                //     window.location.reload();
                // }
                if(!gameWithHelp){
                    alert("you choose wrong number");
                    //document.getElementById("rem_live").innerHTML=document.getElementById("rem_live").innerHTML-1;
                    document.activeElement.value='';
                }
            }   

        }
    }

    else if(level=="medium"){

        if(document.activeElement.className=="input"){
            if((document.getElementById(document.activeElement.id).value==medium[choosen][document.activeElement.id-1])||(document.getElementById(document.activeElement.id).value=='')){
                for(var i=0;i<16;i++){
                    if(i==15 && document.getElementById((16).toString()).value!='' ){
                            alert("you win !! congratulation.....");
                            clearInterval(id);
                            window.location.reload();
                    }
                    else if(document.getElementById((i+1).toString()).value==''){
                        break;
                    }
                }
            }
            else{
                // if(document.getElementById("rem_live").innerHTML==1){
                //     document.getElementById("rem_live").innerHTML==0;
                //     alert("you lost !!");
                //     document.activeElement.value='';
                //     window.location.reload();

                // }
                // else{
                //     alert("you choose wrong number, you loose your one life !!");
                //     document.getElementById("rem_live").innerHTML=document.getElementById("rem_live").innerHTML-1;
                //     document.activeElement.value='';
                // }
                if(!gameWithHelp){
                    alert("you choose wrong number");
                    //document.getElementById("rem_live").innerHTML=document.getElementById("rem_live").innerHTML-1;
                    document.activeElement.value='';
                }
            }

        }
    }

    else{

        if(document.activeElement.className=="input"){
            if((document.getElementById(document.activeElement.id).value==hard[choosen][document.activeElement.id-1])||(document.getElementById(document.activeElement.id).value=='')){
                for(var i=0;i<16;i++){
                    if(i==15 && document.getElementById((16).toString()).value!='' ){
                            alert("you win !! congratulation.....");
                            clearInterval(id);
                            window.location.reload();
                    }
                    else if(document.getElementById((i+1).toString()).value==''){
                        break;
                    }
                }
            }
            else{
                // if(document.getElementById("rem_live").innerHTML==1){
                //     document.getElementById("rem_live").innerHTML==0;
                //     alert("you lost !!");
                //     document.activeElement.value='';
                //     window.location.reload();

                // }
                // else{
                //     alert("you choose wrong number, you loose your one life !!");
                //     document.getElementById("rem_live").innerHTML=document.getElementById("rem_live").innerHTML-1;
                //     document.activeElement.value='';
                // }
                if(!gameWithHelp){
                    alert("you choose wrong number");
                    //document.getElementById("rem_live").innerHTML=document.getElementById("rem_live").innerHTML-1;
                    document.activeElement.value='';
                }
            }

        }
    }
}, 500);



//answer
function answer(){
    whereGamePaused = 0;
    if(level=="easy"){
        for(var i=0;i<16;i++){
            document.getElementById((i+1).toString()).value=easy[choosen][i];
        }
    }
    else if(level=="medium"){
        for(var i=0;i<16;i++){
            document.getElementById((i+1).toString()).value=medium[choosen][i];
        }
    }
    else if(level=="hard"){
        for(var i=0;i<16;i++){
            document.getElementById((i+1).toString()).value=hard[choosen][i];
        }
    }
    else{
        alert("first choose the game and start it !!");
    }
}
//new game
function replay(){
    whereGamePaused = 0;
    // for(var i=0;i<81;i++){
    //     document.getElementById((i+1).toString()).value='';
    // }
    gamePaused = false;
    document.getElementById("stop").innerText = "STOP";
    window.location.reload();
}

function stop() {
    gamePaused = !gamePaused;
    if (gamePaused && whereGamePaused == 1) {
        document.getElementById("stop").innerText = "RESUME";
        clearInterval(inId1);
        clearInterval(inId2);
    } else if(whereGamePaused == 1) {
        document.getElementById("stop").innerText = "STOP";
        timer();
    }
}

function support() {
    gameWithHelp = !gameWithHelp;
    if (gameWithHelp) {
        document.getElementById("support").innerText = "WITHOUT HELP";
    } else {
        document.getElementById("support").innerText = "WITH HELP";
    }
}

//timer
function timer(){
    inId1 = setInterval(() => {
        if (playTime <= 120) {
            var minutes = Math.floor(playTime / 60);
            var seconds = playTime % 60;

            document.getElementById("time_min").innerHTML = (minutes < 10 ? '0' : '') + minutes.toString();
            document.getElementById("time_sec").innerHTML = (seconds < 10 ? '0' : '') + seconds.toString();

            playTime++;
        } else {
            clearInterval(inId1);
            alert("you lost !!");
            window.location.reload();
        }
    }, 1000);
    
    // if(document.getElementById("time1").checked==true){
    //     document.getElementById("time_min").innerHTML="0"+(document.getElementById("time1_min").innerHTML-1).toString();
    //     document.getElementById("time_sec").innerHTML='59';
    // }

    // else if(document.getElementById("time2").checked==true){
    //     document.getElementById("time_min").innerHTML="0"+(document.getElementById("time2_min").innerHTML-1).toString();
    //     document.getElementById("time_sec").innerHTML='59';
    // }
    // else{
    //     document.getElementById("time_min").innerHTML="0"+(document.getElementById("time3_min").innerHTML-1).toString();
    //     document.getElementById("time_sec").innerHTML='59';
    // }

    // inId1 = setInterval(() => {
    //     if(document.getElementById("time_sec").innerHTML=='00'){
    //         document.getElementById("time_sec").innerHTML="59";
    //     }
    //     else{
    //         if(parseInt(document.getElementById("time_sec").innerHTML)<=10){
    //         document.getElementById("time_sec").innerHTML="0"+(document.getElementById("time_sec").innerHTML-1).toString();
    //         }
    //         else{
    //             document.getElementById("time_sec").innerHTML=document.getElementById("time_sec").innerHTML-1;
    //         }
    //     }
    // }, 1000);


    // inId2 = setInterval(() => {
    //     if(document.getElementById("time_min").innerHTML=='00'){
    //         document.getElementById("time_sec").innerHTML='00';
    //         setTimeout(() => {
    //             alert("you lost !!");
    //         }, 50);
    //         window.location.reload();
    //     }
    //     else{
    //         if(parseInt(document.getElementById("time_min").innerHTML)<=10){
    //         document.getElementById("time_min").innerHTML="0"+(document.getElementById("time_min").innerHTML-1).toString();
    //         }
    //         else{
    //             document.getElementById("time_min").innerHTML=document.getElementById("time_min").innerHTML-1;
    //         }
    //     }
    // }, 60*1000);

}
function updateDateTime() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();

    
    document.getElementById("time_hour").innerHTML = (currentHour < 10 ? '0' : '') + currentHour.toString();
    document.getElementById("time_minute").innerHTML = (currentMinute < 10 ? '0' : '') + currentMinute.toString();

}