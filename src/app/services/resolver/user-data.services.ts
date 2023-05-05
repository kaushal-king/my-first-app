export class userdataSercive{
    getUser(id:string){
        if(id==='1'){
            return{
                id:'1',
                name:'kaushal'
            }
        }else{
            return{
                id:'2',
                name:'vivek'
            }
        }
    }
}