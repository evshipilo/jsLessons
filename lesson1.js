"use strict";
let name= prompt('ty hto?');
let par=1;

//if(age>=14 $$ age <=90)
if (name===null) alert('otmena'); else {
	if (name==='admin') {par=prompt('parol');
	if (par===null) alert('otmena');else{
		if(par==='boss') alert('welcome');
		else alert('ne prav parol');
	}
					   }
	else alert('govna kusok');
}
