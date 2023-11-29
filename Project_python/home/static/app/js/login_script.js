function saveInfoFirst() {
    nameValue = document.getElementById('name').value.toString();
    ageValue = document.getElementById('age').value.toString();
    bdateValue = document.getElementById('bdate').value.toString();
    sexValue = document.getElementById('gender').value.toString();
    gmailValue = document.getElementById('email').value.toString();
    var playerData = {
        'name': nameValue,
        'age': ageValue,
        'sex': sexValue,
        'bdate': '1998-01-15',
        'gmail': gmailValue,
    };
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/home/save_info_first',  // Đặt URL của endpoint Django views ở đây
        contentType: 'application/json',
        data: JSON.stringify(playerData),
        
        success: function (response) {
            console.log(response);
            // Xử lý phản hồi từ server (nếu cần)
        },
        error: function (error) {
            console.error(error);
            // Xử lý lỗi (nếu cần)
        }
    });
}