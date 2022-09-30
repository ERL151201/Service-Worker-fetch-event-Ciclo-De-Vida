// Ciclo de vida del SW

self.addEventListener('install', event => {
    //Descargar assets 
    //Creamos un cache

    console.log('SW: Instalando SW');

    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SW:Instalaciones terminadas');
            self.skipWaiting();
            resolve();


        }, 1000);


    });



    event.waitUntil(instalacion);



});

//Cuando el SW toma el control de la aplicacion

self.addEventListener('activate', event => {

    //Borrar cache viejo
    console.log('SW2: Activo y listo para controlar la app');
});