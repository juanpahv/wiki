export default function JavaScriptContent (){
    return (
        <>
            <h1>JAVASCRIPT</h1>
            <h2>¿QUÉ ES?</h2>
            <p style={{textAlign: "justify"}}>Es un lenguaje de programación o de secuencias de comandos que te permite implementar
                funciones complejas
                en
                páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática
                para
                que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos
                2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente
                JavaScript
                está involucrado.
            </p>
            <br/>
            <h2>¿QUÉ PUEDE HACER?</h2>
            <ul >
                <li>Almacenar valores útiles dentro de variables. En el ejemplo anterior, por ejemplo, pedimos que
                    ingreses
                    un
                    nuevo nombre y luego almacenamos ese nombre en una variable llamada name.</li>
                <li>Operaciones sobre fragmentos de texto (conocidas como "cadenas" (strings) en programación). En el
                    ejemplo
                    anterior, tomamos la cadena "Player1:" y la unimos a la variable name para crear la etiqueta de
                    texto
                    completa, p. ej. ''Player1: Chris".</li>
                <li>
                    Y ejecuta código en respuesta a ciertos eventos que ocurren en una página web. Usamos un evento
                    click
                    en
                    nuestro ejemplo anterior para detectar cuándo se hace clic en el botón y luego ejecutar el código
                    que
                    actualiza la etiqueta de texto.</li>
            </ul>
            <br/>
            <h2>CARACTERÍSTICAS</h2>
            <h3>Lenguaje del lado del cliente:</h3>
            <p>Cuando se dice que un lenguaje es del lado del cliente, nos referimos a que se ejecuta en la máquina del
                propio cliente a través de un navegador. Algunos de estos lenguajes son el propio javascript, HTML, CSS
                o
                Java.
                Esta categoría de lenguajes se diferencia de la otra gran categoría: los lenguajes del lado del
                servidor.
                Estos lenguajes se ejecutan e interpretan por el propio servidor y necesitan un tratamiento antes de
                mostrarlos al usuario final. Algunos de los lenguajes de programación del lado del servidor más
                conocidos
                son PHP, ASP o PERL.</p>
            <h3>Lenguaje orientado a objetos:</h3>
            <p style={{textAlign: "justify"}}>Javascript es un lenguaje orientado a objetos. Que un lenguaje esté orientado a objetos quiere decir que
                utiliza clases y objetos como estructuras que permiten organizarse de forma simple y son reutilizables
                durante todo el desarrollo. Otros lenguajes orientados a objetos son Java, Python o C++.</p>
            <h3>De tipado débil o no tipado:</h3>
            <p style={{textAlign: "justify"}}>Que un lenguaje sea de tipado débil quiere decir que no es necesario especificar el tipo de dato al
                declarar
                una variable. Esta característica supone una gran ventaja a la hora de ganar rapidez programando, pero
                puede
                provocar que cometamos más errores que si tuviéramos esa restricción que poseen los lenguajes de tipado
                fuerte como C++ o Java.
                </p>
            <h3>De alto nivel:</h3>
            <p style={{textAlign: "justify"}}>Que Javascript sea un lenguaje de alto nivel significa que su sintaxis es fácilmente comprensible por su
                similitud al lenguaje de las personas. Se le llama de “alto nivel” porque su sintaxis se encuentra
                alejada
                del nivel máquina, es decir, del código que procesa una computadora para ejecutar lo que nosotros
                programamos.
                Un lenguaje de alto nivel como Javascript permite que su barrera de entrada y su curva de aprendizaje se
                acorte drásticamente. Un ejemplo podría ser que la sentencia condicional empiece por “IF” que significa
                “si…” en inglés, permitiendo asociar rápidamente su funcionamiento y significado. Otro lenguaje de alto
                nivel muy utilizado y uno de los mejores para iniciarse en programación por esta característica es
                Python.
            </p>
            <h3>Lenguaje interpretado:</h3>
            <p style={{textAlign: "justify"}}>Javascript es un lenguaje interpretado porque utiliza un intérprete que permite convertir las líneas de
                código en el lenguaje de la máquina. Esto tiene un gran número de ventajas como la reducción del
                procesamiento en servidores web al ejecutarse directamente en el navegador del usuario, o que es apto
                para
                múltiples plataformas permitiendo usar el mismo código.
                Además de JS, otros ejemplos de lenguajes interpretados son C#, Ruby, Java o Python.
            </p>
            <h3>Muy utilizado por desarrolladores:</h3>
            <p style={{textAlign: "justify"}}>A la hora de elegir si aprender o no un nuevo lenguaje, no sólo hay que informarse sobre el tipo de
                lenguaje
                o su curva de aprendizaje, si no también su demanda en el mercado. Javascript es en la actualidad uno de
                los
                lenguajes más demandados de los últimos años por su versatilidad y su infinita capacidad para crear
                plataformas cada vez más atractivas.
                Según un estudio de requisitos solicitados en las ofertas de empleo en el año 2020 realizado por la
                universidad de Boston Northeastern, Javascript es el segundo lenguaje más demandado sólo por detrás de
                Python.
            </p>
        </>
    );
}

export function JavaScriptPreview (){
    return(
        <>
        <h1>JAVASCRIPT</h1>
            <p style={{textAlign: "justify"}}>Es un lenguaje de programación o de secuencias de comandos que te permite implementar
                funciones complejas
                en
                páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática
                para
                que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos
                2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente
                JavaScript
                está involucrado.
            </p>
        </>
    );
}