## Versión de Angular utilizada

Este proyecto fue Generado con [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Instalación

- Iniciar consola de GitBash en la carpeta donde deseamos alojar el proyecto y procedemos a clonar el Repositorio, con el siguiente comando:
 git clone https://github.com/NicoFranzese/ConsumoAPI_Ng2SmartTable.git

- Una vez clonado el repositorio, ingresamos a la carpeta del proyecto que nos clonó, ejecutamos git bash y corremos el comando para instalar paquetes del proyecto:
npm install

- Cuando tengamos todos los paquetes instalados, corremos el comando "ng serve", cuando el comando finalice ir al navegador y dirigirse a la URL http://localhost:4200/ para comenzar a utilizar el sistema.


## Funcionalidad
El Proyecto trae 10 Entidades de una API consumida. De esas Entidades podemos elegir 1 o más (Mediante el botón "+" que se encuentra a la derecha de cada entidad), a medida que las vamos eligiendo se irán cargando en una tabla de la secció Inferior.

![image](https://user-images.githubusercontent.com/21281615/160301720-fd850f23-4862-4a6d-95af-3b450b7b8989.png)

En la tabla donde se encuentran las Entidades seleccionadas, podemos editar o eliminarlas a gusto. (estas modificaciones son a nivel Front)

![image](https://user-images.githubusercontent.com/21281615/160301875-baf80b91-5df9-439b-bb43-8e962c27fde0.png)


Contamos con filtros por Columnas. (En el ejemplo de la siguiente imagen se filtra por la columna "Nombre")

![image](https://user-images.githubusercontent.com/21281615/160301928-9b08544f-4be7-4b31-8fab-6e1bb87e6209.png)

También con un ordenamientos, si clickeamos sobre el titulo de la columna a ordenar nos ordena de manera descendente, y si volvemos a clickear de manera ascendente. (En el ejemplo de la siguiente imagen se ordena de manera descendente por la columna "Mail Contacto")

![image](https://user-images.githubusercontent.com/21281615/160302011-6d3a5cae-b0f4-47ac-bbcb-ceb9fa043487.png)

