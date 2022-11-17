import makeRequest from '../wcInstance'

export const services = {
    getAll : () => {
        return makeRequest('/products', 'GET')
    },
    getAllPaginated : (limit) => {
        return makeRequest(`/products?per_page=${limit}`, 'GET')
    },
    getOne : id => {
        return makeRequest(`products/${id}`, 'GET')
    }
}