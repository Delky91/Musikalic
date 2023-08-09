# Musikalic

Aplicación de música que permite escuchar demos de tus canciones y artistas favoritos.

Visítala en [Netlify](https://musikalic.netlify.app/).

## Descripción

Esta página está desarrollada con React.js y funciona gracias a la API de Shazam, que nos permite obtener demos de 1:30 minutos en su versión gratuita. Además, posee geolocalización para mostrarte la música más escuchada en tu país según Shazam.

Características:

- Barra de búsqueda: busca a tus artistas favoritos para poder escuchar lo que desees.
- Top de las canciones del momento a nivel mundial.
- Top de artistas a nivel mundial.
- Geolocalización: obtén recomendaciones basadas en tu país.
- Paginación: solo 10 resultados a la vez serán cargados para un mejor manejo y experiencia.
- Filtra con la barra por géneros musicales.
- Descubre las 50 canciones más escuchadas a nivel mundial.

## Visuales

Vista principal de la página:

![Vista principal](/src/assets/index.png)

Descubre canciones según tu país de residencia:

![Geolocalización](/src/assets/Geo.png)

Los artistas más escuchados a nivel mundial:

![Top de Artistas](/src/assets/TopArtist.png)

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local con fines de desarrollo y pruebas.

### Prerrequisitos 📋

- Sistema operativo: Se recomienda Windows 10 u 11, macOS 10.10 o Ubuntu 16 para obtener la mejor compatibilidad y rendimiento.
- Hardware: Se necesitan al menos 4 GB de RAM y 10 GB de espacio de almacenamiento para ejecutar React y sus herramientas asociadas sin problemas.
- Un navegador web y acceso a Internet.
- [Node.js](https://nodejs.org/es/download/)
- npm o yarn

## Configuración

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Delky91/Musikalic
   ```

2. Change directory to the project directory

   ```bash
   cd Musikalic
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

Si recibes un error, verifica la consola para obtener más información.

Si no recibes un error, estás listo para comenzar el desarrollo.

4. Run the app

   ```bash
   npm run dev
   ```

   El proyecto se ejecutará en el navegador.

Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.


## Construido Con 🛠️


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
- Información sobre los artistas (actualmente es una función de pago en la API).
- Crear listas de reproducción.

## Versionado 📌

Use [Git](https://git-scm.com) para el versionado.

## Autores ✒️

- **Luis Miño Bustos** Encuéntrame en [github](https://github.com/Delky91)
