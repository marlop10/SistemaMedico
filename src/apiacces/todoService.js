import Service from './Service'


const resource = 'citas/citas/'

export default {
    get(){
        return Service.get(resource);
    },
    post(data){
        return Service.post(resource,data);
    },
    patch(data,id){
        return Service.patch(resource,data,id)
    },
    delete(id){
        return Service.delete(resource,id)
    }
}