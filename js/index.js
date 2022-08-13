document.querySelectorAll('.instrument__img')[0].addEventListener('click', function(){
	playAudio('bell_01');
});

document.querySelectorAll('.instrument__img')[1].addEventListener('click', function(){
	playAudio('door_close_01');
});

function playAudio (audioFile) {
	let audio = new Audio(`../audio/${audioFile}.ogg`);
	audio.play();
}