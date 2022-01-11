function kiemtrasonguyento() {
    let n = parseInt(prompt("Xin mời nhập số"));
    let check = true // Mặc định n là số nguyên tố
    for (let i = 2; i <= (n-1) ; i++) {
        if(n%i==0){
            check = false
            // alert(n +" không phải là số nguyên tố");không để alert mà thay bằng biến check
            // nếu không lệnh sex chạy liên tục tới alert cuối cùng.
            break;
        }

    }
    // alert(n +" là số nguyên tố")
    if(check == true)
        alert(n + " là số nguyên tố");
    else alert(n +" không là số nguyên tố");


}