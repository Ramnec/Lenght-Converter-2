var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// taking initial value
option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


// when we change the input and output type vale we need to updata the 
// option_from and option_to

	option_from = inputType.value;
	option_to = resultType.value;


// now compare the input and resultType value and add formula

	if(option_from === "feet" && option_to==="meter"){
		
		result.value = Number(input.value) / 3.28084;
	}else if(option_from === "mile" && option_to==="meter"){

	
		result.value = Number(input.value) / 0.000621;

	}else if(option_from === "inch" && option_to==="meter"){

		result.value = Number(input.value) / 39.3701;
	}



	if(option_from === "feet" && option_to==="kilometer"){
		
		result.value = Number(input.value) / 3280.84;
	}else if(option_from === "mile" && option_to==="kilometer"){
		
		result.value = Number(input.value) / 0.621371;
	}else if(option_from === "inch" && option_to==="kilometer"){
		
		result.value = Number(input.value) / 39370.079;
	}

	if(option_from === "feet" && option_to==="centimeter"){
		
		result.value = Number(input.value) / 0.0328084;
	}else if(option_from === "mile" && option_to==="centimeter"){
		
		result.value = Number(input.value) / 0.0000062137;
	}else if(option_from === "inch" && option_to==="centimeter"){
	
        result.value = Number(input.value) / 0.39370;
	}
	





}
