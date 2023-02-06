var bigPic = document.querySelector("#cup"); //큰이미지 가져옴
var smallPics = document.querySelectorAll(".small"); //작은이미지 가져옴 

for(var i=0; i<smallPics.length; i++ ) {
  smallPics[i].onclick = showBig; 
}

function showBig() {
  var newPic = this.src; //click 이벤트가 발생한 대상의 src 속성을 가져옴
  bigPic.setAttribute("src", newPic); //newPic값을 큰 이미지의 src 속성에 할당
}