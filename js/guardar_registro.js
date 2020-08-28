document.querySelector('#botonregistara').addEventListener('click', salvardatos);
getimprimirtabla();

function salvardatos(){
    var snombres=document.querySelector('#NOMBRE').value,
        sapellidos=document.querySelector('#Apellido').value,
        spais=document.querySelector('#pais').value,
        sedad=document.querySelector('#edad').value,
        ssexo=document.querySelector('#sexo').value,
        snacimiento=document.querySelector('#naci').value,
        semail=document.querySelector('#direccionemail').value,
        stel=document.querySelector('#telefono').value,
        scel=document.querySelector('#celular').value,
        sid=document.querySelector('#Identidad').value,
        sdireccion=document.querySelector('#Direccion').value;


        addinformcion(snombres,sapellidos,spais,sedad,ssexo,snacimiento, semail,  stel,scel,sid,sdireccion);
        getimprimirtabla();

}

function getimprimirtabla(){
    var list= obtenertabla2();
        tbody=document.querySelector('#tblaRegistro tbody');
        
    tbody.innerHTML =''; 

   for (var i=0;i<list.length;i++){
       var row=tbody.insertRow(i);
       var nombrecell=row.insertCell(0),
           apellidocell=row.insertCell(1),
           nacionalidadcell=row.insertCell(2),
           edadcell=row.insertCell(3),
           sexocell=row.insertCell(4),
           nacimientocell=row.insertCell(5),
           correocell=row.insertCell(6),
           fijocell=row.insertCell(7),
           celcell=row.insertCell(8),
           idcell=row.insertCell(9),
           direccell=row.insertCell(10),
           delecttcell=row.insertCell(11);
           

           nombrecell.innerHTML=list[i].nombre;
           apellidocell.innerHTML=list[i].apellido;
           nacionalidadcell.innerHTML=list[i].nacionalidad;
           edadcell.innerHTML=list[i].edades;
           sexocell.innerHTML=list[i].sexos;
           nacimientocell.innerHTML=list[i].echa_naci;
           correocell.innerHTML=list[i].email;
           fijocell.innerHTML=list[i].telefono_fijo;
           celcell.innerHTML=list[i].celulares;
           idcell.innerHTML=list[i].No_ID;
           direccell.innerHTML=list[i].direcciones;
           
           delecttcell.innerHTML = `<a class= "btn btn-danger " onClick="onDelete(this)">borrar</a>`;



       tbody.appendChild(row);

   }
     


}

   function onDelete(td){

    if (confirm('Estas seguro de esto? si lo borras perderas la informacion')){
        
        row = td.parentElement.parentElement;
        document.getElementById("tblaRegistro").deleteRow(row.rowIndex);
        ///borrarForm();
        
        var num = document.getElementById('tblaRegistro').rows.length;
       // alert(num)
        if(num==1){
            divtabla.style.display='none';
        }
    }



}
