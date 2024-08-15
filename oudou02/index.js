function submit_answer(){
    if(document.getElementById("answer").value == "イメンブーゴ"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション1「魚骨の王道」"
    }else if(document.getElementById("answer").value == "イメン＝ブーゴ"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション1「魚骨の王道」"
    }else if(document.getElementById("answer").value == "イメン=ブーゴ"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション1「魚骨の王道」"
    }else{
        document.getElementById("msg").classList.remove('none');
    }
}

document.getElementById("ch_button").onclick = function() {
    window.location.href = "./s0sd2.html"
}