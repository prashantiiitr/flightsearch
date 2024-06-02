const {City} =require('../models/index');
class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
            
        }catch(error){
            console.log("Something went wrong in repository layer");
            throw(error);

        }
    }
    async deleteCity(Cityid){
        try{
            await City.destroy({
                where:{
                    id :Cityid
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in repository layer");

            throw(error);
        }
    }
    async updateCity(Cityid,data){
        try {
            const city=City.update(data,{
                where:{
                    id:Cityid
                }
            });
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw(error);
            
            
        }

        }

    async getCity(){
        try{
            const city=await City.findOne();
            return city;

        }catch(error){
            console.log("Something went wrong in repository layer");
            throw(error);

        }
    }
}
module.exports=  CityRepository;
