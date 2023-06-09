const mark_id = document.getElementById('mark_id');

function idDuplicateCheck(){
    alert('중복된 아이디입니다.');
}

//인증번호 발송
//function phoneCheck1(){
//    alert('인증번호를 발송하였습니다.');
//    document.querySelector('.phone_cheak_before').style.display = 'none';
//    document.querySelector('.phone_cheak_after').style.display = 'block';
//    document.querySelector('.phone_cheak_after_btn').style.display = 'block';
//}
//
////인증번호 확인
//function phoneCheck2(){
//    alert('인증번호가 확인되었습니다.');
//    document.getElementById('phoneCheck').classList.add('hold');
//    document.getElementById('phone_d_num').classList.add('hold');
//    document.getElementById('phone_d_num').readOnly=true;
//}

function phoneAction (readOnlyYn, cssName) {
    let phone_num = "phone_num";
    let phone_num_name = "";
    let result = true;
    for (let i = 1; i <= 3; i++) {
        phone_num_name = phone_num + i;

        if(document.getElementById(phone_num_name).value == null || document.getElementById(phone_num_name).value == ""){
            alert('번호를 입력해주세요');
            result = false;
        }

        document.getElementById(phone_num_name).readOnly = readOnlyYn;
        if(readOnlyYn) {
            document.getElementById(phone_num_name).classList.add(cssName);
        } else{
            document.getElementById(phone_num_name).classList.remove(cssName);
        }
        return result;
    }
}

function phoneDisplay (idName, displayType){
    document.getElementById(idName).style.display = displayType;
}

function phoneMark (innterTextChange, addClass, removeClass){
    document.getElementById('mark_tel').innerText = innterTextChange;

    if (addClass != null) {
        document.getElementById('mark_tel').classList.add(addClass);    
    }

    if (removeClass != null) {
        document.getElementById('mark_tel').classList.remove(removeClass);    
    }
}

function phoneCheck (checkNum) {
    let before_msg = "인증번호를 ";
    let div_msg = "";
    let after_msg = " 하였습니다.";
    let last_msg = "";
    let clickAction = true;

    switch (checkNum) {
        case 1:
            div_msg = "발송";
            phoneDisplay("phone_check_before", "none");
            phoneDisplay("phone_check_after", "block");
            phoneDisplay("phone_check_after_btn", "block");
            phoneAction(true, "hold");
            phoneMark("인증번호를 입력해주세요", "red", null);
            break;

        case 2:
            div_msg = "확인";
            document.getElementById('phoneCheck').classList.add('hold');
            document.getElementById('phoneCheck').removeAttribute('onclick');
            document.getElementById('phone_d_num').classList.add('hold');
            document.getElementById('phone_d_num').readOnly = true;
            phoneMark("인증이 완료되었습니다.", "green", "red");
            break;
    
        case 3:
            div_msg = "재발송";
            break;
    
        case 4:
            phoneAction(false, "hold");
            phoneDisplay("phone_check_before", "block");
            phoneDisplay("phone_check_after", "none");
            phoneDisplay("phone_check_after_btn", "none");
            phoneMark("휴대폰 인증을 진행해주세요", null , "green");
            break;
    
        default:
            break;
    }
    
    last_msg = before_msg + div_msg + after_msg;
    if (checkNum != 4 && clickAction) {
        alert(last_msg);
    }
}