import {Client} from "@heroiclabs/nakama-js"
import {XMLHttpRequest} from 'xmlhttprequest'
import fetch from 'node-fetch'

global.XMLHttpRequest = XMLHttpRequest
global.fetch = fetch

var email = 'client1@gmail.com';
var password = 'abc@1234';

async function main() {
	let client = new Client("defaultkey", "nakama", 7350);
	let session = await client.authenticateEmail(email, password, true);
	let account = await client.getAccount(session);
	console.info(account);
}

main();