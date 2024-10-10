import Cl_Contratado from "./Cl_Contratado.js";




let contratado1 = new Cl_Contratado("Rafael", 30, 15);
let contratado2 = new Cl_Contratado("Felicia", 30, 20);



let salida = document.getElementById("salida");

salida.innerHTML = `
<br> nombre del profesor contratado: ${contratado1.nombre}<br>
Monto de bono: ${contratado1.bono}<br>
Horas trabajadas: ${contratado1.horas}<br>
Sueldo total: ${contratado1.sueldoTotal()}<br>
<br> nombre del profesor contratado: ${contratado2.nombre}<br>
Monto de bono: ${contratado2.bono}<br>
Horas trabajadas: ${contratado2.horas}<br>
Sueldo total: ${contratado2.sueldoTotal()}
`;