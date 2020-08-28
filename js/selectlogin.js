$(document).ready(function() {
    const temp = [{
        "id": "estudio",
        "name": "estudio"
      },
      {
        "id": "trabajo",
        "name": "trabajo"
      },
      {
        "id": "estoy desempleado",
        "name": "estoy desempleado"
      }
    ];
    var $select = $('#estado');

    //alert(options);
    $.each(temp, function(id, name) {
      $select.append('<option value=' + name.id + '>' + name.name + '</option>');
    });
  }); 
