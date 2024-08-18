function submit_answer(){
    if(document.getElementById("answer").value == "OOPARTS"){
        window.location.href = "https://tripledrive.github.io/lastquestion/lqg0h/jgv9rswtg.html"
    }else{
        document.getElementById("msg").classList.remove('none');
    }
}

function submit_tn(){
    gen_QR(document.getElementById('tb').value);
}

function gen_QR(team_no) {  
    // リクエストクエリを取得してQRコードを生成する
    var inp01 = "https://island-juniper-narwhal.glitch.me/?contents=&team_no="+team_no+"&mission=lastquestion"
    document.getElementById('qr').textContent = '';
      // QRコード作成
    var qrcode_1 = new QRCode('qr', {
        text:  inp01,
        width: 128,
        height: 128,
        correctLevel : QRCode.CorrectLevel.H 
    })
    document.getElementById("hint").classList.remove('none')
}


function submit_ss(){
    window.location.href = "https://island-juniper-narwhal.glitch.me/?contents=&team_no="+team_no+"&mission=SUBEVENT"
}