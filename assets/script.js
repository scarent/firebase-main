import { obtenerPersonas, registrarpersona } from "./promesas.js";

window.addEventListener("load",()=>{
    document.getElementById("btnregistrar").addEventListener("click",registrar);
    cargarDatos();
});
const registrar = ()=>{   //variable flecha para gatillar una funcion
    //recupero el elemento
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let efechanac = document.getElementById("fecha_nacimiento");
    let erut = document.getElementById("rut");
    let ecorreo = document.getElementById("correo");
    //recupero el valor
    let vnombre= enombre.value;
    let vapellido = eapellido.value;
    let vfechanac = efechanac.value;
    let vrut = erut.value;
    let vcorreo = ecorreo.value;
    //creo el objeto
    let objeto = {nombre:vnombre, apellido:vapellido,fechaNacimiento:vfechanac,rut:vrut,correo:vcorreo};
    console.log(objeto);
    //validacion del objeto
    registrarpersona(objeto).then(()=>{
        alert("registrado con éxito");
        cargarDatos();
    }).catch((r)=>{
        alert("algo ocurrio");
        alert(r);
    });
}
const cargarDatos = ()=>{
    // ir a la base d datos a buscar lo registrado
    obtenerPersonas().then((personas)=>{
        console.log("recupere")
        console.log(personas)
        let estructura = "";
        personas.forEach((persona)=>{
            estructura += "<tr>";
            estructura += "<td>"+persona.nombre+"</td>";
            estructura += "<td>"+persona.apellido+"</td>";
            estructura += "<td>"+persona.rut+"</td>";
            estructura += "<td>"+persona.correo+"</td>";
            estructura += "<td>"+persona.fechaNacimiento+"</td>";
            estructura += "<td>"+persona.edad+"</td>";
            estructura += "</tr>"
        });
        document.getElementById("tbDatos").innerHTML = estructura;

    });

}