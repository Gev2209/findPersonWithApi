import { API_USERS } from './constant.js';

class ServiceAPI {
    constructor (domain) {
            this.domain = domain
    }
   async get(queryData = '') {
    try {
        const response =  await fetch(`${this.domain}/${queryData}`);
        const data = response.json();
        return data;
    }
    catch (data) {
        console.log(data)
    }
        
}
}

const randomuserAPI = new ServiceAPI(API_USERS)

export {
    randomuserAPI
}