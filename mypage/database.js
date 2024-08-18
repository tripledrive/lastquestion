const database = [
    {"teamId":"0","teamCode":"TEST","Q1":"2","Q2":"1","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"1","teamCode":"PYGAC","Q1":"1","Q2":"1","Q3":"1","Q4":"1","Q5":"1","Q6":"1","Q7":"0"},
    {"teamId":"2","teamCode":"ACZFA","Q1":"2","Q2":"2","Q3":"0","Q4":"2","Q5":"2","Q6":"0","Q7":"0"},
    {"teamId":"3","teamCode":"CXRLS","Q1":"2","Q2":"2","Q3":"2","Q4":"1","Q5":"2","Q6":"2","Q7":"0"},
    {"teamId":"4","teamCode":"QXXLC","Q1":"1","Q2":"0","Q3":"0","Q4":"2","Q5":"2","Q6":"2","Q7":"0"},
    {"teamId":"5","teamCode":"SHLTN","Q1":"2","Q2":"2","Q3":"0","Q4":"2","Q5":"2","Q6":"0","Q7":"0"},
    {"teamId":"6","teamCode":"AEPYR","Q1":"2","Q2":"2","Q3":"0","Q4":"0","Q5":"2","Q6":"0","Q7":"0"},
    {"teamId":"7","teamCode":"AVSJH","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"8","teamCode":"JJYGV","Q1":"2","Q2":"2","Q3":"0","Q4":"0","Q5":"2","Q6":"0","Q7":"0"},
    {"teamId":"9","teamCode":"YGTYB","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"10","teamCode":"XNZTZ","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"11","teamCode":"SASUC","Q1":"1","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"12","teamCode":"ADRAY","Q1":"0","Q2":"2","Q3":"0","Q4":"0","Q5":"1","Q6":"0","Q7":"0"},
    {"teamId":"13","teamCode":"ALQJJ","Q1":"1","Q2":"1","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"14","teamCode":"YSJMQ","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"15","teamCode":"PRMEU","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"16","teamCode":"AGGYH","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"17","teamCode":"YXAPM","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"18","teamCode":"PRUMR","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"19","teamCode":"XZUJQ","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"20","teamCode":"SFEHV","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"21","teamCode":"DTMMF","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"22","teamCode":"FPYHP","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"23","teamCode":"FHYPA","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"24","teamCode":"UMYJZ","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"25","teamCode":"MFNGK","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"26","teamCode":"KHKUC","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"27","teamCode":"ZFPUX","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"28","teamCode":"DJZZL","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"29","teamCode":"SYPMV","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"30","teamCode":"GHKLK","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"31","teamCode":"UVGMV","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"32","teamCode":"WSSJU","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"33","teamCode":"ZFHBX","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"34","teamCode":"JRUHP","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"35","teamCode":"TPRPN","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"36","teamCode":"QYACK","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"37","teamCode":"TXKMA","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"38","teamCode":"DRMVR","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"39","teamCode":"NSKTW","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"40","teamCode":"WAMVT","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"41","teamCode":"UNFWG","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"42","teamCode":"MRCNK","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"43","teamCode":"XGDAW","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"44","teamCode":"QNHAP","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"45","teamCode":"BWBQW","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"46","teamCode":"TYJRJ","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"47","teamCode":"WHKXY","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"48","teamCode":"CJECX","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"49","teamCode":"QSUCH","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"50","teamCode":"KWZWJ","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"51","teamCode":"XYBNV","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"52","teamCode":"KFVBY","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"53","teamCode":"BXQVE","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"54","teamCode":"NUNTG","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"55","teamCode":"BLCJS","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"56","teamCode":"EMVVN","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"57","teamCode":"RMDSA","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"58","teamCode":"DAMPJ","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"59","teamCode":"TUPVC","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"60","teamCode":"NHPVD","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"61","teamCode":"YMLTN","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"62","teamCode":"DJZHK","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"63","teamCode":"QYUVC","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"},
    {"teamId":"64","teamCode":"XKHAL","Q1":"0","Q2":"0","Q3":"0","Q4":"0","Q5":"0","Q6":"0","Q7":"0"}]