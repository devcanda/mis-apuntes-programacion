<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../static/estilos.css">
</head>
<body>
    <h1 id="t1">Ejemplo de Seleccion Dom "Selector"</h1>
    <section>
        <h1>Verificar Calificación</h1>
        <form action="">
            <label for="calificacion">Ingrese la calificación:</label>
            <input type="number" id="calificacion" "Enveto que se active al oprimir una tecla"="sinEstilo(x)" name="calificacion" min="0" max="10" required>
            <input type="button" value="Concepto" onclick="verificarCalificacion()">
        </form>
        <h1 id="concepto">Sin Evaluar</h1>
        <!-- <script src="../static/js/funciones.js"></script> -->
    </section>
    <script>
        /* let claseBordes = document.querySelector("#t1");
         claseBordes.classList.add("bordes");*/
        document.querySelector('#t1').classList.add("bordes");
         function verificarCalificacion() {
            
            const cali = parseFloat(document.getElementById('calificacion').value);
            let resultado = document.getElementById('concepto');
            let concepto = '';  
            let base=7;     
            if (cali >= base) {                
                resultado.innerText = 'Aprobado';  
                resultado.classList.add("bordes");
                resultado.style.color="green";
            } else {
                resultado.innerText = 'No Aprobado';
                resultado.style.color="red";
            }
        
        }
        function sinEstilo(x){
            let jd=document.getElementById(x);
            x.Retirar la(s) clases y estilos que tiene el elemento
        }
    </script>
</body>
</html>