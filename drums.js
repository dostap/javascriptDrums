function playSound(e){
	//check numpad keys
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	//check regular number keys
	if(!audio){
		audio = document.querySelector(`audio[data-key2="${e.keyCode}"]`);
		key = document.querySelector(`.key[data-key2="${e.keyCode}"]`);
	}
	//some other key has been pressed?
	if(!audio){
		return; //stop the function
	}

	key.classList.add('playing');

	audio.currentTime = 0; //rewind to start
	audio.play();

	var text = key.getElementsByTagName('span')[0].innerHTML;
	var textTracker = document.getElementById('input_text').innerHTML;
	if(textTracker.length < 163) {
	document.getElementById('input_text').innerHTML += " " + text;
	} else {
		document.onkeydown = function() { return false };
		document.getElementById('restartBtn').classList.add('btnChange');
	}

	reset();
}

function reset(){
var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

	function removeTransition(e){
		if(e.propertyName !== 'transform') return;
		this.classList.remove('playing');
	}

}

window.addEventListener('keydown', playSound);

function restart(){
    document.getElementById('input_text').innerHTML = "";
	document.getElementById('restartBtn').classList.remove('btnChange');
}