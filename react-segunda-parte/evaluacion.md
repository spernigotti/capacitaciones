## Evaluación de capacitación React segunda parte

Crear un proyecto utilizando create-react-app para la resolución de los ejercicios.

1. Definir el componente Store, el cual va a renderizar los datos de una sucursal. El componente recibe como propiedades nombre, dirección, horario y teléfono.  
#### Ejemplo:

```js
<Store
	name="Walmart Supermercado Honorio Pueyrredón"
	address="Honorio Pueyrredón 652, Caballito"
	phone="0810-444-9256"
	schedule="Todos los días de 8 a 22 hs."
/>
```
&nbsp;

2. Utilizar el siguiente json para renderizar una lista de sucursales. [stores.json](https://github.com/spernigotti/capacitaciones/tree/master/react-segunda-parte/stores.json)
&nbsp;

3. Dentro del componente Store, renderizar condicionalmente una cucarda que indique si la sucursal cuenta con retiro en tienda. Este dato proviene de la propiedad storePickup dentro del json.
&nbsp;

4. Definir el componente City que represente un botón de selección de ciudad. Este componente debe filtrar por ciudad las sucursales.  
Para simplificar el ejercicio hardcodear las tres ciudades que figuran en el json (Ciudad Autonoma de Buenos Aires, Córdoba y Mendoza).  
#### Ejemplo:
```js
<City name="Ciudad Autonoma de Buenos Aires" onClick={this.handleFilterCity} />
<City name="Mendoza" onClick={this.handleFilterCity} />
<City name="Córdoba" onClick={this.handleFilterCity} />
```
