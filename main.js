/*
nombre_alumno_array = [];

var ver_alumno_array = [];

for(var j = 1; j <= 4; j++){
        var nombre_alumno = document.getElementById("nombre_alumno_"+j).value;
        console.log(nombre_alumno);
        nombre_alumno_array.push(nombre_alumno);
}

var longitud_nombre_alumnos_array = nombre_alumno_array.length;
console.log(longitud_nombre_alumnos_array);

for(var k=0; k<longitud_nombre_alumnos_array{
    ver_alumno_array.push("<h4>NOMBRE - "+nombre_alumno_array[k]+"</h4>");
    console.log(ver_alumno_array);
}

document.getElementById("mostrar_nombres_con_comas").innerHTML=ver_alumno_array;

var remover =  ver_alumno_array.join(" ");
console.log(remover_comas);
document.getElementById("mostrar_nombres_sin_comas").innerHTML=ver_alumno_array;
*/
var remover_comas
function submit() {
     var GuestName = document.getElementById("name1").value;
      names_of_people.push(GuestName); 
      console.log(GuestName); 
      console.log(names_of_people); 
      var lenght_of_name = names_of_people.length;
      console.log(lenght_of_name); 
      document.getElementById("display_name").innerHTML=names_of_people.toString();
     }
var names_of_people = [];
 function submit() { 
     var GuestName = document.getElementById("name1").value;
      names_of_people.push(GuestName); console.log(GuestName); 
      console.log(names_of_people); 
      var lenght_of_name = names_of_people.length;
      console.log(lenght_of_name); 
      document.getElementById("display_name").innerHTML=names_of_people.toString(); 
    } 
 function sorting() { 
     names_of_people.sort();
      var i= names_of_people.join(" "); 
      console.log(names_of_people); 
      document.getElementById("sorted").innerHTML=i.toString();
    } 
    function show() {
         var i= names_of_people.join(" "); 
         console.log(names_of_people); 
         document.getElementById("p1").innerHTML=i.toString();
        document.getElementById("sort_button").style.display="block"; 
    } 
    function searching() { 
        var s= document.getElementById("s1").value; var found=0; 
        var j;
         for(j=0; j<names_of_people.length; j++) {
         if(s==names_of_people[j]){ found=found+1; 
        } 
    }
         document.getElementById("p2").innerHTML="name found "+" time/s";
        console.log("found name "+found+" time/s"); 
    }