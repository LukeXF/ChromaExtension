var servers;
var ip = new Array();
var label = new Array();

function createPage () {
	$('tbody').html("");
	for (var i = 0; i < servers; i++) {
		$('tbody').append(
			'<tr>'
            /*+ '<td class="action"><a href="#" type="button" id="remove' + i + '" class="btn btn-primary">&#10006;</button></td>'*/
			+ '<td><input type="text" class="form-control" id="name' + i + '" value="' + label[i] + '" placeholder="Server Name" readonly></td>'
            + '<td><input type="password" class="form-control" id="ip' + i + '" value="' + ip[i] + '" placeholder="Server IP" readonly></td>'
            + '</tr>');
	}
}

function loadSettings () {
	servers = localStorage['servers'];
	if (!servers || servers == 0) {
		servers = 5;
	}

	for (var i = 0; i < servers; i++) {
		label[i] = localStorage['label' + i];
		if (!label[i]) {
			label[i] = 'Factions';
		}

		ip[i] = localStorage['ip' + i];
		if (!ip[i]) {
			ip[i] = '192.99.148.159:25599';
		}
	}

	for (var i = 1; i < servers; i++) {
		label[i] = localStorage['label' + i];
		if (!label[i]) {
			label[i] = 'Creative';
		}

		ip[i] = localStorage['ip' + i];
		if (!ip[i]) {
			ip[i] = '198.27.104.253:25565';
		}
	}

	for (var i = 2; i < servers; i++) {
		label[i] = localStorage['label' + i];
		if (!label[i]) {
			label[i] = 'KitPvP';
		}

		ip[i] = localStorage['ip' + i];
		if (!ip[i]) {
			ip[i] = '192.99.47.45:25565';
		}
	}

	for (var i = 3; i < servers; i++) {
		label[i] = localStorage['label' + i];
		if (!label[i]) {
			label[i] = 'Survival Island - Coming Soon';
		}

		ip[i] = localStorage['ip' + i];
		if (!ip[i]) {
			ip[i] = '192.99.160.108:29999';
		}
	}

	for (var i = 4; i < servers; i++) {
		label[i] = localStorage['label' + i];
		if (!label[i]) {
			label[i] = 'Hub';
		}

		ip[i] = localStorage['ip' + i];
		if (!ip[i]) {
			ip[i] = '198.27.104.254:25565';
		}
	}

}

/*function addServer() {
	servers++;

	$('tbody').append(
		'<tr>'
        //+ '<td class="action"><a href="#" type="button" id="remove' + (servers-1) + '" class="btn btn-primary">&#10006;</button></td>'
		+ '<td><input type="text" class="form-control" id="name' + (servers-1) + '" value="" placeholder="My Server"></td>'
        + '<td><input type="text" class="form-control" id="ip' + (servers-1) + '" value="" placeholder="192.99.148.154:25565"></td>'
        + '</tr>');
}*/

/*function removeServer(id) {
	var s = parseInt(id.replace("remove",""));
	var k = 0;

	for (var i = 0; i < servers; i++) {
		if (i == s) {
			label[i] = label[k + 1];
			ip[i] = ip[k + 1];
			k += 2;
		} else {
			label[i] = label[k];
			ip[i] = ip[k];
			k++;
		}
	}
	servers--;

	createPage();
}*/
/*window.onload=function(){
	localStorage['servers'] = servers;

	for(var i = 0; i < servers; i++) {
		localStorage['label' + i] = $('#name' + i).val();
		localStorage['ip' + i] = $('#ip' + i).val();
	}

	$('#saved').html('Succesfully saved!');
	setTimeout(function() {
		$('#saved').html('');
	}, 2000);
	chrome.extension.sendMessage({restart: true});

	loadSettings();
	createPage();
}*/

function save() {
	localStorage['servers'] = servers;

	for(var i = 0; i < servers; i++) {
		localStorage['label' + i] = $('#name' + i).val();
		localStorage['ip' + i] = $('#ip' + i).val();
	}

	$('#saved').html('Succesfully saved!');
	setTimeout(function() {
		$('#saved').html('');
	}, 2000);
	chrome.extension.sendMessage({restart: true});

	loadSettings();
	createPage();
}

$(document).ready(function() {
	loadSettings();
	createPage();

	$(document).delegate('a', 'click', function(){
		var id = $(this).attr('id');

		if (id.indexOf('add') != -1) {
			addServer();
			return false;
		} else if (id.indexOf('save') != -1) {
			save();
			return false;
		} /*else if (id.indexOf('remove') != -1) {
			removeServer(id);
			return false;
		}*/
	});
});