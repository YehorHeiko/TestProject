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

const actions = [
  {
    type: 'addProperties', // додавання властивостей
    extraData: { // властивості, які слід додати до стану
      key1: 'value1',
      key2: 'value2',
    },
  },
  {
    type: 'removeProperties', // видалення властивостей
    keysToRemove: ['key1', 'key2'], // ключі, які слід видалити зі стану
  },
  {
    type: 'clear', // стан має стати порожнім після виконання цієї дії
  },
];
const state = { foo: 'bar', bar: 'foo' };

function transformState(state, actions) {
  for (let key of Object.keys(actions)) {
    let st = actions[key];    
      for (let [key, value] of Object.entries(st)) {
        if (value == 'addProperties') {
          for (let [key, value] of Object.entries(st.extraData)) {
            state[key] = value;
          }
        }
        else if (value == 'removeProperties') {
          for (let i = 0; i < st.keysToRemove.length; i++) {
            delete state[st.keysToRemove[i]];
          }
          
        }
      }
  }
}

transformState(state, actions);

Object.values

