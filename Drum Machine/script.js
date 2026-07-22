const drumPads = document.querySelectorAll('.drum-pad');

drumPads.forEach(function(pad){
  pad.addEventListener('click',function(){
    pad.querySelector('.clip').play();
    document.getElementById('display').textContent = pad.id;
  });
});

document.addEventListener('keydown', function(event) {
  let key = event.key.toUpperCase();
  let audio = document.getElementById(key);
  if(!audio) return;
  audio.play();
  document.getElementById('display').textContent = audio.parentElement.id;
});