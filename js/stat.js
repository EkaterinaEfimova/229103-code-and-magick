'use strict'
//Создание облака с тенью и информации по игрокам
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_TEXT_X = 140;
var CLOUD_TEXT_Y = 40;
var CLOUD_TEXT_GAP = 15;
var GAMER_X = 140;
var GAMER_NAME_Y = 270;

var GAMER_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var barY = CLOUD_TEXT_Y + CLOUD_TEXT_GAP * 2;

var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


//нахождение максимального элемента
	var getMaxElement = function(arr) {
		var maxElement = arr[0];

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > maxElement) {
			maxElement = arr[i];
    }
  }
  
  return maxElement;
};


window.renderStatistics = function(ctx, players, times) {
//отрисовка облака
	renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, 100, 10, '#fff');

// отрисовка заголовка
	ctx.fillStyle = '#000';
	ctx.font = '16px PT Mono';
	ctx.fillText('Ура вы победили!', CLOUD_TEXT_X, CLOUD_TEXT_Y);
	ctx.fillText('Список результатов:', CLOUD_TEXT_X, CLOUD_TEXT_Y + CLOUD_TEXT_GAP);



//отрисовка гистограммы
	var maxTime = getMaxElement(times);


	for (var i = 0; i < players.length; i++) {
//   MAX_BAR_HEIGHT    BAR[I]
// ---------------- = --------
//  BAR_HEIGHT           X

// X = (BAR[I] * BAR_HEIGHT) / MAX_BAR_HEIGHT

		var barHeight = (BAR_HEIGHT * times[i] / maxTime);

		if (players[i] === 'Вы') {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		} else {
			ctx.fillStyle = 'rgba(0,0,255,' + Math.random() + ')';
		}

		ctx.fillRect(GAMER_X  + (BAR_WIDTH + GAMER_GAP) * i, barY + (BAR_HEIGHT - barHeight) + CLOUD_TEXT_GAP + CLOUD_TEXT_GAP, BAR_WIDTH, barHeight);
		ctx.fillStyle = '#000';
		ctx.fillText(players[i], GAMER_X  + (BAR_WIDTH + GAMER_GAP) * i, GAMER_NAME_Y);
		ctx.fillText(Math.round(times[i]), GAMER_X  + (BAR_WIDTH + GAMER_GAP) * i, barY + (BAR_HEIGHT - barHeight) + CLOUD_TEXT_GAP);
  	}

};

