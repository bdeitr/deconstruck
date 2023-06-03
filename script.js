// Get all the images
image_array = [
'1.png',
'2.png',
'3.png',
'4.png',
'5.png',
'6.png',
'7.png',
'8.png',
'9.png',
'10.png',
'11.png',
'12.png'
];
image_array_2 = [
'A.png',
'B.png',
'C.png',
'D.png',
'E.png',
'F.png',
'G.png',
'H.png',
'I.png',
'J.png',
'K.png',
'L.png'
];
//const myText = 'myText.csv';

function addText(myImage){
  let myImageName = myImage //.replace('png','jpg');
  let myTextSrc = 'text/'+myImageName;

  $('.Bio').append($('<img src="'+myTextSrc+'" style="max-width: 100%;">'));
}

function closeFunction(e) {
    $(".cookies")[0].style.display = "none";
}

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);
  random_index_2 = Math.floor(Math.random() * image_array_2.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]
  selected_image_2 = image_array_2[random_index_2]

  // Display the image
  document.getElementById('image_shower').src = `./img/${selected_image}`
  document.getElementById('image_shower2').src = `./img/${selected_image_2}`
  document.getElementById('image_shower3').src = `./img/${selected_image}`
  document.getElementById('image_shower4').src = `./img/${selected_image_2}`

  $("#button_container")[0].style.display = "none";
  $(".container")[0].style.display = "flex";
  //$("#magliainiziale")[0].style.display = "none";

  addText(selected_image_2);
}

function BUY(e) {
    $(".popup")[0].style.display = "block";
    //$("#popupH")[0].style.display = "block";
}

function noBUY(e) {
    $(".popup")[0].style.display = "none";
    $("#popupH")[0].style.display = "none";
}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 