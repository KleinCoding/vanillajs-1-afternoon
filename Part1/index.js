

var tracker = [];
    
function play(clickedId){
var playerInput = document.getElementById("player").innerText;
var clickedElement = document.getElementById(clickedId)
// let clearObj = {
//     keyvalue: "pair1",
//     fullclear: function(){
//         let Top1 = "";
//         let Top2 = "";
//         let Top3 = "";
//         let Mid1 = "";
//         let Mid2 = "";
//         let Mid3 = "";
//         let Bot1 = "";
//         let Bot2 = "";
//         let Bot3 = "";
//         console.log("Clear Done");
//         console.log(Top1);
//         console.log(Mid1);
//         console.log(tracker[0])
//         tracker[0].innertext ="Y";
//         tracker[1].innertext ="1 ";
//         tracker[2].innertext =",1 ";
//         tracker[3].innertext =",1 ";
//         tracker[4].innertext ='" 1"';
//         tracker[5].innertext ='" 1";'
//         tracker[6].innertext ='1';
//         tracker[7].innertext ='1';
//         tracker[8].innertext ='1';
//         console.log(tracker[0]);
    // }
    // }

if(playerInput === 'X'){
     clickedElement.innerText = playerInput;
     tracker[clickedId] = 'X';
    playerInput = 'O';
   
}else if(playerInput === 'O'){
        clickedElement.innerText = playerInput;
        tracker[clickedId] = 'O'
    playerInput = 'X'}
       player.innerText = playerInput;
   
    console.log(tracker)

    var Top1 = tracker[0];
    var Top2 = tracker[1];
    var Top3 = tracker[2];
    var Mid1 = tracker[3];
    var Mid2 = tracker[4];
    var Mid3 = tracker[5];
    var Bot1 = tracker[6];
    var Bot2 = tracker[7];
    var Bot3 = tracker[8];


    if (Top1 !== undefined && Top1 === Top2 && Top1 === Top3){
        alert(Top1 +' WINS!!')
        return;
       }
    if (Top1 !== undefined && Top1 === Mid1 && Top1 === Bot1){
        alert(Top1 +' WINS!!')
        return;
       }
       if (Top1 !== undefined && Top1 === Mid2 && Top1 === Bot3){
        alert(Top1 +' WINS!!')
        return;
       }
       if (Mid1 !== undefined && Mid1 === Mid2 && Mid1 === Mid3){
        alert(Mid1 +' WINS!!')
        return;
       }
       if (Bot1 !== undefined && Bot1 === Bot2 && Bot1 === Bot3){
        alert(Bot1 +' WINS!!')
        return;
       }
       if (Bot1 !== undefined && Bot1 === Mid2 && Bot1 === Top3){
        alert(Bot1 +' WINS!!')
        return;
       }
       if (Top2 !== undefined && Top2 === Mid2 && Top2 === Bot2){
        alert(Top2 +' WINS!!')
        return;
       }
       if (Top3 !== undefined && Top3 === Mid3 && Top3 === Bot3){
        alert(Top3 +' WINS!!')
        clearObj.fullclear('')
        return;
       }

       let trackerFull = true;
       for (let i = 0; i <= 8; i++) {
           if (tracker[i] === undefined) {
               trackerFull = false;
           }
       }
       if (trackerFull === true) {
           alert("Kitty CAT got ya GAME! Try Again!")
       }
}

let clearObj = {
    keyvalue: "pair1",
    fullclear: function(){
        // let Top1 = "";
        // let Top2 = "";
        // let Top3 = "";
        // let Mid1 = "";
        // let Mid2 = "";
        // let Mid3 = "";
        // let Bot1 = "";
        // let Bot2 = "";
        // let Bot3 = "";
        console.log("Clear Done");
        console.log(Top1);
        console.log(Mid1);
        console.log(tracker[0])
        tracker[0].innertext ="Y";
        tracker[1].innertext ="1 ";
        tracker[2].innertext =",1 ";
        tracker[3].innertext =",1 ";
        tracker[4].innertext ='" 1"';
        tracker[5].innertext ='" 1";'
        tracker[6].innertext ='1';
        tracker[7].innertext ='1';
        tracker[8].innertext ='1';
        console.log(tracker[1]);
    }
    }



//Top1-Top2-Top3
//Top1-Mid1-Bot1
//Top1-Mid2-Bot3
//Mid1-Mid2-Mid3
//Bot1-Bot2-Bot3
//Bot1-Mid2-Top3
//Top2-Mid2-Bot2
//Top3-Mid3-Bot3

