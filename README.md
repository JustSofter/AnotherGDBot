# AnotherGDBot
Un bot de Discord que se contacta con los servidores de Geometry Dash o servidores privados del mismo juego, hecho en Node.JS

## Creación de Bot en Discord

Primero que todo, debes crear un bot en Discord, para esto ve a [Discord Developer Portal](https://www.discord.com/developers)

Después de esto, creas una aplicación y la seleccionas, ahora tendrías que ir a la sección de Bot, Crear bot, y aceptas. 
Te dejará copiar un token el cual será necesario para que funcione el bot, entonces puedes ir a OAuth2 y seleccionas la casilla de bot, y copias el enlace, de ahí autorizas a qué servidor invitas el bot y ya estaría creado el bot.

# Configuración.

Para configurar el bot, tendrás que instalar [Node.JS](https://nodejs.org/es)

Entonces, tendrás que ir al archivo settings.json con un editor de código. (El archivo está dentro de la carpeta config)

Después, verás lo siguiente en el archivo.

```
{
  "token": "tu-token-va-aca",
  "prefix": "-",
  "gdserver": "http://www.boomlings.com/database",
  "google_api_key": "tu-key-de-api-de-yt-va-aca"
}
```

Primero, pones tu token en donde dice "tu-token-va-aca"

Después, seleccionas tu prefijo.

Si quieres cambiar de servidor del de GD Normal, modifica el GDServer, solo necesitarás la URL.

Y la Google API Key es la Key V3 de la API de YouTube (Esto debido a perfil.js, el cual tiene soporte a buscar las fotos de perfil de YouTube de los usuarios que tengan su cuenta de YouTube vinculada con Geometry Dash.)

Después de esto, tendrás que instalar los siguientes paquetes de NPM:

- [Axios](https://npmjs.com/package/axios)

- [Discord.JS](https://npmjs.com/package/discord.js)

- [glob](https://npmjs.com/package/glob)

- [util](https://npmjs.com/package/util)

- [GD.JS](https://npmjs.com/package/gd.js)

O simplemente correr el siguiente comando en la línea de comandos.
```
npm install
```

Una vez ya terminado el proceso, podrás correr el siguiente comando en la línea de comandos
```
node index.js
```
PD: Esto es dentro de la carpeta del bot, exactamente en la que está el index.js

## Programador del bot.

- Softer.#3299
