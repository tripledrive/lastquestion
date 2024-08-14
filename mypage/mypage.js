const onrule = document.getElementById('on-rules');
const onstats = document.getElementById('on-stats');

window.addEventListener('load',function() {
    const url = new URL(window.location.href);
    const userstatus = database[url.searchParams.getAll('team_no')[0]]
    console.log(database[url.searchParams.getAll('team_no')[0]])

    //ミッションの達成状況を表示
    var Q1_TEXT = ""

    if(userstatus.Q1 == "0"){
        Q1_TEXT = "未クリア"
    }else if(userstatus.Q1 == "1"){ 
        Q1_TEXT = "クリア済"
    }else if(userstatus.Q1 == "2"){ 
        Q1_TEXT = "クリア済(チケット引き換え済)"
    }

    document.getElementById('header').insertAdjacentHTML('beforeend',"チーム"+url.searchParams.getAll('team_no')[0] + "の情報を表示中<br>")
    document.getElementById('Q1').insertAdjacentHTML('beforeend',Q1_TEXT + "<br>")
    if(userstatus.Q1 == "1"){
        document.getElementById("mss_q1").classList.remove('none')
        document.getElementById("out_q1").classList.remove('none')
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
    var inp01 = "https://rigorous-bramble-aster.glitch.me/?contents=&team_no="+team_no+"&mission=1"
    document.getElementById('out_q1').textContent = '';
      // QRコード作成
    var qrcode_1 = new QRCode('out_q1', {
        text:  inp01,
        width: 128,
        height: 128,
        correctLevel : QRCode.CorrectLevel.H 
    })
});