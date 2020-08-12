//Declaración de variables

var nombreUsuario = "Carlos";
var saldoCuenta = 3800;
var limiteExtraccion = 1000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
	iniciarSesion();

    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

	limiteExtraccion = parseInt( prompt("Ingrese el nuevo limite de extraccion") );
	actualizarLimiteEnPantalla();
	alert("Nuevo Monto de extracción: $ " + limiteExtraccion);
}

function extraerDinero() {

	var montoIngresado= parseInt( prompt("Ingrese dinero a retirar"))

	if ( !isNaN(montoIngresado) )
	{

		if (montoIngresado > saldoCuenta){
			alert("Dinero insuficiente");
		}
		else{
			if (montoIngresado > limiteExtraccion){
				alert("El monto solicitado supera el limite de extracción");
			}
			else{
				if (montoIngresado%100){
					alert("Solo puedes extraer billetes de 100");
				}
				else{
					var saldoAnterior=saldoCuenta;

					restarDinero(montoIngresado);
					actualizarSaldoEnPantalla();

					alert("has retirado:$"+ montoIngresado+ "\nsaldo anterior: $"+ saldoAnterior+ "\nSaldo actual:$" + saldoCuenta);
				}
			}
		}
	}
	else
	{
		alert("Debe ingresar un monto valido");
	}	
}


function depositarDinero() {
	
	var montoIngresado =  parseInt( prompt("Ingrese el dinero a depositar") ) ;

	if ( !isNaN(montoIngresado) )
	{
		var saldoAnterior = saldoCuenta;

		agregarDinero( montoIngresado) ;

		actualizarSaldoEnPantalla();

		alert("Has depositado: $" + montoIngresado + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + saldoCuenta );
	}
	else{
		alert("Debe ingresar un monto valido");
	}

}

function pagarServicio()
{
	var agua=350;
	var telefono=450;
	var luz=210;
	var internet=570;

	var servicioElegido = parseInt( prompt("Servicio: \n 1-Agua: $" + agua + "\n 2-Telefono: $" + telefono + "\n 3-Luz:$"+ luz + "\n 4-Internet:$" + internet) );

	var montoServicioElegido = 0;
	var nombreServicioElegido;

	switch( servicioElegido ){

		case 1: 
			montoServicioElegido = agua;
			nombreServicioElegido = "Agua";

			break;

		case 2:
			montoServicioElegido = telefono;
			nombreServicioElegido = "Teléfono";

			break;

		case 3:
			montoServicioElegido = luz;
			nombreServicioElegido = "Luz";

			break;

		case 4:
			montoServicioElegido = internet;
			nombreServicioElegido = "Internet";

			break;

		default:
			alert("No existe el servicio que se ha seleccionado.");
			break;
	}

	if ( montoServicioElegido > 0 )
	{
		if ( saldoCuenta >= montoServicioElegido ){
			
			saldoAnterior = saldoCuenta;

			saldoCuenta -= montoServicioElegido;

			actualizarSaldoEnPantalla();

			alert ("Has pagado el servicio " + nombreServicioElegido + "\n Saldo anterior: $" + saldoAnterior + "\n Dinero descontado $" + montoServicioElegido + " \n Saldo actual: $ " + saldoCuenta);
		}
		else{
			alert ("No tiene suficiente saldo para pagar el servicio seleccionado.");
		}
	}

}

function transferirDinero() {
	var cuentaAmiga1=1234567;
	var cuentaAmiga2=7654321;

	var montoTransferencia = parseInt( prompt("Ingrese el monto que desea transferir:") );

	if ( !isNaN(montoTransferencia) ){

		if ( montoTransferencia <= saldoCuenta ) {
			
			var cuentaTransferencia = prompt("Ingrese el numero de cuenta a la que desea transferir:");


			if ( cuentaTransferencia == cuentaAmiga1 || cuentaTransferencia == cuentaAmiga2 ){
				
				saldoCuenta -= montoTransferencia;

				actualizarSaldoEnPantalla();
				alert("se han transferido:$ " + montoTransferencia + "\n Cuenta Destino: "+ cuentaTransferencia )

			}
			else{
				alert("La cuenta ingresada es inexistente");
			}

		}
		else{
			alert("Saldo insuficente para realizar la transferencia.");
		}
	}
	else
	{
		alert("Debe ingresar un monto valido.");
	}
}

function iniciarSesion() {

	var codigo = "1234";
	var codigoIngresado= prompt("ingrese su codigo");

	if ( codigoIngresado != codigo){
		saldoCuenta=0;
		alert("codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
	}

}

function agregarDinero(sumaADepositar){
	saldoCuenta += sumaADepositar;
}

function restarDinero(restaARetirar){
	saldoCuenta-= restaARetirar;

}

/*function pagarServicio(pagoAEfectuar){
	saldoCuenta-=pagoAEfectuar;
}*/

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {

    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;

}