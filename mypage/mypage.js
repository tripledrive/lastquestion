const onrule = document.getElementById('on-rules');
const onstats = document.getElementById('on-stats');

window.addEventListener('load',function() {
    const url = new URL(window.location.href);
    const userstatus = database[url.searchParams.getAll('team_no')[0]]
    console.log(database[url.searchParams.getAll('team_no')[0]])

    //ミッションの達成状況を表示
    var Q1_TEXT = ""
    var Q2_TEXT = ""
    var Q3_TEXT = ""
    var Q4_TEXT = ""
    var Q5_TEXT = ""
    var Q6_TEXT = ""
    var Q7_TEXT = ""

    if(userstatus.Q1 == "0"){
        Q1_TEXT = "未クリア"
    }else if(userstatus.Q1 == "1"){ 
        Q1_TEXT = "クリア済"
    }else if(userstatus.Q1 == "2"){ 
        Q1_TEXT = "クリア済(チケット引き換え済)"
    }

    if(userstatus.Q2 == "0"){
        Q2_TEXT = "未クリア"
    }else if(userstatus.Q2 == "1"){ 
        Q2_TEXT = "クリア済"
    }else if(userstatus.Q2 == "2"){ 
        Q2_TEXT = "クリア済(チケット引き換え済)"
    }

    if(userstatus.Q3 == "0"){
        Q3_TEXT = "未クリア"
    }else if(userstatus.Q3 == "1"){ 
        Q3_TEXT = "クリア済"
    }else if(userstatus.Q3 == "2"){ 
        Q3_TEXT = "クリア済(チケット引き換え済)"
    }

    if(userstatus.Q4 == "0"){
        Q4_TEXT = "未クリア"
    }else if(userstatus.Q4 == "1"){ 
        Q4_TEXT = "クリア済"
    }else if(userstatus.Q4 == "2"){ 
        Q4_TEXT = "クリア済(チケット引き換え済)"
    }

    if(userstatus.Q5 == "0"){
        Q5_TEXT = "未クリア"
    }else if(userstatus.Q5 == "1"){ 
        Q5_TEXT = "クリア済"
    }else if(userstatus.Q5 == "2"){ 
        Q5_TEXT = "クリア済(チケット引き換え済)"
    }

    if(userstatus.Q6 == "0"){
        Q6_TEXT = "未クリア"
    }else if(userstatus.Q6 == "1"){ 
        Q6_TEXT = "クリア済"
    }else if(userstatus.Q6 == "2"){ 
        Q6_TEXT = "クリア済(チケット引き換え済)"
    }

    if(userstatus.Q7 == "0"){
        Q7_TEXT = "未クリア"
    }else if(userstatus.Q7 == "1"){ 
        Q7_TEXT = "クリア済"
    }else if(userstatus.Q7 == "2"){ 
        Q7_TEXT = "クリア済(チケット引き換え済)"
    }


    document.getElementById('header').insertAdjacentHTML('beforeend',"チーム"+url.searchParams.getAll('team_no')[0] + "の情報を表示中<br>")
    document.getElementById('Q1').insertAdjacentHTML('beforeend',Q1_TEXT + "<br>")
    document.getElementById('Q2').insertAdjacentHTML('beforeend',Q2_TEXT + "<br>")
    document.getElementById('Q3').insertAdjacentHTML('beforeend',Q3_TEXT + "<br>")
    document.getElementById('Q4').insertAdjacentHTML('beforeend',Q4_TEXT + "<br>")
    document.getElementById('Q5').insertAdjacentHTML('beforeend',Q5_TEXT + "<br>")
    document.getElementById('Q6').insertAdjacentHTML('beforeend',Q6_TEXT + "<br>")
    document.getElementById('Q7').insertAdjacentHTML('beforeend',Q7_TEXT + "<br>")
    if(userstatus.Q1 == "1"){
        document.getElementById("mss_q1").classList.remove('none')
        document.getElementById("out_q1").classList.remove('none')
    }
    if(userstatus.Q2 == "1"){
        document.getElementById("mss_q2").classList.remove('none')
        document.getElementById("out_q2").classList.remove('none')
    }
    if(userstatus.Q3 == "1"){
        document.getElementById("mss_q3").classList.remove('none')
        document.getElementById("out_q3").classList.remove('none')
    }
    if(userstatus.Q4 == "1"){
        document.getElementById("mss_q4").classList.remove('none')
        document.getElementById("out_q4").classList.remove('none')
    }
    if(userstatus.Q5 == "1"){
        document.getElementById("mss_q5").classList.remove('none')
        document.getElementById("out_q5").classList.remove('none')
    }
    if(userstatus.Q6 == "1"){
        document.getElementById("mss_q6").classList.remove('none')
        document.getElementById("out_q6").classList.remove('none')
    }
    if(userstatus.Q7 == "1"){
        document.getElementById("mss_q7").classList.remove('none')
        document.getElementById("out_q7").classList.remove('none')
    }
});

document.getElementById("on-top").onclick = function() {
    document.getElementById("top").classList.remove('none')
    document.getElementById("rules").classList.add('none')
    document.getElementById("stats").classList.add('none')
    document.getElementById("on-top").classList.add('onbutton')
    document.getElementById("on-rules").classList.remove('onbutton')
    document.getElementById("on-stats").classList.remove('onbutton')
}

document.getElementById("on-rules").onclick = function() {
    document.getElementById("top").classList.add('none')
    document.getElementById("rules").classList.remove('none')
    document.getElementById("stats").classList.add('none')
    document.getElementById("on-top").classList.remove('onbutton')
    document.getElementById("on-rules").classList.add('onbutton')
    document.getElementById("on-stats").classList.remove('onbutton')
}

document.getElementById("on-stats").onclick = function() {
    document.getElementById("top").classList.add('none')
    document.getElementById("rules").classList.add('none')
    document.getElementById("stats").classList.remove('none')
    document.getElementById("on-top").classList.remove('onbutton')
    document.getElementById("on-rules").classList.remove('onbutton')
    document.getElementById("on-stats").classList.add('onbutton')
}

window.addEventListener('load',function() {  
    // リクエストクエリを取得してQRコードを生成する
    const url = new URL(window.location.href);
    var team_no = url.searchParams.getAll('team_no')
    var inp01 = "https://island-juniper-narwhal.glitch.me/?contents=&team_no="+team_no+"&mission=1"
    document.getElementById('out_q1').textContent = '';
      // QRコード作成
    var qrcode_1 = new QRCode('out_q1', {
        text:  inp01,
        width: 128,
        height: 128,
        correctLevel : QRCode.CorrectLevel.H 
    })

    var inp02 = "https://island-juniper-narwhal.glitch.me/?contents=&team_no="+team_no+"&mission=2"
    document.getElementById('out_q2').textContent = '';
      // QRコード作成
    var qrcode_2 = new QRCode('out_q2', {
        text:  inp02,
        width: 128,
        height: 128,
        correctLevel : QRCode.CorrectLevel.H 
    })

    var inp03 = "https://island-juniper-narwhal.glitch.me/?contents=&team_no="+team_no+"&mission=3"
    document.getElementById('out_q3').textContent = '';
      // QRコード作成
    var qrcode_3 = new QRCode('out_q3', {
        text:  inp03,
        width: 128,
        height: 128,
        correctLevel : QRCode.CorrectLevel.H 
    })

    var inp04 = "https://island-juniper-narwhal.glitch.me/?contents=&team_no="+team_no+"&mission=4"
    document.getElementById('out_q4').textContent = '';
      // QRコード作成
    var qrcode_4 = new QRCode('out_q4', {
        text:  inp04,
        width: 128,
        height: 128,
        correctLevel : QRCode.CorrectLevel.H 
    })

    var inp05 = "https://island-juniper-narwhal.glitch.me/?contents=&team_no="+team_no+"&mission=5"
    document.getElementById('out_q5').textContent = '';
      // QRコード作成
    var qrcode_5 = new QRCode('out_q5', {
        text:  inp05,
        width: 128,
        height: 128,
        correctLevel : QRCode.CorrectLevel.H 
    })

    var inp06 = "https://island-juniper-narwhal.glitch.me/?contents=&team_no="+team_no+"&mission=6"
    document.getElementById('out_q6').textContent = '';
      // QRコード作成
    var qrcode_6 = new QRCode('out_q6', {
        text:  inp06,
        width: 128,
        height: 128,
        correctLevel : QRCode.CorrectLevel.H 
    })

    var inp07 = "https://island-juniper-narwhal.glitch.me/?contents=&team_no="+team_no+"&mission=7"
    document.getElementById('out_q7').textContent = '';
      // QRコード作成
    var qrcode_7 = new QRCode('out_q7', {
        text:  inp07,
        width: 128,
        height: 128,
        correctLevel : QRCode.CorrectLevel.H 
    })
});