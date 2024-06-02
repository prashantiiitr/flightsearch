const express=require('express');
const bodyparser=require('body-parser');

const {PORT}=require('./config/serverconfig');
const CityRepository=require('./repository/city-repository');
const cityRepository = require('./repository/city-repository');

const setupandstartserver=async()=>{
    const app=express();
    app.use(bodyparser.json);
    app.use(bodyparser.urlencoded({extended: true}));

    PORT=3000;
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        const repo=new cityRepository();
        repo.createCity({name:"NEW DELHI"});
    })
}
setupandstartserver();