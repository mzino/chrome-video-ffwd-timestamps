window.onload = setTimeout(loadData, 500);

function loadData(){
	$("ytd-playlist-video-renderer.style-scope.ytd-playlist-video-list-renderer").each(function(){
		var tempovero = $(this).children('#content').children().children().children().children('#overlays').children().children().text();
		var hoursShown = parseInt((tempovero.match(/:/g) || []).length);
		if (hoursShown > 1){
			var hours = parseInt(tempovero.substr(0, tempovero.indexOf(':')));
			var minutes = parseInt(tempovero.substr(tempovero.indexOf(':')+1, 2));
			var seconds = parseInt(tempovero.substr(tempovero.indexOf(':')+4, 2));
			var initialSeconds = hours*3600+minutes*60+seconds;
			var finalSeconds = (initialSeconds/1.75)/60;
			// var timestampHours = ;
			var timestampMinutes = Math.floor(finalSeconds);
			var timestampSeconds = Math.round((finalSeconds-timestampMinutes)*60);
			if (timestampSeconds < 10) {
				timestampSeconds = '0'+timestampSeconds;
			}
			$(this).children('#content').children().children('#meta').children().children('#video-title').prepend('['+timestampMinutes+':'+timestampSeconds+'] ');
		} else {
			var minutes = parseInt(tempovero.substr(0, tempovero.indexOf(':')));
			var seconds = parseInt(tempovero.substr(tempovero.indexOf(':')+1, 2));
			var initialSeconds = minutes*60+seconds;
			var finalSeconds = (initialSeconds/1.75)/60;
			var timestampMinutes = Math.floor(finalSeconds);
			var timestampSeconds = Math.round((finalSeconds-timestampMinutes)*60);
			if (timestampSeconds < 10) {
				timestampSeconds = '0'+timestampSeconds;
			}
			$(this).children('#content').children().children('#meta').children().children('#video-title').prepend('['+timestampMinutes+':'+timestampSeconds+'] ');
		}
	});
}
