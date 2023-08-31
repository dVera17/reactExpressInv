# Investigación

## CORS

CORS significa "Cross-Origin Resource Sharing" (Intercambio de Recursos de Origen Cruzado).
Es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador. En otras palabras, es una medida de seguridad implementada en los navegadores web para controlar las solicitudes de recursos (como archivos, datos, etc.) que se realizan desde un dominio o origen web hacia otro dominio u origen.

- CORS es un mecanismo que permite a los servidores definir qué dominios externos están autorizados a acceder a sus recursos, lo que mejora la seguridad de las aplicaciones web al prevenir solicitudes no autorizadas desde otros orígenes.

CORS establece reglas específicas que permiten a los servidores controlar qué dominios tienen permitido acceder a sus recursos y cómo se deben manejar las solicitudes entre orígenes. Esto se logra mediante el uso de encabezados HTTP que el navegador y el servidor intercambian durante la comunicación. Si el servidor no responde adecuadamente con los encabezados CORS correctos, el navegador bloqueará la solicitud y no permitirá que la página acceda al recurso solicitado.

## Ciclo de vida de un componente

En React.js los componentes que no sean puros (todos los que se crean mediante clases o React.createClass) poseen algo conocido como el ciclo de vida. los ciclos de vida son una serie de métodos que se invocan en diferentes etapas de la vida de un componente.

Los ciclos de vida se dividen en tres fases principales: Montaje, Actualización, Desmontaje

### Montaje

Estos métodos se llaman cuando se crea una instancia de un componente y se inserta en el DOM. Los metodos de montaje se invocan en el siguiente orden

- **`constructor(props)`**: El constructor se ejecuta antes de que el componente de clase se monte (se agregue a la pantalla).Normalmente, en React se utiliza el constructor únicamente para dos propósitos. Te permite declarar el estado y enlazar los métodos de la clase con la instancia de la clase:

    ```JS
    class Counter extends Component {
        constructor(props) {
            super(props);
            this.state = { counter: 0 };
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            // ...
        }
    }
    ```

Si usas la sintaxis moderna de JavaScript, rara vez se necesitan constructores. En su lugar, puedes reescribir este código usando la 
sintaxis de campo de clase pública que es compatible tanto con navegadores modernos como con herramientas como Babel:

    ```JS
    class Counter extends Component {
        state = { counter: 0 };

        handleClick = () => {
            // ...
        }
    }
    ```

        - parametros: 
            1. props: Las props iniciales del componente.

- **`getDerivedStateFromProps()`:** Este método se invoca después de que se hayan establecido las props del componente. Se puede utilizar para actualizar el estado del componente en función de las props.

```JS
static getDerivedStateFromProps(props, state)
```

Si defines static `getDerivedStateFromProps`, React lo llamará justo antes de llamar a render, tanto en el montaje inicial como en actualizaciones posteriores. Debería devolver un objeto para actualizar el estado, o null para no actualizar nada.

Este método existe para casos de uso raros donde el estado depende de los cambios en las propiedades con el tiempo. Por ejemplo, este componente Form reinicia el estado email cuando cambia la propiedad userID:

```JS
class Form extends Component {
  state = {
    email: this.props.defaultEmail,
    prevUserID: this.props.userID
  };

  static getDerivedStateFromProps(props, state) {
    // Cada vez que el usuario actual cambia,
    // Reinicia cualquier parte del estado que esté ligada a ese usuario.
    // En este ejemplo simple, eso es sólo el correo electrónico.
    if (props.userID !== state.prevUserID) {
      return {
        prevUserID: props.userID,
        email: props.defaultEmail
      };
    }
    return null;
  }

  // ...
}
```

> Ten en cuenta que este patrón requiere que mantengas un valor anterior de la propiedad (como userID) en el estado (como prevUserID).

        - parametros: 
            1. `props`: Las próximas props que el componente está a punto de renderizar.
            2. `state`: El próximo estado que el componente está a punto de renderizar.
        
        - Devuelve: `static getDerivedStateFromProps` devuelve un objeto para actualizar el estado, o null para no actualizar nada.

- **`render()`:** Esta API se eliminará en una futura versión mayor de React.

En React 18, render fue reemplazado por createRoot. Al usar render en React 18 se te advertirá que tu aplicación se comportará como si estuviera ejecutándose en React 17. Aprende más aquí.

render renderiza una pieza de JSX («nodo de React») en un nodo del DOM del navegador.

- **`componentDidMount()`**: Si defines el método componentDidMount, React lo llamará cuando tu componente se agregue por primera vez (se monte) en la pantalla. Este es un lugar común para comenzar la obtención de datos, configurar suscripciones o manipular los nodos del DOM.

```JS
componentDidMount()
```

Si implementas `componentDidMount`, generalmente debes implementar otros métodos del ciclo de vida para evitar errores. Por ejemplo, si `componentDidMount` lee algún estado o propiedades, también debes implementar `componentDidUpdate` para manejar sus cambios, y `componentWillUnmount` para limpiar lo que componentDidMount estaba haciendo.


### Puedes usar este diagrama de ciclo de vida como una hoja de referencia

[![Diagrama_ciclos_de_vida](assets\ciclosDeVidaMetodos.png)](assets\ciclosDeVidaMetodos.png)