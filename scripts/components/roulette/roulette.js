var options = ["-500р на процедуру", "Маска в подарок", "Патчи  в подарок", "-10% на процедуру", "-15% на процедуру", "Сеанс RSL 20 мин", "-500р на процедуру", "Маска в подарок", "Патчи  в подарок", "-10% на процедуру", "-15% на процедуру", "Сеанс RSL 20 мин"];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

document.querySelector(".roulette__spin").addEventListener("click", spin);

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {
  var phase = 0;
  var center = 128;
  var width = 127;
  var frequency = Math.PI*2/maxitem;
  
  red   = Math.sin(frequency*item+2+phase) * width + center;
  green = Math.sin(frequency*item+0+phase) * width + center;
  blue  = Math.sin(frequency*item+4+phase) * width + center;
  
  return RGB2Color(red,green,blue);
}

function getColorUSER(switcher) {
    if (switcher) {
        return '#26699c';
    }   else {
        return '#5187af'
    }
}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 210;
    var textRadius = 125;
    var insideRadius = 25;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,470,470);

    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 1;

    ctx.font = '12px Arial';

    let switcher = true;
    for(var i = 0; i < options.length; i++) {
        var angle = startAngle + i * arc;
    
        ctx.fillStyle = getColorUSER(switcher);
        switcher = !switcher;

        ctx.beginPath();
        ctx.arc(235, 235, outsideRadius, angle, angle + arc, false);
        ctx.arc(235, 235, insideRadius, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();

        ctx.save();
        ctx.fillStyle = "white";
        ctx.translate(235 + Math.cos(angle + arc / 2) * textRadius, 
                    235 + Math.sin(angle + arc / 2) * textRadius);
        ctx.rotate(angle + 0.2 + Math.PI / 0.5);
        var text = options[i];
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
    } 

    // Arrow
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(235 - 4, 235 - (outsideRadius + 5));
    ctx.lineTo(235 + 4, 235 - (outsideRadius + 5));
    ctx.lineTo(235 + 4, 235 - (outsideRadius - 5));
    ctx.lineTo(235 + 9, 235 - (outsideRadius - 5));
    ctx.lineTo(235 + 0, 235 - (outsideRadius - 13));
    ctx.lineTo(235 - 9, 235 - (outsideRadius - 5));
    ctx.lineTo(235 - 4, 235 - (outsideRadius - 5));
    ctx.lineTo(235 - 4, 235 - (outsideRadius + 5));
    ctx.fill();
  }
}

function spin() {
    document.querySelector('.roulette__spin').style.display = 'none';
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 30);
}

function finishRoulette(result) {
    document.querySelector('.roulette__result').textContent = result + ' !';
    document.querySelector('.roulette__footer').classList.add("visible");
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  // ctx.font = 'bold 12px Helvetica, Arial';
  var text = options[index]

  finishRoulette(text);
 
  // ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();