    let s; 
	  function func() {
	    let result;
	    let number1 = Number(document.getElementById("num1").value);
	    let number2 = Number(document.getElementById("num2").value);
	    switch (s) {
	      case '+':
	        result = number1 + number2;
	        break;
	      case '-':
	        result = number1 - number2;
	        break;
	      case '*':
	        result = number1 * number2;
	        break;
	      case '/':
	        result = number1 / number2;
	        break;
	    }

	    let resultBtn = document.getElementById("result")
        resultBtn.value = result;
}