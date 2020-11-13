const robot = require("robotjs");

// function showMouseLocation() {
// var mouse = robot.getMousePos();
// console.log(mouse);
// }
// setInterval(showMouseLocation , 1000)  //it will call teh functioin in the givne timen passed in 2nd parameter . (iskka matlab setMouseLOCTION FUNCTION KO CALL KRo 1 - 1 sec. me)
// instead of writing all these lines we can also do it like this;
setInterval(() => console.log(robot.getMousePos()) , 2000);
 

// robot.setMouseDelay(40);

setTimeout(openChrome , 1000);
function openChrome() {
    robot.moveMouseSmooth(241 , 752);
    robot.mouseClick();
    robot.typeString(" google chrome");
    robot.keyTap("enter");

    // var win = document.defaultView;
    // setTimeout(() => {
            // window.resizeTo(250, 250);
            // window.focus();
    // } , 1000);
    // robot.moveMouseSmooth(935 , 53);
    // robot.mouseClick();

    robot.moveMouseSmooth(588 , 54);
    robot.mouseClick();
    robot.typeString("hackerrank.com/dashboard");
    robot.keyTap("enter");
    robot.moveMouseSmooth(272 , 17);
    robot.mouseClick();
    robot.moveMouseSmooth(588 , 54);
    robot.mouseClick();
    robot.typeString("leetcode");
    robot.keyTap("enter");
    // robot.typeString(" hackerrank.com");
    // robot.keyTap("enter");
    
   // 
}
setTimeout(openTeams , 1000);
function openTeams() {
    robot.moveMouseSmooth(241 , 752);
    robot.mouseClick();
    robot.typeString(" teams");
    robot.keyTap("enter");

    robot.moveMouseSmooth(33 , 295);
    robot.mouseClick();
    setTimeout(() => {
        robot.moveMouseSmooth(37 , 228);
        robot.mouseClick();
    } , 3000)

    setTimeout(openEclipse , 4000);

}


function openEclipse() {
    robot.moveMouseSmooth(241 , 752);
    robot.mouseClick();
    robot.typeString(" eclipse");
    robot.keyTap("enter");
    setTimeout(() => {
        robot.moveMouseSmooth(845 , 425);
        robot.mouseClick();
    } , 5000);

    setTimeout(() => {
        robot.moveMouseSmooth(1252 , 1);
        robot.mouseClick();
    } , 8800);

    setTimeout(openVsCode , 18000);
}


function openVsCode() {
    robot.moveMouseSmooth(241 , 752);
    robot.mouseClick();
    robot.typeString(" vs");
    robot.moveMouseSmooth(586 , 496);
    robot.keyTap("enter");
    setTimeout(() => {
        robot.moveMouseSmooth(1128 , 14);
        robot.mouseClick();
    } , 2000);

    setTimeout(() => {
        robot.moveMouseSmooth(1252 , 1);
        robot.mouseClick();
    } , 4200);

    setTimeout(openNotepadd ,6400)
}
function openNotepadd(){
    robot.moveMouseSmooth(241 , 752);
    robot.mouseClick();
    robot.typeString(" note");
    robot.moveMouseSmooth(555 , 364);
    robot.mouseClick();
    robot.moveMouseSmooth(551 , 358);
    robot.keyTap("enter");
    robot.mouseClick();
    robot.typeString("all set mohit sir , happy coding!!")
}