    var ip2 = "192.99.148.159:25565";


	$.getJSON("http://minecraft-api.com/v1/get/?server=" + ip2,
    function(data){
	        if (data.status) {
	            var text =(data.players.online + "/" + data.players.max + " Online.");
                $("#texthere").append(text);
	        } else {
	            var text =("Unable to Connect.");
                $("#texthere").append(text);
	        }
	    });

