Webcam.set({
width:300,
height:350,
image_format="png"
png_quality=100
});
var camera=document.getElementById("Camera");
Webcam.attach("#Camera")
function takeSnap(){
    Webcam.snap()
}