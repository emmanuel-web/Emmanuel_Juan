$(document).ready(function() {
    const temp = [{
        "id": "Colombia",
        "name": "Colombia"
      },
      {
        "id": "Antigua y Barbuda",
        "name": "Antigua y Barbuda"
      },
      {
        "id": "Arubar",
        "name": "Arubar"
      },
      {
        "id": "Bahamas",
        "name": "Bahamas"
      },
      {
        "id": "Argentina",
        "name": "Argentina"
      },
      {
        "id": "Ecuador",
        "name": "Ecuador"
      },
      {
        "id": "Perú",
        "name": "Perú"
      },
      {
        "id": "Dominica",
        "name": "Dominica"
      },
      {
        "id": "Uruguay",
        "name": "Uruguay"
      },
      {
        "id": "Venezuela",
        "name": "Venezuela"
      },
      {
        "id": "México",
        "name": "México"
      },
      {
        "id": "Costa Rica",
        "name": "Costa Rica"
      },
      {
        "name": "Jamaica",
        "id": "Jamaica"
      }
    ];
    var $select = $('#pais');

    
    $.each(temp, function(id, name) {
      $select.append('<option value=' + name.id + '>' + name.name + '</option>');
    });
  }); 
