(function() {

	function canadianPostalCodes (argument) {
		var re = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}/; 
		var str = 'K1A0B1';
		var m;
		 
		while ((m = re.exec(str)) != null) {
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
		}
	}

	function visaCards (argument) {
		var re = /^4\d{12}(\d{3})?/; 
		var str = '4815661087902234';
		var m;
		 
		while ((m = re.exec(str)) != null) {
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
		}
	}

	function mastercards (argument) {
		var re = /^5[1-5]\d{14}/; 
		var str = '5277829470274342';
		var m;
		 
		while ((m = re.exec(str)) != null) {
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
		}
	}

	function ada95 (argument) {
		var re = /^\d(_?\d)*#[\dA-F](_?[\dA-F])*#(E[+-]+[\dA-F](_?[\dA-F])*)?|\d(_?\d)*(\.\d(_?\d)*)?(E[+-]+\d(_?\d)*)?/; 
		var str = '0000123456789';
		var m;
		 
		while ((m = re.exec(str)) != null) {
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
		}
	}

	function noOs (argument) {
		var re = /^\w(?![Oo][Oo]$)[\w\d]*/; 
		var str = 'Woo';
		var m;
		 
		while ((m = re.exec(str)) != null) {
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
		}
	}

	function binary (argument) {
		var re = /^(?:0|1)+0000/; 
		var str = '1000010000';
		var m;
		 
		while ((m = re.exec(str)) != null) {
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
		}
	}

	function range2to36 (argument) {
		var re = /^(36(?:\.0*)?|[1-2]\d(?:\.\d*)?|3[0-5](?:\.\d*)?|[2-9](?:\.\d*)?)?/; 
		var str = '36';
		var m;
		 
		while ((m = re.exec(str)) != null) {
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
		}
	}

	function MLcomments (argument) {
		var re = /^(?s)\**.*(:?\*)/; 
		var str = '*This is a test\n*to see if this regex\n*works correctly*';
		var m;
		 
		while ((m = re.exec(str)) != null) {
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
		}
	}

	function usingLookarounds (argument) {
		var re = /^(?!(file|find|for)$)[a-zA-z]*/; 
		var str = 'finder';
		var m;
		 
		while ((m = re.exec(str)) != null) {
		    if (m.index === re.lastIndex) {
		        re.lastIndex++;
		    }
		}
	}
	
}());



















