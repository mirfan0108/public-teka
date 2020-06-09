import axios from 'axios'
const ENV = process.env.BASE_API

class Content {
    static getConstruction() {
        return axios.get(`${ENV}/public/construction`)
    }

    static getBanner(lang) {
        return axios.get(`${ENV}/public/banner/${lang}`)
    }
}

export default Content