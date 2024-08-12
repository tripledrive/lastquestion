const onrule = document.getElementById('on-rules');
const onstats = document.getElementById('on-stats');

window.addEventListener('load',function() {
    const url = new URL(window.location.href);
    const userstatus = database[url.searchParams.getAll('team_no')[0]]
    console.log(database[url.searchParams.getAll('team_no')[0]])

    //ミッションの達成状況を表示
    var Q1_TEXT = ""

    if(userstatus.Q1 == "0"){
        Q1_TEXT = "ミッション01 : 未クリア"
    }else if(userstatus.Q1 == "1"){ 
        Q1_TEXT = "ミッション01 : クリア済"
    }

    //テスト出力用
    document.getElementById('header').insertAdjacentHTML('beforeend',"チーム"+url.searchParams.getAll('team_no')[0] + "の情報を表示中<br>")
    document.getElementById('stats').insertAdjacentHTML('beforeend',Q1_TEXT + "<br>")
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