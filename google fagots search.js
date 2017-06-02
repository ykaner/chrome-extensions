function killGoogleFagots(){

	var logo = document.getElementsByTagName('img')[0];

	var newlogo = document.createElement('template');
	newlogo.innerHTML = '<img src="/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png" alt="Google" height="44" width="120" onload="google.aft&amp;&amp;google.aft(this)">';
	newlogo = newlogo.content.firstChild;

	logo.parentNode.onckick = undefined;
	logo.parentNode.appendChild(newlogo);
	logo.parentNode.removeChild(logo);
}

setTimeout(killGoogleFagots, 300);