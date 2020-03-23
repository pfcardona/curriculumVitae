# curriculumVitae
Hoja de vida de Pablo Felipe Cardona , proyecto en REACT

Más información sobre las herramientas que vamos a utilizar:
React Hooks: https://reactjs.org/docs/hooks-intro.html
Styled Components: https://www.styled-components.com

Vamos a crear un repositorio en GitHub y vamos a sincronizarlo con nuestra computadora para compartirlo con toda la comunidad y tener el historial de características que vamos añadiendo a nuestro proyecto.
Para clonar el repositorio de Github en nuestra computadora debemos ejecutar el comando: git clone URL_DEL_PROYECTO
Para inicializar nuestro proyecto con NPM debemos ejecutar el comando: npm init -y

En este curso NO vamos a usar create-react-app, nosotros mismos vamos a crear la configuración de nuestro proyecto desde cero.
Vamos a crear las carpetas src/ y public/ para guardar nuestro código JavaScript y los archivos estáticos de nuestro proyecto como index.html, iconos, imágenes, entre otras.
El archivo src/index.js será el archivo principal de JavaScript donde vamos a importar el resto de componentes y contenedores de nuestra aplicación.
Vamos a crear nuestros componentes visuales en la carpeta src/components y los contenedores de estos componentes en la carpeta src/containers.
Todos nuestros componentes deben comenzar con una letra mayúscula a pesar de que los archivos sigan alguna otra convención.
Vamos a usar la versión 16.8.4 de React para tener disponibles los Hooks.
Para la instalación de React y ReactDOM usamos: npm install react react-dom --save
Recuerda que debemos añadir la carpeta node_modules al archivo .gitignore para no subirlos a Github ni a producción porque es una carpeta muy pesada y puede dañar nuestro proyecto.

Babel es una herramienta que nos ayuda a transpilar nuestro código con React y JavaScript moderno a código en JavaScript que pueden entender los navegadores.
Para configurar Babel debemos crear el archivo .babelrc, puedes descubrir todas las posibles configuraciones en: https://babeljs.io/docs/en/config-files
Instalación de Babel:

npm install
@babel/core @babel/preset-env @babel/preset-react babel-loader --save

npm install babel-plugin-class-properties --save-dev

(--save-dev se va a guardar como una dependencia  de desarrollo, solo  es utilizada para mi o en mi local para trabajar o compilar y no es necesaria para enviarse a producción)
__________________________________________
Webpack es una herramienta que nos puede ayudar a compilar todos nuestros archivos de JavaScript en un solo archivo o paquete que podemos usar en producción.
Vamos a escribir la configuración de Webpack en el archivo webpack.config.js, puedes aprender más sobre cómo configurar estos archivos en: https://webpack.js.org/configuration.
Instalación de Webpack: 
npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev

____________________________________

Vamos a usar Webpack Dev Server para crear un servidor local que nos permita visualizar los cambios de nuestro proyecto en tiempo real, es decir, sin recargar el navegador.

Debemos instalar las siguientes dependencias: npm install webpack-dev-server --save-dev
También, vamos a crear dos nuevos scripts en nuestro package.json: ""build"" para compilar nuestro proyecto (para producción) y ""start"" para iniciar un servidor con live reload en el puerto 8080 (para desarrollo).
""scripts"": {
    ""buid"": ""webpack --mode production"",
    ""start"": ""webpack-dev-server --open --mode development""
}
Para correr estos scripts debemos ejecutar el comando: npm run NOMBRE_DEL_SCRIPT
Puedes encontrar más información sobre Webpack Dev Server y Live Reload en: https://webpack.js.org/configuration/dev-server/


_______________________________________

Vamos a usar el custom hook que acabamos de crear, la función useGetData(), para reemplazar la información de prueba por los datos reales que obtenemos de nuestra API.


___________________________________________

Styled-components nos ayudan a crear nuestros estilos en componentes de React con JavaScript sin perder las características de CSS, de hecho, conseguimos algunos beneficios extra al juntar ambos lenguajes: CSS y JavaScript.
Instalación de styled-components: npm install styled-components --save

Más información sobre styled-components en: https://www.styled-components.com

___________________________________________________________

Travis CI es un servicio que nos ayuda a crear un script para hacer deploy de nuestro repositorio a un servidor en la nube, vamos a generar un nuevo commit en la rama master cada vez que nuestros cambios en la rama develop pasen las pruebas con la configuración de Travis en el archivo .travis.yml.