export default function CSSContent (){
    return (
        <>
            <h2>CSS</h2>
            <h2>¿QUÉ ES?</h2>
            <p style={{textAlign: "justify"}}>
                CSS son las siglas en inglés de Cascading Style Sheets, que significa «hojas de esilo en cascada». Es un
                lenguaje que se usa para estilizar elementos escritos en un lenguaje de marcado como HTML.
            </p>
            <br/>
            <h3>¿PARA QUÉ SIRVE?</h3>
            <p style={{textAlign: "justify"}}>
                Como hemos mencionado, el CSS es un lenguaje informático que especifica cómo se presentan los documentos
                a los usuarios: cómo se diseñan, compaginan, etc.
                Un documento suele ser un archivo de texto estructurado con un lenguaje de marcado: HTML es el más
                común, pero también existen otros como SVG o XML.
                Presentar un documento a un usuario significa convertirlo en un formulario que el público pueda
                utilizar. Los navegadores, como por ejemplo Firefox, Chrome o Edge (en-US), están diseñados para
                presentar documentos visualmente en una pantalla de ordenador, un proyector o una impresora.
                El CSS se puede usar para estilos de texto muy básicos como, por ejemplo, cambiar el color y el tamaño
                de los encabezados y los enlaces. Se puede utilizar para crear un diseño, como podría ser convertir una
                columna de texto en una composición (en-US) con un área de contenido principal y una barra lateral para
                información relacionada. Incluso se puede usar para crear efectos de animación.
            </p>
            <br/>
            <h2>VENTAJAS</h2>
            <p style={{textAlign: "justify"}}>
                La diferencia entre un sitio web que implementa CSS y uno que no, es enorme y definitivamente se nota.

                Quizás hayas visto algún sitio web que no se puede cargar por completo y tiene un fondo blanco con la
                mayor parte del texto en azul y negro. Eso significa que la parte CSS del sitio no se cargó
                correctamente o no existe.

                Así es como se ve un sitio con solo HTML, y creo que estarás de acuerdo conmigo en que no luce muy bien.

                Antes de CSS, todo el estilo debía incluirse en el marcado HTML. Esto significa que había que describir
                por separado todos los fondos, los colores de fuente, las alineaciones, etc.

                CSS permite estilizar todo en un archivo diferente, creando el estilo allí y después integrando el
                archivo CSS sobre el marcado HTML. Esto hace que el marcado HTML sea mucho más limpio y fácil de
                mantener.

                En resumen, con CSS no tienes que describir repetidamente cómo se ven los elementos individuales. Esto
                ahorra tiempo, hace el código más corto y menos propenso a errores.

                CSS te permite tener múltiples estilos en una página HTML, y esto hace que las posibilidades de
                personalización sean casi infinitas. Hoy en día, esto se está volviendo una necesidad más que algo
                básico.
            </p>
            <br/>
            <h2>ESTILO INTERNO Y EXTERNO</h2>
            <p style={{textAlign: "justify"}}>
                Los estilos CSS hechos de esta manera se cargan cada vez que se
                actualiza un sitio web, lo que puede aumentar el tiempo de carga. Además, no podrás usar el mismo estilo
                CSS en varias páginas, ya que está contenido en una sola página. Sin embargo, esto también tiene sus
                beneficios. Tener todo en una página facilita compartir la plantilla para una vista previa.

                El método Externo podría ser el más conveniente. Todo se hace externamente en un archivo .css. Esto
                significa que puedes hacer todo el estilizado en un archivo separado y aplicar el CSS a cualquier página
                que quieras. El estilo Externo también puede mejorar los tiempos de carga.

                Por último, hablemos del estilo Inline de CSS. Inline trabaja con elementos específicos que tienen la
                etiqueta /style/. Cada componente tiene que ser estilizado,
                por lo que podría no ser la mejor forma,
                ni la más rápida para manejar CSS. Pero puede ser útil,
                por ejemplo,
                si quieres cambiar un solo elemento,
                tener una vista previa rápida de los cambios o tal vez no tengas acceso a los archivos CSS.
            </p>
            <br/>
            <h2>CARACTERÍSTICAS</h2>
            <ul>
                <li>Es un lenguaje de programación diferente a HTML.</li>
                <li>Es un lenguaje de programación diferente a HTML.</li>
                <li>Permite el apilamiento de instrucciones para definir formatos específicos.</li>
                <li>Es utilizable en todos los navegadores y plataformas.</li>
                <li>Optimiza el funcionamiento de las páginas web.</li>
                <li>Tiene una sintaxis específica.</li>
                <li>Permite personalizar totalmente la apariencia de las páginas.</li>
            </ul>
            {/* <div class="col-xs-12 col-md-4 contenedor-imagen">
                <img src="img/css.jpg" alt="http">
            </div> */}
        </>
    );
}

export function CSSPreview (){
    return(
        <>
        <h2>CSS</h2>
            <p style={{textAlign: "justify"}}>
                CSS son las siglas en inglés de Cascading Style Sheets, que significa «hojas de esilo en cascada». Es un
                lenguaje que se usa para estilizar elementos escritos en un lenguaje de marcado como HTML.
            </p>
            <p style={{textAlign: "justify"}}>
                Como hemos mencionado, el CSS es un lenguaje informático que especifica cómo se presentan los documentos
                a los usuarios: cómo se diseñan, compaginan, etc.
                Un documento suele ser un archivo de texto estructurado con un lenguaje de marcado: HTML es el más
                común, pero también existen otros como SVG o XML.
                Presentar un documento a un usuario significa convertirlo en un formulario que el público pueda
                utilizar. Los navegadores, como por ejemplo Firefox, Chrome o Edge (en-US), están diseñados para
                presentar documentos visualmente en una pantalla de ordenador, un proyector o una impresora.
                El CSS se puede usar para estilos de texto muy básicos como, por ejemplo, cambiar el color y el tamaño
                de los encabezados y los enlaces. Se puede utilizar para crear un diseño, como podría ser convertir una
                columna de texto en una composición (en-US) con un área de contenido principal y una barra lateral para
                información relacionada. Incluso se puede usar para crear efectos de animación.
            </p>
        </>
    );
}