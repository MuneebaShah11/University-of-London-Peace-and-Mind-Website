
// Functionality for slideshow in awareness page

// Code is written with the help the source https://www.youtube.com/watch?v=eEIrB8EYtW0

//some changes are made to original code such as removing opacity function

let slide = document.querySelectorAll('.slide'); //selects all the elements in div "slide"
var current = 0;

function main() {

  for(let i = 0; i < slide.length; i++){ //looping through each element of slide div
    slide[i].style.display = 'none';  //hides the elements of the div
  }

}

function next (){

  main(); //calling the above function to hide all the elements
  if(current === slide.length-1) current = -1; //once the last slide appears, cuurent variable is reset to -1 to start from the beginning again 
  current++; //incrementing 'current' to move to next slide

  slide[current].style.display = 'block';  //display of slides set to 'block'
  

  }

  function previous (){

    main();
    if(current === 0) current = slide.length; //if at first slide previous arrow is clicked the function takes to last slide
    current--; //and then decrements the slide, showing previous slide each time
  
    slide[current].style.display = 'block'; //slides shown in block display
    
  
    }


function start() {

  main();
  slide[current].style.display = 'block'; //hiding the elements and then setting their display property to block
}
start();

