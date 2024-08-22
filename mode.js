//Functionality for Dark/Light Mode

//Source code: https://www.geeksforgeeks.org/how-to-make-dark-mode-for-websites-using-html-css-javascript/
               //https://www.youtube.com/watch?v=2j_kBqpFK-g


function darkMode() {
      let element = document.body;
      let content = document.getElementById("icon");  //moon icon for dark mode
      element.className = "darkmode";
      localStorage.setItem('mode','dark'); //storing user preference of light mode
    
      
    }
    
    function lightMode() {
      let element = document.body;
      let content = document.getElementById("sun");  //sun icon for light mode
      element.className = "lightmode";
      localStorage.setItem('mode','light') //storing user preference of light mode
      
    }
    
    const savedmode = localStorage.getItem('mode'); //obtaining the stored value 
    if (savedmode == 'dark'){ //if the user chooses moon icon and prefer dark mode, darkMode function is implemented throughout
     darkMode();
    
    } else {   //else lightMode function is implemented throughout
      lightMode();
    }
    
    
    
    