<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Descripción del Proyecto
Proyecto construído desde cero, donde se aprendió a conocer el comportamiento de cada una de sus piezas, como se relacionan entre sí, que son: controladores, providers, módulos, pipes, middlewares, inyección de dependencias.

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener NEST CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar a __.env__

6. Llenar las variables de entorno definidas en el archivo __.env__

7. Ejecutar la aplicación en desarrollo:
```
yarn start:dev
```

8. Recargar la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

## Stack
* MongoDB
* Nest
* 