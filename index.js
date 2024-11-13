// const port = 5010;
// const { log } = require('console');
// const { readFileSync } = require('fs');
// const http = require('http');
// const { parse } = require('querystring');
// const server = new http.Server
// const icon = readFileSync('favicon.ico')
// const users = [{login: 'admin', password: '123'}]

// server.listen(port, () => {
//     log('http://localhost:' + port)
// })


// server.addListener('request', handleRequest)


// async function handleRequest(request, response) {
//     log(request.method, request.url)

//     if (request.method == 'POST') {
//         const body = await getBody(request);
//         const payload = parse(body)
//         users.push(payload)
//         log(payload)
//     }

//     if (request.url == '/favicon.ico') {
//         response.setHeader('Content-Type', 'image/x-icon')
//         response.end(icon)
//     }
//     else {
//         const html = readFileSync('index.html')
//         response.setHeader('Content-Type', 'text/html')
//         response.end(renderUsers(html))
//     }

// }

// async function getBody(request) {
//     let body = ''
//     for await (const chunk of request) body += chunk
//     return body
// }

// function renderUsers(html) {
//     return html.toString().replace('{users}', users.map((user) => `<li>${user.login}</li>`).join(''))
// }
async function getUsers(names) {
    let jobs = [];

    for (let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`)
        .then(Response => {return Response.json()});
        jobs.push(job);
    }

    let results = await Promise.all(jobs);

    return results;
}