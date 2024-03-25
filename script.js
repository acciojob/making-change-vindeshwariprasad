const makeChange = (c) => {
	let a = {"q":0,"d":0,"n":0,"p":0};
	
	let b = Math.floor(c/25);
	c-=(25*b);
	let kk = Math.floor(c/10);
	c-=(10*kk)
	let e = Math.floor(c/5);
	c-=(5*e);
	let f = Math.floor(c/1);
	c-=(1*f);
	a["q"] = b;
	a["d"] = kk;
	a["n"] = e;
	a["p"] = f;
	return a;
	
		

  // your name here
};

// // Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
