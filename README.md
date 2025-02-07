# SCE-CEQIATEC

### Requisitios previos
-SQL Server
-Node Js

### Ejecución
El sistema está compuesto por tres proyectos: base de datos, API y Frontend.
Los proyectos son dependientes entre sí, por lo que el orden al ejecutarlos es importante y debe ser el siguiente:

#### 1. Base de datos
Restaure la base de datos desde el archivo *SCE-CEQIATEC.bak* provisto en la carpeta *data-layer*.

#### 2. API
Dentro de la carpeta *API* en el archivo *db-settings.js* cambie los credenciales de conexión por los de su servidor de bases de datos.
En una terminal ubiquese en la carpeta *API*, ejecute el comando *npm install* para installar las dependencias y luego *npm run dev* para ejecutar el proyecto.

#### 3. Frontend
En una terminal ubiquese en la carpeta *front-end/sce-client*, de la misma forma ejecute el comando *npm install* para instalar las dependencias y luego *npm start* para lanzar el proeyecto.
