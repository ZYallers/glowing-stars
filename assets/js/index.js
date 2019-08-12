var wH = window.innerHeight;
var wW = window.innerWidth;
var domBody = document.body;

(function(n) {
	  var leftArr = [20,25,30,35,40,45,50,55,60,65,60,65,70,75,80];
	  var delayArr = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50];

  for (var i = 0; i < n; i++) {
  	var leftEle = leftArr[Math.floor(Math.random()*leftArr.length)] + parseFloat(Math.random().toFixed(2));
  	var delayEle = delayArr[Math.floor(Math.random()*delayArr.length)] * 1000 + Math.round(Math.random() * 700);
    var div = document.createElement('div');
    div.className = 'star comet';
    div.setAttribute('style', 'left:' + leftEle + '%;animation-delay:' + delayEle + 'ms;');
    domBody.appendChild(div);
  }
})(25);

(function(n) {
  for (var i = 0; i < n; i++) {
    var div = document.createElement('div');
    div.className = i % 20 == 0 ? 'star star--big' : i % 9 == 0 ? 'star star--medium' : 'star';
    // random everywhere!
    div.setAttribute('style', 'top:' + Math.round(Math.random() * wH) + 'px;left:' + Math.round(Math.random() * wW) 
    	+ 'px;animation-duration:' + (Math.round(Math.random() * 3000) + 3000) + 'ms;animation-delay:' + Math.round(Math.random() * 3000) + 'ms;');
    domBody.appendChild(div);
  }
})(150);