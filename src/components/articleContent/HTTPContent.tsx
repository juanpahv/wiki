export default function HTTPContent (){
    return (
        <>
            <h2>HTTP</h2>
            <h2>¿QUÉ ES?</h2>
            <p style={{textAlign: "justify"}}>HTTP, de sus siglas en inglés: "Hypertext Transfer Protocol", es el nombre de un protocolo el cual nos
                permite realizar una petición de datos y recursos, como pueden ser documentos HTML. Es la base de
                cualquier
                intercambio de datos en la Web, y un protocolo de estructura cliente-servidor, esto quiere decir que una
                petición de datos es iniciada por el elemento que recibirá los datos (el cliente), normalmente un
                navegador
                Web. Así, una página web completa resulta de la unión de distintos sub-documentos recibidos, como, por
                ejemplo: un documento que especifique el estilo de maquetación de la página web (CSS), el texto, las
                imágenes, vídeos, scripts, etc...
            </p>
            <br/>
            <h2>CARACTERÍSTICAS</h2>
            <h3>HTTP es sencillo</h3>
            <p style={{textAlign: "justify"}}>Incluso con el incremento de complejidad, que se produjo en el desarrollo de la versión del protocolo
                HTTP/2,
                en la que se encapsularon los mensajes, HTTP esta pensado y desarrollado para ser leído y fácilmente
                interpretado por las personas, haciendo de esta manera más facil la depuración de errores, y reduciendo
                la
                curva de aprendizaje para las personan que empieza a trabajar con él.
            </p>
            <h3>HTTP es extensible</h3>
            <p style={{textAlign: "justify"}}>Presentadas en la versión HTTP/1.0, las cabeceras de HTTP, han hecho que este protocolo sea fácil de
                ampliar
                y de experimentar con él. Funcionalidades nuevas pueden desarrollarse, sin más que un cliente y su
                servidor,
                comprendan la misma semántica sobre las cabeceras de HTTP.
            </p>
            <h3>HTTP es un protocolo con sesiones, pero sin estados</h3>
            <p style={{textAlign: "justify"}}>HTTP es un protocolo sin estado, es decir: no guarda ningún dato entre dos peticiones en la mísma sesión.
                Esto crea problemáticas, en caso de que los usuarios requieran interactuar con determinadas páginas Web
                de
                forma ordenada y coherente, por ejemplo, para el uso de "cestas de la compra" en páginas que utilizan en
                comercio electrónico. Pero, mientras HTTP ciertamente es un protocolo sin estado, el uso de HTTP
                cookies, si
                permite guardar datos con respecto a la sesión de comunicación. Usando la capacidad de ampliación del
                protocolo HTTP, las cookies permiten crear un contexto común para cada sesión de comunicación.
            </p>
            <h3>HTTP y conexiones</h3>
            <p style={{textAlign: "justify"}}>Una conexión se gestiona al nivel de la capa de trasporte, y por tanto queda fuera del alcance del
                protocolo
                HTTP. Aún con este factor, HTTP no necesita que el protocolo que lo sustenta mantenga una conexión
                continua
                entre los participantes en la comunicación, solamente necesita que sea un protocolo fiable o que no
                pierda
                mensajes (como mínimo, en todo caso, un protocolo que sea capaz de detectar que se ha pedido un mensaje
                y
                reporte un error). De los dos protocolos más comunes en Internet, TCP es fiable, mientras que UDP, no lo
                es.
                Por lo tanto HTTP, se apoya en el uso del protocolo TCP, que está orientado a conexión, aunque una
                conexión
                continua no es necesaria siempre.
            </p>
            {/* <div class="col-xs-12 col-md-4 contenedor-imagen">
                <img src="img/http.jpg" alt="http">
            </div> */}
        </>
    );
}

export function HTTPPreview (){
    return(
        <>
            <h2>HTTP</h2>
                <p style={{textAlign: "justify"}}>HTTP, de sus siglas en inglés: "Hypertext Transfer Protocol", es el nombre de un protocolo el cual nos
                    permite realizar una petición de datos y recursos, como pueden ser documentos HTML. Es la base de
                    cualquier
                    intercambio de datos en la Web, y un protocolo de estructura cliente-servidor, esto quiere decir que una
                    petición de datos es iniciada por el elemento que recibirá los datos (el cliente), normalmente un
                    navegador
                    Web. Así, una página web completa resulta de la unión de distintos sub-documentos recibidos, como, por
                    ejemplo: un documento que especifique el estilo de maquetación de la página web (CSS), el texto, las
                    imágenes, vídeos, scripts, etc...</p>
        </>
    );
}