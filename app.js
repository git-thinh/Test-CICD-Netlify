const URL_CALLBACK = 'http://localhost:12345/outh-callback';
const CLIENT_ID = 'lUfL6jTbcalTAbA8QXE_6cJAyN7kT9AVaITmff86e54';
let ACCESS_TOKEN = '';

import open from 'open'
import {
	NetlifyAPI
} from 'netlify'

(async function() {
	ACCESS_TOKEN = 'qXB0KWz4AhHLey5mO_a5Qka0cYseOKzkOYiMgjdyr0Q';
	const client = new NetlifyAPI(ACCESS_TOKEN);

	//const sites = await client.listSites();
	//console.log('sites = ', sites);


	// [2]
	//const client = new NetlifyAPI(ACCESS_TOKEN)	
	// const ticket = await client.createTicket({
	// 	clientId: CLIENT_ID
	// })
	// await open(`https://app.netlify.com/authorize?response_type=ticket&ticket=${ticket.id}`)
	// ACCESS_TOKEN = await client.getAccessToken(ticket)	
	// console.log('TOKEN = ', ACCESS_TOKEN);

})()

// import express from 'express'
// const app = express()

// app.get('/outh-callback', async (req, res) => {
// 	console.log('access_token = ', req.hash);
// 	console.log('url = ', req);

// 	res.contentType('text/plain');
// 	res.send('OAuth: OK = .......');
// });

// app.get('/token', async (req, res) => {
// 	// const client = new NetlifyAPI(ACCESS_TOKEN)

// 	// const ticket = await client.createTicket({
// 	// 	clientId: CLIENT_ID
// 	// })
// 	// await open(`https://app.netlify.com/authorize?response_type=ticket&ticket=${ticket.id}`)
// 	// ACCESS_TOKEN = await client.getAccessToken(ticket)

// 	// res.contentType('text/plain');
// 	// res.send('TOKEN = ' + ACCESS_TOKEN);

// 	const url = 'https://app.netlify.com/authorize?' +
// 		'client_id=' + CLIENT_ID +
// 		'&response_type=token' +
// 		'&redirect_uri=' + URL_CALLBACK +
// 		'&state=1';
// 	res.redirect(url);
// });

// app.get('*', async (req, res) => {
// 	res.contentType('text/plain');
// 	res.send('Index');
// });

// app.listen(12345, '127.0.0.1', () => console.log(`\n\t\t http://127.0.0.1:12345 \n\n`));
