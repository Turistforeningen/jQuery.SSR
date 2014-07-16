var map, marker;

map = L.map('map', {
  center: [65, 12],
  zoom: 5,
  layers: [
    L.tileLayer('http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo2&zoom={z}&x={x}&y={y}', {
        attribution: 'Kartverket'
    })
  ]
});

var set_map_marker = function(sted) {
  if (marker && marker.ssr_id === sted.id) { return; }

  if (sted.nord && sted.aust) {
    var latlng = new L.LatLng(sted.nord, sted.aust);

    if (marker) {
      marker.setLatLng(latlng);
    } else {
      marker = L.marker(latlng).addTo(map);
    }

    marker.ssr_id = sted.id;
    marker.bindPopup(
      '<strong>' + sted.stedsnavn + '</strong><br>' +
      '<small>' + sted.navnetype + ' in ' + sted.kommunenavn + ' in ' + sted.fylkesnavn + '</small>'
    );
    map.setView(latlng, 9, {reset: true});
    marker.openPopup()
  }
}

$('#search').select2({
  placeholder: 'Search all the things in Norway',
  minimumInputLength: 2,
  formatResult: function(obj) {
    return '<label>' + obj.stedsnavn + '</label><br>'
         + '<small>' + obj.navnetype + ' in ' + obj.kommunenavn + ' in ' + obj.fylkesnavn + '</small>';
  },
  query: function(options) {
    var res = []

    $.fn.SSR(options.term).done(function(data) {
      res = data.stedsnavn;
    }).always(function() {
      for (var i = 0; i < res.length; i++) {
        res[i].id = res[i].ssrId;
        res[i].text = res[i].stedsnavn;
      }
      options.callback({ results: res, more: false });
    });
  }
}).on('change', function(e) {
  if (e.added) { set_map_marker(e.added); }

}).on('select2-highlight', function(e) {
  // if (e.choice) { set_map_marker(e.choice); }

});

