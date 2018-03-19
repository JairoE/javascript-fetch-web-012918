const app = "I don't do much.";
const token = '58874f5e3fa382c3103b49027de116068d053776'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
