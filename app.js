const input = document.querySelector(".input input");
const needed = document.querySelector(".neededData");

const help = `
<pre>
    what      this is a fun project made using basic javascript<br>
    why       just for the fun i made it<br>
    credit    someone who made before me<br>
    about     type about to see about me<br>
    contact   type contact to contact me<br>
    get       to get the source code<br>
    cls       clear all the waste or useless thing
</pre>

`;
const contact = `
<pre>
Contact Information:
YouTube:    https://www.youtube.com 
Facebook:   https://www.facebook.com/          
Instagram:  https://www.instagram.com/       
Email:      davidrai@gmail.com                               

</pre>`;

const command = ["help", "get", "about", "contact", "credit", "why", "what","cls"];

const commandData = [
  help,
  `<P>if you want the source code here <a href="https://github.com/david-rai" class="get" target="_blank">Github</a></p>`,
  `<p class"about">
  David Rai is a curious student and developer 
 He is open to discussions about React, JavaScript, CSS, HTML, 
  and GSAP (GreenSock Animation Platform). He emphasizes that he 
  is still in the learning phase and doesn'thave professional 
  experience yet. David describes himself as an introvert when
   it comes to strangers.`,

  contact,
  " <P> someone who made before me there are many people who has made this before me.</P>",
  "<p>i was feeling burnout and lazy so i made it for the fun</p>",
  "<p>This is a portfolio website that looks and have functionality like terminal</p>",
];

const checkCommand = (data) => {
const isthere=command.includes(data)
if(data =="cls"){
    needed.innerHTML="  "
}

if(isthere){
  let index = command.findIndex((com) => data === com);
  needed.innerHTML += `<pre>${commandData[index]}</pre>`;
  input.value = "";
  input.focus();
}else{
    needed.innerHTML+="<b>keita lekh vai j payo tei chai na lekh  ahaudeina  vane help lekh.</b><br>"
    input.value = "";
    input.focus();
}

};

window.addEventListener("DOMContentLoaded", () => {
  input.focus();
  input.value = "help";
});

window.addEventListener("keydown", (e) => {
  console.log("pressed");
  if (e.keyCode == 13) {
    const inputData = input.value;
    inputData && checkCommand(inputData);
  }
});
