function submit_answer(){
    if(document.getElementById("answer").value == "ドギラゴールデン"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション5「追憶の王道」"
    }else{
        document.getElementById("msg").classList.remove('none');
    }
}

document.getElementById("ch_button").onclick = function() {
    window.location.href = "./to5bp.html"
}