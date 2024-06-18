//App de presión arterial
function presion_alterial(){
	const sys = parseFloat(document.getElementById("sys").value);
	const dia = parseFloat(document.getElementById("dia").value);
	let resultado

	if (sys <=90 && dia <=60) {

		resultado="BAJA"
		document.getElementById("resultado").innerHTML = "<div class='alert alert-primary' role='alert'><strong>Respuesta: </strong> La Presión Arterial  es : "+resultado+ " <img src='img/baja.png' ></div>";
        
		
	}else if(sys <=120 && dia <80){
		resultado="NORMAL"
		document.getElementById("resultado").innerHTML = "<div class='alert alert-success' role='alert'><strong>Respuesta: </strong> La Presión Arterial es : "+resultado+ " <img src='img/normal.png' ></div>";


	}else if((sys >=120 && sys<=129) && dia <=80){
		resultado="PREHIPERTENSIÓN"
		document.getElementById("resultado").innerHTML = "<div class='alert alert-warning' role='alert'><strong>Respuesta: </strong> La Presión Arterial es : "+resultado+ " <img src='img/prehipertension.png' ></div>";


	}else if((sys >=130 && sys<=139) && (dia >80 && dia<=89)){
		resultado="ALTA: HIPERTESIÓN. FASE 1"
		document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Respuesta: </strong> La Presión Arterial es : "+resultado+ " <img src='img/hipertension-1.png' ></div>";


	}else if(sys >=140 && dia >=90){
		resultado="ALTA: HIPERTESIÓN. FASE 2"
		document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Respuesta: </strong> La Presión Arterial es : "+resultado+ " <img src='img/hipertension-2.png' ></div>";


	}else if(sys >=180 && dia >=120){
		resultado="ALTA: HIPERTESIÓN. FASE 2"
		document.getElementById("resultado").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Respuesta: </strong> La Presión Arterial es : "+resultado+ " <img src='img/hipertension-2.png' ></div>";


	}else{
		resultado="ERROR"
		document.getElementById("resultado").innerHTML = "<div class='alert alert-success' role='alert'><strong>Respuesta: </strong> La Presión Arterial es : "+resultado+ " <img src='img/baja.png' ></div>";


	}


}

