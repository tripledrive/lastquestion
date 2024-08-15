function submit_answer(){
    if(document.getElementById("answer").value == "クリスタブララーサ"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション2「推測の王道」"
    }else if(document.getElementById("answer").value == "クリス=タブラ=ラーサ"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション2「推測の王道」"
    }else if(document.getElementById("answer").value == "クリス＝タブラ＝ラーサ"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション2「推測の王道」"
    }else{
        document.getElementById("msg").classList.remove('none');
    }
}

document.getElementById("ch_button").onclick = function() {
    window.location.href = "./kk303.html"
}