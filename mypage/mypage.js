window.addEventListener('load',function() {
    const url = new URL(window.location.href);
    const userstatus = database[url.searchParams.getAll('team_no')[0]]
    console.log(database[url.searchParams.getAll('team_no')[0]])

    //ミッションの達成状況を表示
    var M1_TEXT = ""
    var Q1_TEXT = ""

    if(userstatus.M1 == "0"){
        M1_TEXT = "ミッション01 : 未達成"
    }else if(userstatus.M1 == "1"){ 
        M1_TEXT = "ミッション01 : 達成"
    }
    if(userstatus.Q1 == "0"){
        Q1_TEXT = "謎01 : 未クリア"
    }else if(userstatus.Q1 == "1"){ 
        Q1_TEXT = "謎01 : クリア済"
    }
    document.getElementById('main').insertAdjacentHTML('afterend',M1_TEXT + "<br>")
    document.getElementById('main').insertAdjacentHTML('afterend',Q1_TEXT + "<br>")
});