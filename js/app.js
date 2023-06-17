const tableBody = document.getElementById('gitHubUserTableBody')
const loadings = document.getElementById('Loading')
const box = document.getElementById('box')
const xMArk = document.querySelector('.fa-x')

const handleRenderTable = (data) => {
    data.forEach(element => {
        tableBody.style.cursor = 'pointer'
        tableBody.style.textAlign = 'center'
            tableBody.innerHTML += `
            <tr>
                <td class = "id">${element.id}</td>      
                <td class = "login">${element.login}</td> 
                <td class = "type">${element.type}</td>
                <td><a href ="${element.followers_url}"> Followers </td>
            </tr>
            `
             const login = document.querySelector('.login')
            login.addEventListener('click',function () {
                box.style.display = 'block'
            })
            xMArk.addEventListener('click',function () {
                xMArk.style.transform = 'rotate 180deg'
                 setTimeout(() => {
                    box.style.display = 'none'
                 },1000) 
            })
            // box.innerHTML = `${element.login} ${element.id} ${element.type}`
            

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