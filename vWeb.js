const noBtn = document.getElementById("noBtn");
let p4 = document.getElementById("p4");

//Array of messages
const messages = ["Mmmmm...think you made a mistake🥺", 
                "Are you sure about that😣",           
                "Aint no way🙃",
                "We'll pretend like i didnt see that😑",
                "Angeke!🙅🏾‍♂️",
                "Boitumelo Yolanda Zondo!!!🤨",
                "Like really🙄"
];
let messageIndex = 0;
let loveIndex = 0; 
const lovequotes = ["If I could give you one thing, it would be the ability to see yourself through my eyes. You’d see how special, beautiful, and irreplaceable you are—the way you brighten my life without even trying. Valentine’s Day may come once a year, but with you, every day feels like Valentine’s Day.🌹"

];
 



noBtn.onclick = function(){
    const container = document.getElementById("container"); 
    
    //Getting container dimensions
    const containerWidth = container.offsetWidth; 
    const containerHeight = container.offsetHeight; 

    //button dimensions
    const btnWidth = noBtn.offsetWidth; 
    const btnHeight = noBtn.offsetHeight; 

    //getting random width
    const left = Math.floor(Math.random() * (containerWidth - btnWidth)); 
    const top = Math.floor(Math.random() * (containerHeight - btnHeight)); 

    //new position
    noBtn.style.left = left + "px"; 
    noBtn.style.top = top + "px"; 
    //let p3 = document.getElementById("p3").textContent = "mmmm...think you made a mistake 🥺";

    //Generating messages
    let p3 = document.getElementById("p3");
    p3.textContent = messages[messageIndex]; 

    //move to next message(loop back if at end)
    messageIndex++; 

    if(messageIndex >= messages.length){
        messageIndex = 0; 
    }
}


const yesBtn = document.getElementById("yesBtn"); 
let p1 = document.getElementById("p1"); 
let typingInterval; 
yesBtn.onclick = function(){
    const div1 = document.getElementById("div1");
    div1.style.backgroundImage = 'url("valentines_images/kiss.gif")'; 
                                    
    div1.classList.add("show");
    div1.style.backgroundSize = "280px 250px";
    p3.textContent = ""; 
    p1.textContent ="She Said Yes!";
    //love quotes
     const quote = lovequotes[loveIndex];

    //typewriter effect
    p4.textContent =""; 

    let i = 0; //starting at first lett
    clearInterval(typingInterval); 
      typingInterval = setInterval(() => {
        p4.textContent += quote.charAt(i); 
        i++; 
        if(i >= quote.length){
            clearInterval(typingInterval); //to stop when done
        }
     }, 65);  //typing speed 
    //moving to next quote
    loveIndex++; 
    if(loveIndex >= lovequotes.length){
        loveIndex = 0; 
    }

    //glow effect
    yesBtn.classList.add("glow"); 

    setTimeout(() => {
        yesBtn.classList.remove("glow"); 
    }, 4000);
    //heart function
    function hearts(){
    const heart = document.createElement("span"); 
    heart.classList.add("heart");
    heart.innerHTML = "💞"; 
    
    //random hz position
    heart.style.left = Math.random() * window.innerWidth + "px"; 

    document.getElementById("heart-container").appendChild(heart); 

    //removing after animation
    setTimeout(() => {
        heart.remove(); 
    }, 8000);
}
//spawning
setInterval(hearts, 500); 

}







