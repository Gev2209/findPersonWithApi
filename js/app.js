import {randomuserAPI} from './fetchService.js';
import { usersTableBody,modal,closeButton } from './helpers.js';

// users table functional

( async () => {
    const {results,info} = await randomuserAPI.get('?results=10')
    results.forEach(element => {
        const {id,name,location} = element;

        usersTableBody.innerHTML += `
            <tr class = "${id.name}">
                <td>${name.first} ${name.last}</td>
                <td>${location.country}</td>
            </tr>        
        `
    });
})();

( async () => {
    usersTableBody.addEventListener('click',(event) => {
        modal.style.display = 'block'
        const tr = event.target.parentNode;
        const userID = tr.getAttribute('class')
        
    })
})();

closeButton.addEventListener('click',() => {
    modal.style.display = 'none'
});
