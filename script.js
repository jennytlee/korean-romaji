var charList = document.querySelectorAll(".btn.btn-default");

for (var i = 0; i < charList.length; i++) {
	charList[i].onclick = function() {
  appendChar(this.id, this.innerHTML.trim());
  };
};


function appendChar(eng, kor) {
  document.getElementById("englishtext").innerHTML = document.getElementById("englishtext").innerHTML + eng;
  document.getElementById("koreantext").innerHTML = document.getElementById("koreantext").innerHTML + kor;
}
