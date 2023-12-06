previsao1="";
previsao2="";
Webcam.set({
    width:350,
    height:300,
    imageFormat:"png",
    pngQuality:90,
})
camera=document.getElementById("camera");
Webcam.attach("#camera");
function tirarfoto(){
Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="' + data_uri + '"/>';
})
}
console.log("versão do ml5:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/J2Ip11PDF/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelo carregado")
}
function speak(){
    var synth=window.speechSynthesis;
    speakData1="a primeira previsão é "+previsao1;
    speakData2="a segunda previsão é "+previsao2;
    var utterThis=new SpeechSynthesisUtterance(speakData1+speakData2);
    synth.speak(utterThis);
}
function checar(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }  else{
        console.log(results);
document.getElementById("resulteEmotionName").innerHTML=results[0].label;
document.getElementById("resulteEmotionName2").innerHTML=results[1].label;
previsao1=resultes[0].label;
    previsao2=resultes[1].label;
    speak();
    if(results[0].label=="tranquilo"){
        document.getElementById("updateEmoji").innerHTML="&#128522;";
    }
    if(results[0].label=="rock"){
        document.getElementById("updateEmoji").innerHTML="&#128532;";
    }
    if(results[0].label=="vitoria"){
        document.getElementById("updateEmoji").innerHTML="&#128548;";
    }
    if(results[1].label=="tranquilo"){
        document.getElementById("updateEmoji2").innerHTML="&#128522;";
    }
    if(results[1].label=="rock"){
        document.getElementById("updateEmoji2").innerHTML="&#128532;";
    }
    if(results[1].label=="vitoria"){
        document.getElementById("updateEmoji2").innerHTML="&#128548;";
    }

    }
}

