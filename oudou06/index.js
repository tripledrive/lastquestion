function submit_answer(){
    if(document.getElementById("answer").value == "龍王"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション6「邪道の王道」"
    }else{
        document.getElementById("msg").classList.remove('none');
    }
}

document.getElementById("ch_button").onclick = function() {
    window.location.href = "./jo50w.html"
}