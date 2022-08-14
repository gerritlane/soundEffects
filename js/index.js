const audioFileList = [
	'bell_01',
	'door_close_01',
	'glass_04',
	'metal_05',
	'spring_02'
];

// Map audio to key presses. Can be WASD123 etc
let audioKeyMap = {
	'1': 'bell_01',
	'2': 'door_close_01',
	'3': 'glass_04',
	'4': 'metal_05',
	'5': 'spring_02'
}

// Add audio on-click to instrument divs
for(let i = 0; i < audioFileList.length; i++) {
	document.querySelectorAll('div .instrument')[i].addEventListener('click', function(){
		playAudio(`${audioFileList[i]}`);
	});
}

// Add audio on keydown to body mapped to the listed key
document.querySelector('body').addEventListener('keydown', function(e) {
		if (e.key in audioKeyMap) {
			playAudio(`${audioKeyMap[e.key]}`);
		}
});

function playAudio (audioFile) {
	let audio = new Audio(`../audio/${audioFile}.ogg`);
	audio.play();
}