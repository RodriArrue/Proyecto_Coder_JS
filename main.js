
let netflix = {
  nombre: 'Netflix',
  planes: {
    basico: {
      precio: 2499,
      impuestos: 60
    },
    estandar: {
      precio: 4199,
      impuestos: 60
    },
    premium: {
      precio: 5799,
      impuestos: 60
    }
  }
};

// Información de Spotify
let spotify = {
  nombre: 'Spotify',
  planes: {
    individual: {
      precio: 599,
      impuestos: 60
    },
    duo: {
      precio: 799,
      impuestos: 60
    },
    familiar: {
      precio: 999,
      impuestos: 60
    },
    estudiantes: {
      precio: 329,
      impuestos: 60
    }
  }
};

function obtenerInformacionDesdeServicio(plataforma, callback) {
  // Aquí puedes realizar una solicitud "fetch" a un servicio web que proporciona información adicional sobre los planes
  // Puedes ajustar la URL según tus necesidades
  fetch(`URL_DEL_SERVICIO_WEB/${plataforma.nombre.toLowerCase()}`)
    .then(response => response.json())
    .then(data => {
      // Actualizar la información local con los datos obtenidos
      plataforma.planes = data.planes;
      callback();
    })
    .catch(error => {
      console.error('Error al obtener información desde el servicio web', error);
      callback();
    });
}

function actualizarInformacionLocal(plataforma, callback) {
  obtenerInformacionDesdeServicio(plataforma, callback);
}

function calcularImpuestos(precio, impuestos) {
  return precio * (impuestos / 100);
}

document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById('formulario');
  let resultadoElement = document.getElementById('resultado');
  let tarjetaElement = document.getElementById('tarjeta');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let EleccionUsuario = document.getElementById('plataforma').value;
    let EleccionPlan = document.getElementById('plan').value;

    let plataforma, planes;

    if (EleccionUsuario.toLowerCase() === 'netflix') {
      plataforma = netflix;
      actualizarInformacionLocal(plataforma, function () {
        procesarSeleccion(plataforma, EleccionPlan);
      });
    } else if (EleccionUsuario.toLowerCase() === 'spotify') {
      plataforma = spotify;
      actualizarInformacionLocal(plataforma, function () {
        procesarSeleccion(plataforma, EleccionPlan);
      });
    } else {
      resultadoElement.textContent = "¡La plataforma ingresada no es válida!";
      return;
    }
  });

  function procesarSeleccion(plataforma, EleccionPlan) {
    let planes = plataforma.planes;

    if (planes.hasOwnProperty(EleccionPlan.toLowerCase())) {
      let plan = planes[EleccionPlan.toLowerCase()];
      let ValorImpuestos = calcularImpuestos(plan.precio, plan.impuestos);
      let ValorFinal = plan.precio + ValorImpuestos;

      resultadoElement.textContent = `El valor final del plan ${EleccionPlan} en ${plataforma.nombre} es: ${ValorFinal}`;
      tarjetaElement.style.display = 'block';
    } else {
      resultadoElement.textContent = "¡El plan ingresado no es válido!";
    }

    localStorage.setItem('resultado', resultadoElement.textContent);
  }
});