const express=require('express');
const bodyparser=require('body-parser');

PORT=3000;
const ApiRoutes=require('./routes/index')
const CityRepository=require('./repository/city-repository');
const cityRepository = require('./repository/city-repository');

const setupandstartserver=async()=>{
    const app=express();
    app.use(bodyparser.json);
    app.use(bodyparser.urlencoded({extended: true}));
    app.use('/api',ApiRoutes);

    
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        const repo=new cityRepository();
        
    })
}
setupandstartserver();