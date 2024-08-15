function submit_answer(){
    if(document.getElementById("answer").value == "ろうどう"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション3「過去の王道」"
    }else{
        document.getElementById("msg").classList.remove('none');
    }
}

document.getElementById("ch_button").onclick = function() {
    window.location.href = "./kk303.html"
}