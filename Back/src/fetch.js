//Andres Mosquera Alvarado

//Este archivo permite la lectura y creación de un archivo que contenga toda la 
//información de la api FUT21 con su ejecución

const fetch = require('node-fetch');
const url = 'https://www.easports.com/fifa/ultimate-team/api/fut/item?page=1';

fetch(url)
.then(response => response.json())
.then( data => {
    const items = JSON.stringify(data);
    var fs = require('fs');
    fs.writeFile("thing.json", items, (err, result)=>{
        if(err) console.log('error', err);
    });
    console.log()
    
})
.catch(err=>console.log(err));


