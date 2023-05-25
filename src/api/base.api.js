class BaseAPI {

    static makeRequest = async (url, method = 'GET', body = undefined) => {
        
    }

    static get(url) {
        return this.makeRequest(url, 'GET')
    }

}