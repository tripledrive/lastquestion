window.addEventListener('load',function() {  
    // リクエストクエリを取得してQRコードを生成する
    const url = new URL(window.location.href);
    var gid = url.searchParams.getAll('gid')
    var contents = url.searchParams.getAll('contents')
    /**
     * gid = チームID
     * contents = クリア対象のコンテンツ
     * 　-> 謎クリアの場合 q0
     * 　-> ミッションクリアの場合 m0
     */
    var inp01 = ""
    document.getElementById('QR').textContent = '';
      // QRコード作成
    var qrcode = new QRCode('QR', {
        text:  inp01,
        width: 128,
        height: 128,
        correctLevel : QRCode.CorrectLevel.H 
    })
});