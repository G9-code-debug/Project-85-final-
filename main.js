canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car2_width = 120;
car2_height = 70;
car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 100;
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car2_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
background_Image = "https://images.unsplash.com/photo-1555532686-d0fccaccadcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";
function add() {
    background_Img_tag = new Image();
    background_Img_tag.onload = uploadBackground;
    background_Img_tag.src = background_Image;

    car1_Imgtag = new Image();
    car1_Imgtag.onload = uploadcar1;
    car1_Imgtag.src = car1_image;

    car2_Img_tag = new Image();
    car2_Img_tag.onload = uploadcar2;
    car2_Img_tag.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_Img_tag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_Imgtag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_Img_tag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38"){
        car1_up();
        console.log(" up arrow key ");
    }
    if(keyPressed == "40"){
        car1_down();
        console.log(" down arrow key ");
    }
    if(keyPressed == "37"){
        car1_left();
        console.log(" left arrow key ");
    }
    if(keyPressed == "39"){
        car1_right();
        console.log(" right arrow key ");
    }
    if(keyPressed == "87"){
        car2_up();
        console.log(" w key ");
    }
    if(keyPressed == "83"){
        car2_down();
        console.log(" s key ");
    }
    if(keyPressed == "65"){
        car2_left();
        console.log("a key");
    }
    if(keyPressed == "68"){
        car2_right();
        console.log("d key");
    }
    else{
        console.log(" no functions are assigned to this key ");
    }
}
function car1_up(){
  car1_y = car1_y - 10;
    console.log("when key pressed|" + "ycoordinates = " + car1_y + "x coordinates = " + car1_x);
    uploadBackground();
    uploadcar1();
    uploadcar2();
}
function car1_down(){
  car1_y = car1_y + 10;
    console.log("when key pressed|" + "ycoordinates = " + car1_y + "x coordinates = " + car1_x);
    uploadBackground();
    uploadcar1();
    uploadcar2();
}
function car1_left(){
    if(car1_x < 700) {
    car1_x = car1_x - 10;
    console.log("when key pressed|" + "ycoordinates = " + car1_y + "x coordinates = " + car1_x);
    uploadBackground();
    uploadcar1();
    uploadcar2();
    }
}
function car1_right(){
    if(car1_x < 700) {
    car1_x = car1_x + 10;
    console.log("when key pressed|" + "ycoordinates = " + car1_y + "x coordinates = " + car1_x);
    uploadBackground();
    uploadcar1();
    uploadcar2();
    }
}
function car2_up(){
    car2_y = car2_y - 10;
    console.log("when key pressed|" + "ycoordinates = " + car2_y + "x coordinates = " + car2_x);
    uploadBackground();
    uploadcar1();
    uploadcar2();
}
function car2_down(){
    car2_y = car2_y + 10;
    console.log("when key pressed|" + "ycoordinates = " + car2_y + "x coordinates = " + car2_x);
    uploadBackground();
    uploadcar1();
    uploadcar2();
}
function car2_left(){
    if(car2_x < 700) {
    car2_x = car2_x - 10;
    console.log("when key pressed|" + "ycoordinates = " + car1_y + "x coordinates = " + car1_x);
    uploadBackground();
    uploadcar1();
    uploadcar2();
    }
}
function car2_right(){
    if(car2_x < 700) {
    car2_x = car2_x + 10;
    console.log("when key pressed|" + "ycoordinates = " + car1_y + "x coordinates = " + car1_x);
    uploadBackground();
    uploadcar1();
    uploadcar2();
    }
}
if(car1_x = 690)  {
        alert("Car 1 Wins")
}
if(car2_x = 690)  {
        alert("Car 2 Wins")
}

