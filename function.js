function cambiarColor(color) {
	let colorDocumento = document.querySelector("link.tema");
	let botones = {
	  "Red": {
		"inactive": document.querySelector(".colorRed i.bi.bi-circle"),
		"active": document.querySelector(".colorRed i.bi.bi-circle-fill")
	  },
	  "Blue": {
		"inactive": document.querySelector(".colorBlue i.bi.bi-circle"),
		"active": document.querySelector(".colorBlue i.bi.bi-circle-fill")
	  },
	  "Yellow": {
		"inactive": document.querySelector(".colorYellow i.bi.bi-circle"),
		"active": document.querySelector(".colorYellow i.bi.bi-circle-fill")
	  }
	};
  
	let hojaEstilo = colorDocumento.getAttribute('href');
	switch (hojaEstilo) {
	  case 'style.css':
		console.log(`Changing to ${color} theme`);
		colorDocumento.setAttribute('href', `style${color}.css`);
		botones[color]["inactive"].style.display = "none";
		botones[color]["active"].style.display = "block";
		break;
	  case `style${color}.css`:
		console.log(`Changing to default theme`);
		colorDocumento.setAttribute('href', 'style.css');
		botones[color]["inactive"].style.display = "block";
		botones[color]["active"].style.display = "none";
		break;
	  default:
		console.log(`Changing to ${color} theme`);
		colorDocumento.setAttribute('href', `style${color}.css`);
		Object.values(botones).forEach(buttons => {
		  buttons["inactive"].style.display = "block";
		  buttons["active"].style.display = "none";
		});
		break;
	}
  }
  