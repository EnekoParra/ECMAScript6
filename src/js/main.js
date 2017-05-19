window.onload = function () {
    //comenzamos
    var x = 5;
    console.log("variable x = " + x);
    const COUNTRY = 'bilbao';
    const API_ID_OPEN_WEATHER = '4ee841cfbd26ba9d323591e315799f67'
        //http://api.openweathermap.org/data/2.5/weather?q=bilbao&appid=4ee841cfbd26ba9d323591e315799f67
    var promesa = ajaxGet(`http://api.openweathermap.org/data/2.5/weather?q=${COUNTRY}&appid=${API_ID_OPEN_WEATHER}`);
    promesa.then(function (data) {
            console.info('%o ', data)
            let weatherJSON = JSON.parse(data);
            let widget = document.getElementById('widget-bilbao');
            widget.querySelector('h1').innerHTML = (parseInt(weatherJSON.main.temp - 273) + "º");
            widget.querySelector('p').innerHTML = weatherJSON.name;
        })
        //crear dos Orcos y que saluden
    var orco1 = new Orco();
    orco1.saluda();
    var orco2 = new Orco('Tomasin');
    orco2.saluda();
    //llamada a  la funcion de promesa
    hacerAlgoPromesa().then = () => {
        console.info('Terminada Ejecucion :-) ');
    };
    hacerAlgoPromesa(13).then(function () {
        console.info('Terminada Ejecucion :-) ')
    }).catch(function () {
        console.info('Ejecución con ERROR timeout 7 seg');
    });
};
///////////////////////////////////////////////////
//Variables nuevas
///////////////////////////////////////////////////
const PI = 3.14;
const PERSONA = {
    id: '01'
    , name: 'David'
};

function funcion_let(nombre) {
    console.log(miVar);
    if (true) {
        let _miVar = `Hola ${nombre}`;
    }
    console.log(miVar);
};
///////////////////////////////////////////////////
// METODO PARA REALIZAR UNA LLAMADA AJAX POR GET
///////////////////////////////////////////////////
function ajaxGet(url) {
    return new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            }
            else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error("Network error"));
        };
        req.send();
    });
}
//export default { ajaxGet };
///////////////////////////////////////////////////
// Clases
///////////////////////////////////////////////////
class Orco {
    constructor(nombre = "Anorg") {
        this.nombre = nombre;
    }
    saluda() {
        console.info(`Mi nombre es ${this.nombre}`);
    }
}
///////////////////////////////////////////////////
// Arrow
///////////////////////////////////////////////////
function lista_compra() {
    const lista = ["pizza", "cerveza", "condornices"];
    lista.forEach(elemento => {
        console.log(elemento);
    });
}
///////////////////////////////////////////////////
// Promesas
///////////////////////////////////////////////////
function hacerAlgoPromesa(parametro) {
    function haciendoalgo(resolve, reject) {
        console.log('hacer algo que ocupa un tiempo...');
        if (parametro == 13) {
            setTimeout(reject, 7000);
        }
        else {
            setTimeout(resolve, 4000);
        }
    }
    return new Promise(haciendoalgo);
}

function cerrar() {
    console.log('Cerrar Widget');
    let widget = document.getElementById('widget-bilbao');
    widget.style.animation = 'disappear 1s';
    setInterval(() => {
        widget.remove();
    }, 1000);
};
