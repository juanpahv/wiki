export default function HTMLContent (){
    return (
        <>
            <h1 >HTML</h1>
            <h2>¿QUÉ ES?</h2>
            <p style={{textAlign: "justify"}}>El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar
                y desplegar una
                página web y sus contenidos.
                Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos.
                Como lo sugiere el título, este artículo te dará una comprensión básica de HTML y cúal es su función.
            </p>
            {/* <div class="col-xs-12 col-md-4 contenedor-imagen">
                <img src="img/html5.png" alt="html">
            </div> */}
            <br/>
            <h2>CARACTERÍSTICAS</h2>
            <ul>
                <li>Meta datos: Esta puede ser información que le dé contexto a la página.
                    Por ejemplo, nos sirve para indicar el idioma.</li>
                <li>Referencia a ficheros: Aquí deben ir todos aquellos recursos que requiera nuestro sitio.
                    Un ejemplo puede ser JavaScript y archivos CSS.</li>
                <li>Scripts y estilos: En caso de que estos no sean incluidos en un fichero independiente se pueden incluir
                    en la cabecera.</li>
            </ul>
            <br/>
            <h2>ANAMOTOMÍA DE UN ELEMENTO</h2>
            <ul style={{textAlign: "justify"}}>
                <li>La etiqueta de apertura: consiste en el nombre del elemento (en este caso, p), encerrado por paréntesis
                    angulares de apertura y cierre.
                    Establece dónde comienza o empieza a tener efecto el elemento —en este caso, dónde es el comienzo del
                    párrafo—.</li>
                <li>La etiqueta de cierre: es igual que la etiqueta de apertura, excepto que incluye una barra de cierre (/)
                    antes del nombre de la etiqueta.
                    Establece dónde termina el elemento —en este caso dónde termina el párrafo—.</li>
                <li>El contenido: este es el contenido del elemento, que en este caso es sólo texto.</li>
                <li>El elemento: la etiqueta de apertura, más la etiqueta de cierre, más el contenido equivale al elemento.</li>
            </ul>
        </>
    );
}

export function HTMLPreview (){
    return(
        <>
            <h1 >HTML</h1>
                <p style={{textAlign: "justify"}}>El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar
                    y desplegar una
                    página web y sus contenidos.
                    Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos.
                    Como lo sugiere el título, este artículo te dará una comprensión básica de HTML y cúal es su función.
                </p>
        </>
    );
}