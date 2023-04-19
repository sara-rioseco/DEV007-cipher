# Top Secret

## Índice

* [1. Definición](#1-definición)
* [2. Usuarios](#2-usuarios)
* [3. Interfaz](#3-interfaz)
* [4. Test](#4-test)

***

## 1. Definición

Top secret es una aplicación web para codificar y decodificar mensajes. Para esto, recibe dos inputs de parte del usuario, uno como texto, en formato de string y otro que es un número entero positivo que llamaremos _offset_. Luego el usuario tendrá dos opciones que se muestran en dos botones, uno para Codificar y otro para Decodificar. 

Lo que hace la codificación y decodificación es utilizar el Cifrado Cesar, uno de los métodos más sencillos para cifrar un mensaje. Consiste en sustituir cada letra de un texto por una que se encuentra un número definido de posiciones más adelante en el mismo alfabeto. Dentro de un mismo mensaje se utiliza el mismo número de desplazamiento. La decodificación funciona de la misma forma, pero la letra se sustituye por la que esté en el mismo número de desplazamiento hacia atrás en el alfabeto.

Por ejemplo, si usamos un _offset_ de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Para implementar este cifrado, se utilizó un algoritmo que utiliza el código ASCII decimal de cada letra para calcular la posición adecuada según el _offset_ ingresado por el usuario. También se restringió el input del texto para que solo acepte letras mayúsculas, minúsculas y espacios, mientras que el input del _offset_ solo aceptará números enteros positivos. 

El resultado se mostrará abajo de los botones de Codificar y Decodificar.

Prototipo del diseño original:

![Prototipo Proyecto](https://github.com/sara-rioseco/DEV007-cipher/blob/baa364241a961066a4d3050a58952b5fe24b3aed/src/img/Prototipo1.png?raw=true)

## 2. Usuarios

Los principales usuarios del producto son jóvenes con acceso a internet/smartphone que quieran compartir información con amig@s de manera privada. Se plantea esto a modo de juego para tener una conversación secreta con otros usuarios, por lo que más que resolver un problema se trata de una orma de entretenimiento y distensión.

## 3. Interfaz

La interfaz es simple y en tonos claros, el fondo intenta asemejar una hoja de papel y el logo es una especie de timbre, que tiene apariencia de ser parte de un documento confidencial, haciendo énfasis en lo secreto del mensaje que se codificará. Por lo mismo, se utilizó una fuente de tipo handwriting, simulando un mensaje que está siendo escrito por el usuario sobre el papel.

Diseño final:

![Diseño Final](https://github.com/sara-rioseco/DEV007-cipher/blob/main/src/img/Proyecto1.png?raw=true)

## 4. Test

Se ejecutaron pruebas unitarias con los siguientes resultados:

![Tests](https://github.com/sara-rioseco/DEV007-cipher/blob/main/src/img/Tests.JPG?raw=true)
