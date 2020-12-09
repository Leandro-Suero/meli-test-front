# Test Practico - Frontend - Leandro Suero

## INDEX
1. [SCRIPTS](#1.-SCRIPTS)
2. [COMO USAR](#2.-COMO-USAR)
3. [SUPUESTOS](#3.-SUPUESTOS)
4. [EXTRAS](#4.-EXTRAS)
5. [DEMOS ONLINE](#5.-DEMOS-ONLINE)

## 1. SCRIPTS
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.\

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\

[^ *regresar al índice*](#INDEX)

---

## 2. COMO USAR

Para utilizar el proyecto de frontend (este mismo) deberías:
- Crear y configurar tu archivo ".env", se incluye un archivo ".env.example" como ejemplo con el endpoint local y el de la demo hosteada.
- Luego para utilizar la app.
  - "npm start" para modo de desarrollo.
  - "npm run build" para generar la app de producción.

Para ejecutar el proyecto de backend ([Repositorio GitHub NodeJS](https://github.com/Leandro-Suero/meli-test-back)) deberías seguir las instrucciones de su readme, pero son muy similares a éstas.

[^ *regresar al índice*](#INDEX)

---

## 3. SUPUESTOS
Supuestos que utilicé para avanzar rápidamente con el desarrollo, sin necesidad de feedback (fin de semana largo).
- No es necesario generar diferentes "branch".
- El precio devuelto por la API de Meli debe ser dividido en dos partes, por un lado la parte entera y por otro la decimal, ambas como enteros. La parte decimal es 0 por defecto, en caso de un precio original sin decimales.
- En la vista de Detalle de Producto la imagen que se muestra debe ser la primera del arreglo de imágenes que se obtiene de la API de Meli en lugar del Thumbnail que es usado en la vista de Resultados de Búsqueda. Debe ser solamente una ya que la documentación solicita "picture" en singular.
- En la vista de Resultados de Búsqueda para mostrar la Breadcrumbs utilizo el arreglo de categorias que no tiene otro uso. Limito la cantidad de categorías a ser utilizadas como Breadcrumbs a 5 ya que algunas veces son demasiadas.
- En la vista de Detalle de Producto no tengo información para colocar como Breadcrumbs, sin embargo es solicitado en las especificaciones de diseño. Una opción podría ser traer con la API el "category_id" que refiere al "/categories/{category_id}" en la API de Meli para sacar información del "path_from_root" y de esa forma poder construir un Breadcrumbs. Sin embargo, tendría que ir en contra de la documentación de la API solicitada, por lo tanto muestro unas Breadcrumbs con información ficticia, a fin de cumplir con el diseño.
- Las Breadcrumb no tienen claramente definido el color, parece ser #999999, pero ese contraste no pasa el control de accesibilidad, por lo tanto use el #666666 para los links y dejé el otro para solamente los ">"
- En el listado de productos, columna derecha, aparece la ciudad donde se vende el producto, pero en la documentación de la API que se solicitó no se encuentra dicho dato {results[0].seller_address.city.name}, por lo tanto para cumplir con el diseño muestro otro dato en ese lugar {condition}.
- En la pantalla de Detalle del Producto no queda claro si se debe mostrar el icono de "free_shipping", para ser consistente con la vista de Resultados de Búsqueda decidí colocarlo en ambas.

[^ *regresar al índice*](#INDEX)

---

## 4. EXTRAS
- Se presentan las pruebas unitarias de los componentes en su propia carpeta, realizando un mock de la API en caso de ser necesario.
- Se presenta un test end-to-end desde el home hasta llegar al boton de "Comprar" de un producto en la vista de detalle de producto. Se encuentra en la carpeta src/tests. Este utiliza la API realizada en NodeJS.
- Se presentan componentes para cumplimentar la funcionalidad normal del sitio, como ser NotFound, mensaje cuando no hay resultados de busqueda, errores, etc.
- Se ha dividido el blunde y se cargan lazy las vistas de Resultados de Busqueda, Detalle de Producto y Not Found.
- Se actualiza automáticamente la metadata de acuerdo a la sección actual.
- Para reducir la duplicidad de código y facilitar el mantenimiento se crearon librerias en la carpeta "src/libs", así como un custom hook en "src/hooks".

[^ *regresar al índice*](#INDEX)

---

## 5. DEMOS ONLINE
- [Ver DEMO ONLINE del FRONTEND React](https://meli-test-front.netlify.app/)
- [Ver DEMO ONLINE del BACKEND NodeJS](https://meli-test-back.herokuapp.com/api)

[^ *regresar al índice*](#INDEX)