var SpeechRecognition = window.webkitSpeechRecongnition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    
    console.log(event);
     var Content = event.results[0][0].transcript;

     document.getElementById("textbox").innerHTML = Content;
     console.log(Content);
     if(Content =="take my selfie")
     {
         console.log("take my selfie");
         speak();
     }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    
    setTimeout(function()
    {
        take_snapshot();
        save();
    },  5000);
}
 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    Image_format : 'jpeg',
    jpeg_quality:90

});
