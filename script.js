const kits = ["crash", "kick", "snare", "tom"]; 

kits.forEach((kit)=>{
  const btnEle = document.createElement("button");
  const conEle = document.querySelector(".container");
  conEle.appendChild(btnEle);
  btnEle.classList.add("btn");
  btnEle.innerText = kit;
  btnEle.style.backgroundImage = "url(images/"+ kit + ".png)";
  const audioEle = document.createElement("audio");
  conEle.appendChild(audioEle);
  audioEle.src = "sounds/"+kit+".mp3";
  btnEle.addEventListener("click" , ()=>{
     audioEle.play();
  })
  window.addEventListener("keydown", (event)=>{
    if(event.key === kit.slice(0, 1)){
      audioEle.play();
    }
   
  })
})