const{CityRepository}=require('../repository/index');
class Cityservice{
    constructor(){
        this.CityRepository=new CityRepository();

    }
    async createCity(data){
        try {
            const city=await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something Went Wrong at Service Layer");
            throw(error);
            
        }
    }
    async deleteCity(Cityid){
        try {
            const response=await this.CityRepository.deleteCity(Cityid);
            return response;
        } catch (error) {
            console.log("Something Went Wrong at Service Layer");
            throw(error);
            
        }
    }
    async updateCity(Cityid,data){
        try {
            const city=await this.CityRepository.updateCity(Cityid,data);
            return city;
        } catch (error) {
            console.log("Something Went Wrong at Service Layer");
            throw(error);
            
        }
    }
    async getCity(Cityid){
        try {
            const city=await this.CityRepository.getCity(Cityid);
            return city;
        } catch (error) {
            console.log("Something Went Wrong at Service Layer");
            throw(error);
            
        }
    }
}
module.exports=Cityservice;