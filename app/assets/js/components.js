jQuery(document).ready(function () {
  $('#info-data').addClass('hide');
  $('#twitter').addClass('hide');
  jQuery('#vmap').vectorMap({
    map: 'world_en',
    backgroundColor: '#333333',
    color: '#fffff',
    hoverOpacity: 0.7,
    selectedColor: '#666666',
    enableZoom: true,
    showTooltip: true,
    scaleColors: ['#006491', '#C8EEFF'],
    values: sample_data,
    normalizeFunction: 'polynomial',
    onRegionClick: function(element, code, region) {
        $('#info-data').removeClass('hide');
        console.log(document.querySelector('#info-data'));

        var message = region + ': '
            + code.toUpperCase();
          var data = $('.data');
          $('.data').removeClass('hide');
          var message = present.filter(function(item) {
            return item.sigla.toLowerCase() === code.toLowerCase();
          })[0].text;
          sendMessage(message);
          $('#twitter').removeClass('hide');
          getTwitts(region);
      }
  });
});
function sendMessage(message) {
  var data = document.querySelectorAll('.data')
  data.forEach(function(d) {
    d.innerHTML = message
  })
}
