import {Client} from "@heroiclabs/nakama-js"

var email = 'client1@gmail.com';
var password = 'abc@1234';

async function main() {
	let client = new Client("defaultkey", "nakama", 7350);
	let session = await client.authenticateEmail(email, password, true);
}

main();