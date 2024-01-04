
let EleccionUsuario = prompt("Ingrese la plataforma para ver sus planes");

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

// Función para calcular impuestos
function calcularImpuestos(precio, impuestos) {
  return (precio * impuestos) / 100;
}

if (EleccionUsuario.toLowerCase() === netflix.nombre.toLowerCase()) {
  let EleccionPlanNetflix = prompt("Seleccione qué plan quiere calcular: Basico, Estandar o Premium");

  if (netflix.planes.hasOwnProperty(EleccionPlanNetflix.toLowerCase())) {
    let plan = netflix.planes[EleccionPlanNetflix.toLowerCase()];
    let ValorImpuestos = calcularImpuestos(plan.precio, plan.impuestos);
    let ValorFinal = plan.precio + ValorImpuestos;
    console.log(`El valor final del plan ${EleccionPlanNetflix} en ${netflix.nombre} es: ${ValorFinal}`);
  } else {
    console.log("¡El plan ingresado no es válido!");
  }
} else if (EleccionUsuario.toLowerCase() === spotify.nombre.toLowerCase()) {
  let EleccionPlanSpotify = prompt("Seleccione qué plan quiere calcular: Individual, Duo, Familiar o Estudiantes");

  if (spotify.planes.hasOwnProperty(EleccionPlanSpotify.toLowerCase())) {
    let plan = spotify.planes[EleccionPlanSpotify.toLowerCase()];
    let ValorImpuestos = calcularImpuestos(plan.precio, plan.impuestos);
    let ValorFinal = plan.precio + ValorImpuestos;
    console.log(`El valor final del plan ${EleccionPlanSpotify} en ${spotify.nombre} es: ${ValorFinal}`);
  } else {
    console.log("¡El plan ingresado no es válido!");
  }
} else {
  console.log("¡La plataforma ingresada no es válida!");
}
