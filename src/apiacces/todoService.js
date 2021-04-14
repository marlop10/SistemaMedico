import Service from './Service'



export default {
    get(){
        return Service.get();
    },
    create(data){
        return Service.post(data);
    },
    actualizar(data,id){
        return Service.patch(data,id)
    },
    delete(id){
        return Service.delete(id)
    }
}