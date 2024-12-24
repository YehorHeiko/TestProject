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
// function isTidy(num) {
//   let f = [] /// A
//   for (let i = 0; i < num.length; i++) {
//     f.push(num[i])      

//     }

//     console.log(f);
//   }
//   isTidy('ASD')


// const robot = {
//   aiStaff: []
// };
// const robot2 = {
//   id: 1,
//   currentWorkPlace: Odessa,
// };

const wish = [
  { id: 118, firstName: 'Jan', lastName: 'Rycke' },
  { id: 101, firstName: 'Lee', lastName: 'Haverbeke' },
  { id: 114, firstName: 'Clara', lastName: 'Aernoudts' },
  { id: 201, firstName: 'Anna', lastName: 'Bernardus' },
 ];

wish.sort((a, b) => console.log(a, b));
