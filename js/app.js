const tableBody = document.getElementById('gitHubUserTableBody')
const loadings = document.getElementById('Loading')


const handleRenderTable = (data) => {
    data.forEach(element => {
        tableBody.style.cursor = 'pointer'
        tableBody.style.textAlign = 'center'
            tableBody.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td class = "login">${element.login}</td>
                <td class = "type">${element.type}</td>
                <td><a href ="${element.followers_url}"> Followers </td>
            </tr>
            `
    });
}

class ServiceAPI {
    constructor (domain) {
            this.domain = domain
    }
   async get() {
    try {
        const response =  await fetch(this.domain);
        const data = response.json();
        return data;
    }
    catch (data) {
        console.log(data)
    }
        
}
}

const gitAPI = new ServiceAPI( 'https://api.github.com/users'); //
gitAPI.get()
.then((data) => {
    setTimeout (() => {
        handleRenderTable(data)
        loadings.style.display = 'none'
    },1500)
    
})
const randomuserAPI = new ServiceAPI('https://randomuser.me/api/')