const CLIENT_ID = 'lUfL6jTbcalTAbA8QXE_6cJAyN7kT9AVaITmff86e54';
let ACCESS_TOKEN = '';

function getSite() {
	fetch('https://api.netlify.com/api/v1/sites', {
		headers: {
			'Authorization': 'Bearer ' + ACCESS_TOKEN
		}
	}).then((response) => {
		response.json().then((json) => {
			console.log('SITES = ', json);
		});
	}).catch((error) => {
		console.log(`SITE_ERROR: fetching sites: ${error}`);
	});
}

function init() {
	let hash = location.hash || '';
	if (hash.length === 0) {
		const state = Math.random();
		const redirectURI = location.protocol + '//' + location.host;
		const url = 'https://app.netlify.com/authorize?' +
			'client_id=' + CLIENT_ID +
			'&response_type=token' +
			'&redirect_uri=' + redirectURI +
			'&state=' + state;
		location.href = url;
	} else {
		if (hash.startsWith('#access_token=')) {
			hash = hash.substr('#access_token='.length).split('&')[0];
			ACCESS_TOKEN = hash;
			console.log('ACCESS_TOKEN = ', ACCESS_TOKEN);
			getSite();
		}
	}
}
window.onload = init;
