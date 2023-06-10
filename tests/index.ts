import Client from '../lib/client/client';

const client = new Client({
    xsrfToken: process.env.XSRF_TOKEN as string,
    cookie: process.env.COOKIE as string
});


console.log(client.channels.entries());

client.login(process.env.TOKEN as string);