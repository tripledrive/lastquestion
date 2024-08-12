function submit_teamkey(){
    console.log(database[document.getElementById("team_no").value].teamCode)
    if(database[document.getElementById("team_no").value].teamCode == document.getElementById("team_key").value){
        var team_no = document.getElementById("team_no").value
        console.log("ok")
        window.location.href = './mypage.html?team_no='+team_no+'&team_key='+document.getElementById("team_key").value
    }else{
        document.getElementById('message').innerHTML = "認証失敗"
        console.log("no")
    }
}