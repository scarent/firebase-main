import { actualizarPersona, obtenerPersonas, registrarpersona } from "./promesas.js";

window.addEventListener("load",()=>{
    document.getElementById("btnregistrar").addEventListener("click",registrar);
    document.getElementById("btnActualizar").addEventListener("click",actualizar);
    
    cargarDatos();
});
const registrar = ()=>{   //variable flecha para gatillar una funcion
    //recupero el elemento
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let efechanac = document.getElementById("fecha_nacimiento");
    let erut = document.getElementById("rut");
    let ecorreo = document.getElementById("correo");
    let eedad = document.getElementById("edad");
    //recupero el valor
    let vnombre= enombre.value;
    let vapellido = eapellido.value;
    let vfechanac = efechanac.value;
    let vrut = erut.value;
    let vcorreo = ecorreo.value;
    let vedad = eedad.value;
    //creo el objeto
    let objeto = {nombre:vnombre, apellido:vapellido,fechaNacimiento:vfechanac,rut:vrut,correo:vcorreo,edad:vedad};
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
            estructura += "<td><button id='UPD"+persona.id+"'>Actualizar</button></td>"; //boton para actualizar
            estructura += "<td><button id='DEL'"+persona.id+"'>Eliminar</button></td>";  //boton para delete
            estructura += "</tr>"
        });
        document.getElementById("tbDatos").innerHTML = estructura;
        personas.forEach((persona)=>{
            let botonUPD = document.getElementById("UPD"+persona.id);
            botonUPD.addEventListener("click",()=>{
                let enombre = document.getElementById("UPDnombre");
                let eapellido = document.getElementById("UPDapellido");
                let efechanac = document.getElementById("UPDfecha_nacimiento");
                let erut = document.getElementById("UPDrut");
                let ecorreo = document.getElementById("UPDcorreo");
                let eedad = document.getElementById("UPDedad");
                enombre.value = persona.nombre;
                eapellido.value = persona.apellido;
                erut.value = persona.rut;
                ecorreo.value = persona.correo;
                efechanac.value = persona.fechaNacimiento;
                eedad.value = persona.edad;
                document.getElementById("btnActualizar").value = persona.id;
            })
        })
    });

}
const actualizar = ()=>{   //variable flecha para gatillar una funcion
    //recupero el elemento
    let enombre = document.getElementById("UPDnombre");
    let eapellido = document.getElementById("UPDapellido");
    let efechanac = document.getElementById("UPDfecha_nacimiento");
    let erut = document.getElementById("UPDrut");
    let ecorreo = document.getElementById("UPDcorreo");
    let eedad = document.getElementById("UPDedad");
    //recupero el valor
    let vnombre= enombre.value;
    let vapellido = eapellido.value;
    let vfechanac = efechanac.value;
    let vrut = erut.value;
    let vcorreo = ecorreo.value;
    let vedad = eedad.value;
    //creo el objeto
    
    let objeto = {nombre:vnombre, apellido:vapellido,fechaNacimiento:vfechanac,rut:vrut,correo:vcorreo,edad:vedad};
    let id =document.getElementById("btnActualizar").value;
    console.log(objeto);
    actualizarPersona(objeto,id).then(()=>{
        alert("se actualizo con exito");
        cargarDatos();

    });
    
}