import axios from 'axios'
const ENV = process.env.BASE_API

class Product {
    static getProduct(page = 1, limit = 12, construction = '', color = '', categories = '', width = null) {
        let query = `?color=${color}&width=${width}`
        return axios.get(`${ENV}/public/products${query}`)
    }

}

export default Product