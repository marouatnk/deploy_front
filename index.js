fetch('http://grp6.360medics.com:8080/',{
  mode:'cors', method:'GET', headers: {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'content-type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  'Accept': 'application/json'},}).then(response => response.json()).then(data => {
    let container = document.getElementById("main")
    let title =  document.createElement('h1')
    title.textContent = data.message
    container.appendChild(title)
  })

