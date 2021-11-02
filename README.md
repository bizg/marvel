# Marvel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Structure

The aplication is divide in 3 folders
- Core: Services/Components that apps needs and can't work without
- Shared: Services/Components that are usin in all the app but they aren't so important for the functionality of the app
- Feature: Modules of the app

## About the app

The app have a central module that containt two columns:
  - Characters: they are all the characteres that the api of marve give us
  - Favorites: they are all the comics that the user can to choose for your list of favorites

Functionalities of the app:
  - Choose comics favorites
  - View the detail about the character
  - View the detail about the comic 
  - View all comic that has a character
  - Viwe all "my favorites" comics
  - Search a character in specific
  - Add random comics to favorite
  - Delete favorites

------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------

## Estructura

La aplicacion esta divida en 3 carpetas:
- Core: la encargada de contener todos los servicios y/o componentes que son indispensables para la aplicacion (son necesarios para que la aplicacion fucnione)
- Shared: se encarga de contener todos los servicios y/o componentes que se utilizan globalmente en la aplicacion, esto no son indispensables para la aplicacion
- Feature: contiene todos los modulos de la aplicacion

La aplicacion esta contratuida con Lazy Loading para evitar la carga perezosa de modulos de angular.
La aplicacion cuenta son encarpetamientos amigables para evitar que las importaciones sean demasiado largas, esta configuración se encuentra en el tsconfig.json.
Cuenta con un changelog.md donde estan cada uno de los cambios realizados en la aplicacion a medida que se fue desarrollando.
La aplicación cuenta con una persistencia de datos para que al ingresar nuevamente no se pierdan los datos que fueron almacenados (los comics favoritos agregados).

## Sobre la aplicación

La aplicación esta diseñada con un modulo inicial (Home), donde se divide en dos partes:
- Los cards de los personajes, donde se puede ver el detalle de cada uno de ellos.
- La sección de favoritos donde estan todos los comic seleccionado como favoritos.

Algunas de las funcionalidades con las que cuenta la aplicación son:
- Agregar comics a la lista de favoritos.
- Eliminar comics de la lista de favoritos.
- Ver el detalle de un comic.
- Ver el detalle de un personaje.
- Ver todos los comic asociados a un personaje.
- Ver toda la lista de favoritos.
- Buscar personajes en especifico.
- Crear 3 favoritos de manera aletoria.
