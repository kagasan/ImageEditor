//imageeditor.js

var canvas;
var ctx;

var img = new Image;

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    canvas.height = 480;
    canvas.width = 640;
    ctx.fillStyle="#999999";
    ctx.fillRect(0, 0, 640, 480);
    ctx.font = "16px 'メイリオ'";
    ctx.fillStyle="#0000ff";
    ctx.fillText("ここに画像をドラッグアンドドロップ", 0, 16);
    canvas.addEventListener('dragover', function(e){
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy'
    }, false);
    canvas.addEventListener('drop', function(e){
        e.stopPropagation();
        e.preventDefault();
        var file = e.dataTransfer.files[0];
        var reader = new FileReader();
        reader.onload = function(){
            img.src = reader.result;
            canvas.width = img.width;
            canvas.height = img.height + 20;
            ctx.drawImage(img,0,20);
            ctx.fillStyle="#000000";
            ctx.fillText("画像をクリックすると，その座標の色情報を表示します．", 20, 16);
        }
        reader.readAsDataURL(file);
    }, false);
    canvas.addEventListener("click", function(e){
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var Data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = Data.data;
        var pos = y * canvas.width * 4 + x * 4;
        var r = data[pos];
        var g = data[pos + 1];
        var b = data[pos + 2];
        var a = data[pos + 3];
        ctx.fillStyle="rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(0, 0, 20, 20);
        ctx.fillStyle="#ffffff";
        ctx.fillRect(20, 0, canvas.width-20, 20);
        ctx.fillStyle="#000000";
        var str = "x = "+x+", y = "+y+", r = "+r+", g = "+g+", b = "+b+", a = "+a;
        ctx.fillText(str, 20, 16);
        
    },false);
}