count=0

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
var levelValue;
var timeplayVarlue;
var nameFromDjango;

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
displayName()
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
                        levelValue = 'easy'
                        if(playTime < 60)
                            playTime = 60
                        savePlayerData()
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
                        levelValue = 'medium'
                        if(playTime < 60)
                            playTime = 60
                        savePlayerData()
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
                        levelValue = 'hard'
                        if(playTime < 60)
                            playTime = 60
                        savePlayerData()
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
            playTime = 0
            savePlayerData()
            clearInterval(inId1);
            alert("you lost !!");
            window.location.reload();
        }
    }, 1000);

}
function updateDateTime() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();

    
    document.getElementById("time_hour").innerHTML = (currentHour < 10 ? '0' : '') + currentHour.toString();
    document.getElementById("time_minute").innerHTML = (currentMinute < 10 ? '0' : '') + currentMinute.toString();

}
function savePlayerData() {
    var currentDate = new Date();
    var hours = currentDate.getHours();

    var playerData = {
        'time_play': playTime/60,
        'time_now': hours,
        'level': levelValue,
    };
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/home/save_player',  // Đặt URL của endpoint Django views ở đây
        contentType: 'application/json',
        data: JSON.stringify(playerData),
        
        success: function (response) {
            console.log(response);
            // Xử lý phản hồi từ server (nếu cần)
        },
        error: function (error) {
            console.error(error);
            // Xử lý lỗi (nếu cần)
        }
    });
}

function displayName(){
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/home/send_data_to_script',  // Đặt URL của endpoint Django views ở đây
        success: function(response) {
            console.log(response);

            // Lưu dữ liệu nhận được vào biến
            nameFromDjango = response.value;
            // Xử lý dữ liệu trong trình duyệt (nếu cần)
            // ...
            
            document.getElementById("player_name").innerHTML = 'Hello '+ nameFromDjango;
        },
        error: function(error) {
            console.error(error);
            // Xử lý lỗi (nếu cần)
        }
    });
}