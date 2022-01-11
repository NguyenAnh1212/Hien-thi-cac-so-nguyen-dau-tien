function kiemtrasonguyento() {
    let n = parseInt(prompt("Xin mời nhập số"));
    let check = true // Mặc định n là số nguyên tố
    //để giảm số lần lặp đặt lại điều kiện, ktra 100 mà ko cần ktra đến 99,
    //dùng hàm căn bậc 2, ví dụ 16 thì chỉ cần ktra đến 4, 100 thì chỉ cần ktra đến 10 vì trong khoảng đấy mà không có ước thì sẽ không có
    // for (let i = 2; i <= (n-1) ; i++){
    for (let i = 2; i <= Math.sqrt(n) ; i++) {
            if(n%i==0){
                check = false
                // alert(n +" không phải là số nguyên tố");không để alert mà thay bằng biến check
                // nếu không lệnh sex chạy liên tục tới alert cuối cùng.
                break;
            }

        }
    // alert(n +" là số nguyên tố")

// Chuyển về toán tử 3 ngôi
    check== true? alert(n + " là số nguyên tố"):alert(n +" không là số nguyên tố");
    // if(check == true)
    //     alert(n + " là số nguyên tố");
    // else alert(n +" không là số nguyên tố");
    }


