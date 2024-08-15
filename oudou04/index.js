function submit_answer_s1(){
    if(document.getElementById("answer").value == "キュウキョクシンカ"){
        window.location.href = "./sqw2v.html"
    }else{
        document.getElementById("msg").classList.remove('none');
    }
}

function submit_answer_s2(){
    if(document.getElementById("answer").value == "キュウキョクギンガ"){
        window.location.href = "./ytp3v.html"
    }else{
        document.getElementById("msg").classList.remove('none');
    }
}

function submit_answer_s3(){
    if(document.getElementById("answer").value == "Z"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション4「窮鼠の王道」"
    }else if(document.getElementById("answer").value == "Ｚ"){
        window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=ミッション4「窮鼠の王道」"
    }else{
        document.getElementById("msg").classList.remove('none');
    }
}

document.getElementById("ch_button").onclick = function() {
    window.location.href = "./qk0p1.html"
}