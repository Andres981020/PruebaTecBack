//Andres Mosquera Alvarado

//Se importa el modulo router del framework express para definir rutas
const { Router } = require('express');
const router = Router();

//Se guarda en una constante la conexion de la bd
const connection = require('./database');

//Se requieren los datos extraidos de la api FUT21
const data = require('./thing.json');

//Se genera una ruta adicional que ayuda a guardar los datos de la api en la bd
router.get('/datos-api', (req, res)=>{

    var items = data.items;

    res.json(data);
//Se crean variables para guardar la informacion adicional del dataset fuera de los jugadores  
    const page = data.page;
    const totalpages = data.totalPages;
    const total_items = data.count;

    const newFut = {
        page,
        totalpages,
        total_items
    };

//Se crea la consulta que permite la insercion de los datos adicionales
    connection.query('insert into fut set ?',[newFut]);

//Se hace un bucle que permite iterar los items (jugadores) y guardarlos
    for(var i=0; i<items.length; i++){

//Se crean las variables que guardan la info de los jugadores
        const nombre = items[i].name;
        const posicion = items[i].position;
        const nacionalidad = items[i].nation.name;
        const club = items[i].club.name;
        const page_jugador = data.page;

        const newJugador = {
            nombre,
            posicion,
            nacionalidad,
            club,
            page_jugador
        }

//Se crea la consulta que permite la inserción de los jugadores
        connection.query('insert into jugadores set ?',[newJugador])
    }


});

//Se crea la ruta que permite consultar los jugadores que pertenecen a 'x' equipo
//especificandolo en el body
router.post('/api/v1/team', async (req,res)=>{

    const { team } = req.body;

    connection.query('SELECT * FROM  jugadores where club = ?', [team], (error, rows, field)=>{
        if(!error){
            res.json(rows);
        }else{
            console.log(error);
        }
    });
});

//Se crea la ruta que permite buscar coincidencias parciales o completas en el nombre de los
//jugadores y ordenarlos de forma ascendente o descente especificandolo en la url
router.get('/api/v1/player/:nombre/:order',(req,res)=>{

    const { nombre, order } = req.params;

    if(order == "asc"){
        connection.query('select * from jugadores where nombre like ? order by nombre asc' ,['%'+nombre+'%'], (error, rows, fields)=>{
            if(!error){
                res.json(rows);
            }else{
                console.log(error);
            }
        })
    }
    else if(order == "desc"){
        connection.query('select * from jugadores where nombre like ? order by nombre desc' ,['%'+nombre+'%'], (error, rows, fields)=>{
            if(!error){
                res.json(rows);
            }else{
                console.log(error);
            }
        })
    }
})

//Se genera una ruta adicional para obtener las coincidencias sin especificar el orden de los
//resultados
router.get('/api/v1/player/:nombre',(req,res)=>{

    const { nombre } = req.params;

        connection.query('select * from jugadores where nombre like ? order by nombre asc' ,['%'+nombre+'%'], (error, rows, fields)=>{
            if(!error){
                res.json(rows);
            }else{
                console.log(error);
            }
        })

})

module.exports = router;