require('dotenv').config({
	path: process.env.NODE_ENV === 'production' ? '.env' : 'dev.env'
});

const express = require('express');
const app = express();
			app.listen(process.env.port, process.env.ip, () => console.log(`[Nodejs] the jokes are at ${process.env.ip}:${process.env.port}!!!`));

app.get('/', (req, res) => {
  res.send('Try /joke for a dadjoke or /joke/devz for a normal joke!');
});


 app.get('/joke/devz', async (req, res) => {
const reqa = require('@aero/centra');
const joke =  await reqa('https://official-joke-api.appspot.com/random_joke').json();
  //res.writeHead(200, {'Content-Type': 'text/plain'});
 res.send(`📢 ${joke.setup} ${joke.punchline}`);
})
app.get('/joke', async (req, res) => {
const reqa = require('@aero/centra');
const joke =  await reqa('https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,racist,sexist,explicit&type=single').json();
 res.send(`📢 ${joke.joke}`)
})

app.get('/shut',(req, res) => {
  res.send('shutting down')
   Promise.all(this.client.providers.map(provider => provider.shutdown()));
                process.exit();
})
