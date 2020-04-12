module.exports = () => {
	// Get youtube ID from URL
	const getYoutubeID = (e) => {
		var url = $(e).attr("data-url");

		if (url !== undefined) {
			var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
			var match = url.match(regExp);
			if (match && match[7].length == 11) {
				return match[7];
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	// This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[3];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.
	var player;

	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player', {
			height: '390',
			width: '640',
			videoId: 'M7lc1UVf-VE',
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
		event.target.playVideo();
	}

	// 5. The API calls this function when the player's state changes.
	//    The function indicates that when playing a video (state=1),
	//    the player should play for six seconds and then stop.
	var done = false;

	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING && !done) {
			setTimeout(stopVideo, 6000);
			done = true;
		}
	}

	function stopVideo() {
		player.stopVideo();
	}
}