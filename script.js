var fString = () => {
    var inputText = document.getElementById("inputField")
    if(inputText){
        return inputText.value.split(' ').join('')
    }
    else return '';
}

function Decode(fString)
{
    // var inputText = document.getElementById("inputField");
    var str = '';
    for (var i = 0; i < fString.length; i += 2) {
        try {
            var hexSubstring = fString.substr(i, 2);
            if (hexSubstring.length !== 2) {
                alert("Độ dài chuỗi không hợp lệ.");
                throw new Error('Chuỗi không hợp lệ để chuyển đổi thành số thập lục phân.');
            }
            var v = parseInt(hexSubstring, 16);
            if (!isNaN(v)) {
                str += String.fromCharCode(v);
            } else {
                document.getElementById("outputField").value = `Không thể chuyển đổi thành số thập lục phân`;
                return;
            }
            document.getElementById("outputField").value = str;
        } catch (error) {
            // Xử lý ngoại lệ ở đây
            console.error("Có lỗi xảy ra:", error);
        }
    }
}

function Copy2Clipboard() {
    // Lấy giá trị của trường output
    var copyText = document.getElementById("outputField");
    if(!!copyText.value)
    {
        copyText.select(); //Chọn đoạn văn bản
        copyText.setSelectionRange(0, 32767); // Dùng cho thiết bị di động
      
         // Copy văn  bản trong trường output
        navigator.clipboard.writeText(copyText.value);
      
        // Thông báo
        alert("Đã copy văn bản: " + copyText.value);
    }
    else{
        alert("Có gì đâu mà copy?");
    }
}
function processDecode(){
    var hexString = fString()
    Decode(hexString)
}