const audioFileList = [
	'bell_01',
	'door_close_01',
];

for(let i = 0; i < audioFileList.length; i++) {
	document.querySelectorAll('.instrument__img')[i].addEventListener('click', function(){
		playAudio(`${audioFileList[i]}`);
	});
}

function playAudio (audioFile) {
	let audio = new Audio(`../audio/${audioFile}.ogg`);
	audio.play();
}