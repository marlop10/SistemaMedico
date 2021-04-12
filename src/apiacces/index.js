import axios from "axios";
import store from '../store'

const ApiA = class ApiAccess {
    constructor(url,token){
        this.urlBase = url
        this.token = token
        // this.token = store.getters.docode
        this.options = {
            headers: {
                'Authorization': 'Token ' + this.token
            }
        }
    }
    set tokendata(token){
        this.token = token
    }
    apiGet(endpoint){
        let url = `${this.urlBase}${endpoint}`
        try{
            return axios.get(url,this.options)
        } catch(err){
            console.log(err)
        }
    }
    apiGetId(endpoint,id){
        let url = `${this.urlBase}${endpoint}${id}/`
        try{
            return axios.get(url,this.options)
        } catch(err){
            console.log(err)
        }
    }
    apiPatch(endpoint,obj,id){
        var url = `${this.urlBase}${endpoint}${id}/`
        try{
            return axios.patch(url,obj,this.options)
        } catch(err){
            console.log(err)
        }
    }
    apiPost(endpoint,obj){
        var url = `${this.urlBase}${endpoint}`
        try{
            return axios.post(url,obj,this.options)
        } catch(err){
            console.log(err)
        }
    }
    apiDelete(endpoint,id){
        var url = `${this.urlBase}${endpoint}${id}/`
        try{
            return axios.delete(url,this.options)
        } catch(err){
            console.log(err)
        }
    }
}
export { ApiA }