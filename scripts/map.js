function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 53.908978, lng: 27.522993 },
		zoom: 16
	});

	var marker = new google.maps.Marker({
		position: { lat: 53.908978, lng: 27.522993 },
		map: map
	});
}

