let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }  
    else if(hours>=12 && hours<16){
        speak("Good afternoon sir")
    }
    else{
        speak("Good Evening sir")
    }
 }
//  window.addEventListener('load',()=>{
//     wishMe()
//  })

 let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
 let recognition = new speechRecognition()
 recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
 }

 btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
 })

 function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"

    if(message.includes("hello")){
        speak("hi")
    }
    else if(message.includes("how are you")){
        speak("I am fine, How can I help you")
    }
    else if(message.includes("who are you")){
        speak("I am Assistant, created by Abdul Basit")
    }
    else if(message.includes("thanks")){
        speak("Welcome Sir")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open Visual Studio Code")){
        speak("opening Visual Studio Code")
        window.open("Visual Studio Code://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else{
        speak(`this is what i found on internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
 }