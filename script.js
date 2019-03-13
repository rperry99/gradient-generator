$(function() {
  $('.jscolor').change(updateGradient);
  updateGradient();
});

function updateGradient() {
  let gradientBody = `linear-gradient(to right, ${$('#color1').val()}, ${$(
    '#color2'
  ).val()})`;
}
