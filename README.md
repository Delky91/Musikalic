# Musikalic

Aplicación de música que permite escuchar demos de tus canciones y artitas favoritos

Visitala en [netify](https://musikalic.netlify.app/)

## Descripción

Esta pagina esta desarrollada con react js y funciona gracias a la API de shazam que nos permite obtener demos de 1:30 min en su version gratuita, ademas posee geolocalizacion para poder mostrarte la música más escuchada en tu pais segun Shazam.

Caracteristicas:

- Barra de busqueda, busca a tus artitas favoritas para poder escuchar lo que desees.
- Top de las canciones del momento a nivel mundial.
- Top de artistas a nivel mundial.
- Geolocalización, obten recomndaciones basadas en tu país.
- Paginación solo 10 tweets a la vez seran cargados para mejor manejo y mejor experiencia
- Filtra con la barra por generos musicales.
- Descubre las 50 canciones más escuchadas a nivel mundial.

## Visuales

Vista principal de la pagina.

![vista principal](/src/assets/index.png)

Descubre canción según tu pais de residencia:

![vista editar](/src/assets/Geo.png)

Los artistas más escuchados a nivel mundial:

![paginación](/src/assets/TopArtist.png)

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos 📋

- Sistema operativo: Se recomienda Windows 10 u 11, macOS 10.10 o Ubuntu 16 para obtener la mejor compatibilidad y rendimiento.
- Hardware: Se necesitan al menos 4 GB de RAM y 10 GB de espacio de almacenamiento para ejecutar React y sus herramientas asociadas sin problemas.
- Un navegador web y acceso a Internet
- [Node.js](https://nodejs.org/en/download/)
- npm o yarn

## Setup

1. Clona el repositorio.

   ```bash
   git clone https://github.com/Delky91/Musikalic
   ```

2. Change directory to the project directory

   ```bash
   cd Musikalic
   ```

3. Install the dependencies

   ```bash
   npm install
   ```

   If you get an error, please check the console for more information.

   If you don't get an error, you are ready to start development.

4. Run the app

   ```bash
   npm run dev
   ```

   Project will be running in the browser.

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Construido Con 🛠️

Explica qué tecnologías usaste para construir este proyecto. Aquí algunos ejemplos:

- [ReactJS](https://react.dev/)
- [Node](https://nodejs.org/en/download/)
- [Shazam API](https://rapidapi.com/apidojo/api/shazam)
- [TailswindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [API Geolocalización](ttps://geo.ipify.org)

## Soporte

Si tienes algún problema o sugerencia, por favor abre un problema [aquí](https://github.com/Delky91/musikalic/issues).

## Roadmap

- Sistema de usuarios.
- Información sobre los artistas (actualmente es un feature de pago en la API).
- Crear listas de reproduciones.

## Versionado 📌

Use [Git](https://git-scm.com) para el versionado.

## Autores ✒️

- **Luis Miño Bustos** encuentrame en [github](https://github.com/Delky91)
