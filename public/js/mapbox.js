/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZWxsaXRiIiwiYSI6ImNsczBidGcxMzAwdXcydnA2eDRsY2ZxMGUifQ.w_2FcW40NYjFn0FAyiABvQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ellitb/cls0c4mkw00fp01phgsle9d8b',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 4,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    //   Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} ${loc.description}</p>`)
      .addTo(map);
    // Extends map bounds to include current location coordinates
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
