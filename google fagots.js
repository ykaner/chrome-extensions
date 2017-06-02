function killGoogleFagots(){

	var logo = document.getElementById('hplogo');

	var newlogo = document.createElement('template');
	newlogo.innerHTML = '<img style="padding-top:112px" height="92" src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" width="272" alt="Google" id="hplogo" title="Google" onload="google.aft&amp;&amp;google.aft(this)">';
	newlogo = newlogo.content.firstChild;

	logo.parentNode.onckick = undefined;
	logo.parentNode.appendChild(newlogo);
	logo.parentNode.removeChild(logo);

}

setTimeout(killGoogleFagots, 300);
