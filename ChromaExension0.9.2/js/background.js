var ip;
var timer;

function loadExtension () {
	if (!ip) {
		ip = '192.99.148.159:25565';
	}

	checkState();
}

function checkState () {
	$.get('https://aron.li/mss/ping.php?ip=' + ip, function(data) {
		if (data.max != null) {
			chrome.browserAction.setBadgeBackgroundColor({ color: [122, 186, 122, 255] });
			chrome.browserAction.setIcon({path: 'images/BLACKICON.png'});
			chrome.browserAction.setBadgeText({text: '' + data.online});
		} else {
			chrome.browserAction.setIcon({path: 'images/down.png'});
			chrome.browserAction.setBadgeText({text: 'OFF' });
			hrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
		}
	});

	timer = setTimeout(checkState, 1000*60);
}

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    switch (true) {
        case request.restart:
		timer = null;
		loadExtension();
		break;
    }
    return true;
});

$(document).ready(function() {
	loadExtension();
});