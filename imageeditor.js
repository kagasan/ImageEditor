//imageeditor.js

var canvas;
var ctx;

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
}