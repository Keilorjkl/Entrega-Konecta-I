const mensajeForm = document.getElementById("mensaje-form");
      const form = document.getElementById("form");

      function enviar() {
        //recuperamos los datos del radio.
        let tipoViaje = getValorRadio("tipoDeViaje");
        let destionPreferido = getValorRadio("destionPreferido");
        let presupuesto = getValorRadio("presupuesto");
        let email = document.getElementById('eamil').value

        if (tipoViaje && destionPreferido && presupuesto && email) {
          localStorage.setItem("ENCUESTA_ENVIADA", "ok");
          let datosSeleccionados =
            "<strong>Datos seleccionados.</strong><hr>" +
            "<div><strong>Tipo de viaje: </strong>" +
            tipoViaje +
            "</div><div><strong>Destino Preferido: </strong>" +
            destionPreferido +
            "</div><div><strong>Presupuesto: </strong>" +
            presupuesto +
            "</div><div><strong>Email: </strong>" +
               email +
            "</div>";
          mensajeForm.innerHTML =
            alertMensaje("Encuesta enviada correctamente!") +
            datosSeleccionados;
          mensajeForm.classList.add("visible");
          form.classList.add("oculto");
        } else {
          alert("Todos los campos son requeridos.");
        }
      }
      function alertMensaje(mensaje) {
        return `<div class="alert alert-success" role="alert">
                 ${mensaje}
               </div>
               `;
      }
      function getValorRadio(name) {
        let valor = null;
        try {
          valor = document.querySelector(
            'input[name="' + name + '"]:checked'
          ).value;
        } catch (error) {}
        return valor;
      }
      function controlEncuesta() {
        let encuestaEnviada = localStorage.getItem("ENCUESTA_ENVIADA");
        if (encuestaEnviada == "ok") {
          mensajeForm.innerHTML = alertMensaje(
            "La encuesta ya fue respondida!"
          );
          mensajeForm.classList.add("visible");
          form.classList.add("oculto");
        }
      }