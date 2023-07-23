<div align="center">

# Markdown Links

<a title="JavaScript" href="https://developer.mozilla.org/es/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></a>
<a title="Node" href="https://nodejs.org/es/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"></a>
<a title="Jest" href="https://jestjs.io/"><img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"></a>

En este proyecto se desarrolló una herramienta de línea de comando (CLI) y librería instalable que permite la búsqueda y análisis de links dentro de archivos markdown  (extensión .md) .

[Presentacion](#presentacion) •
[Instalación](#instalacion) •
[Diagrama de Flujo](#diagrama-de-flujo) •
[Tutorial de uso](#tutorial) •
[Contribuidora](#contribuidora) •
[Acknowledgments](#acknowledgments)

</div>

<a name='presentacion'></a>
# Presentación

Herramienta de línea de comando (CLI) y librería instalable para correr en cualquier consola.

Esta aplicación le permite al usuario buscar solo los archivos tipo markdown dentro de una ruta específica y extraer los links contenidos en cada archivo.

La aplicación le permite al usuario  introducir las siguientes opciones:
 - --help: Le muestra al usuario las posibles opciones a escoger así como los resultados esperados
  - --validate: Para mostrar información concerniente al estado del link
  - --stats: Para mostrar estadísticas relacionadas con los links

<a name='instalacion'></a>
# Instalación

## Con Git
Digitar en la terminal:
npm install @agiraldomolina/DEV009-md-links

## Con npm
Digitar en la terminal:
npm i mdlinks-ang

# Diagrama de Flujo

<a name='tutorial'></a>
# Tutorial de uso

El ejecutable de esta aplicación se puede correr de la siguiente manera en cualquier terminal:
md-links <path-to-file> [options]
El usuario tiene las siguientes opciones:

## md-links
Si el usuario solamente escribe el nombre de la plicación recibirá un mensaje indicándole que puede invocar un menú de ayuda:



![Alt text](https://drive.google.com/drive/folders/1KuZyWoKtpxdlrhbdrXQXBDmqTsS7YKw7)

## md-links --help
Agregando la opcón --help se imprimen en pantalla las diferentes opciones disponibles así como los resultados esperados según cada opción:

![Alt text](https://drive.google.com/file/d/1u6-nojaAAkVOEultuMsBINZACpFb4q3q/view?usp=drive_link)

## md-links <path>
Al dar una ruta se pueden presentar diferentes situaciones:
 - Que el path corresponda directamente a un archivo tipo markdown; en este caso la aplicación lee el archivo y extrae  los links. En pantalla se imprimirá el listado de los links encontrados con su información básica. En el siguiente ejemplo escibimos el nombre del archivo test2.md y obtenemos el siguiente resultado:

 ![Alt text](https://drive.google.com/file/d/1zLD0MIWxcMhCrjCYM16loL6e5ik42EMj/view?usp=drive_link)

  - Que el path corresponda a un directorio el cual a su vez puede contener otros directorios y/o directamnete archivos markdown. En este caso la aplicación cuenta con un algoritmo recursivo que se encarga de buscar todos los archivos markdown que se encuentren en directorios  y carpetas; por ejemplo podemos tener el siguiente esquema de directorio:

  ![Alt text](https://drive.google.com/file/d/1EFB0zv780-3IEIe6RRWJKzwAoiQB4muB/view?usp=drive_link)

  En este caso podríamos escribir la siguiente linea de comando y obtener estos resultados:

![Alt text](https://drive.google.com/file/d/1CyKNojH07ir93ktVcbaVEJ7paDSXZnUg/view?usp=drive_link)

En la captura de pantalla no se alcanzan a ver todos los links encontrados, pero el listado corresponde a todods los links encontrados en carpetas y subcarpetas.





 


# Contribuidora

Alba Nubia Giraldo Molina

