// Initialize and add the map
function initMap() {
    // Create a map centered at a specific location (latitude and longitude)
    var map = new MapmyIndia.Map('map', {
        center: [20, 0],
        zoomControl: true,
        hybrid: true
    });

    // Add a marker when the user clicks on the map
    map.on('click', function (e) {
        addMarker(e.latlng, map);
    });
}

// Add a marker at the clicked location
function addMarker(location, map) {
    MapmyIndia.marker({
        position: location,
        map: map
    }).addTo(map);
}

// Call the initMap function when the page loads
window.onload = initMap;
