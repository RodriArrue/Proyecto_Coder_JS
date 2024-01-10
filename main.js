
// Información de Netflix
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
      planes = netflix.planes;
    } else if (EleccionUsuario.toLowerCase() === 'spotify') {
      plataforma = spotify;
      planes = spotify.planes;
    } else {
      resultadoElement.textContent = "¡La plataforma ingresada no es válida!";
      return;
    }

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
  });
});