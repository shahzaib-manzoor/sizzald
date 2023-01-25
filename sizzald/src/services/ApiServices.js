import AxiosServices from "./AxiosServices";
 

const ApiServices = {
    get: (url) => {
        return AxiosServices.get(url);
    },
    post: (url, data) => {
        console.log(url,data)
        return AxiosServices.post(url, data);
    },
    put: (url, data) => {
        return AxiosServices.put(url, data);
    },
    delete: (url) => {
        return AxiosServices.delete(url);
    },
    
    // Auth
    login: (data) => {
        return AxiosServices.post(`${VITE_API_URL}/login`, data);
    }


}

export default ApiServices;
