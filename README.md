# PaloYAdentro

## Datos de Entrega en Materia Aplicaciones Hibridas
 - Matias Leonardo Montechiari

## Features

- Aplicacion Web de vista de testimonios y carga de testimonios

## Installation

 - Clona el repo o descarga el archivo .zip
 - En la carpeta raiz de la descarga correr "npm run install"
 - Y para lanzarlo instalar el nodemon correr "npm install nodemon"
 - Para correr el server "npm run server"

## WEB

 - http://localhost:8080/ es el index abajo se muestran solo los testimonios publicos
 - http://localhost:8080/testimonio es el formulario de carga de testimonios

## API

 - GET en http://localhost:8080/api trae todos los testimonios cargados
 - PATCH en http://localhost:8080/api/617ef569f69a9d88abeac15e al con ID 617ef569f69a9d88abeac15e lo hace publico (tener en cuenta que para salir en el index el testimonio debe ser publico)
 - DELETE en http://localhost:8080/api/617ef569f69a9d88abeac15e al testimonio con ID 617ef569f69a9d88abeac15e lo elimina fisicamente
 - PUT http://localhost:8080/api/617ef569f69a9d88abeac15e al testimonio con ID 617ef569f69a9d88abeac15e enviando el body las propiedades del testimonio se le puede modificar   completamente o parcialmente como fuere necesario.
 - POST  http://localhost:8080/api da de alta un nuevo testimonio con las propiedades que se envien en el body

## Body Testimonios Ejemplo:
   {
    "nombre": "Taz Tetoro",
    "linkedin": "https://www.linkedin.com/in/juan-tetor/",
    "mensaje": "Una vuelta me tire para hacer una chilena y me rompi toda la espalda mis amigos se cagaban de risa eso si son amigos jajaja",
    "public": false
   }
