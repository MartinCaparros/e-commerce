import makeRequest from '../wcInstance'

export const services = {
    getAll : () => {
        return makeRequest('/products', 'GET')
    },
    getallPaginated : (limit) => {
        return makeRequest(`/products`, 'GET')
    }
}