var passage = "Ah <br>Ben je oke?<br>Heb je jezelf pijn gedaan?<br>het spijt me zeer<br>Ik zag je niet draaien<br>Oh nee<br>Ben je oke?<br>Hallo<br>Hoi<br>Hoi?<br>uhm<br>Sorry<br>en je oke?<br>kan je me horen?<br>Oh Hallo?<br>Hallo?<br>het spijt me heel erg<br>Ik zag je daar niet draaien<br>ik was niet aan het kijken<br>mijn fout<br>Hallo?<br>...<br>um, oke<br>Nou ik hoop dat je fiets in orde is<br>Is je fiets in orde<br>Hallo<br>Hallo?<br>Nou, oke<br>Doei..."

function FillSlogan()
{
	console.log("Filling");
    var text = '';
	
    for(var i=0; i<50; i++)
    {
		createDiv();
    }

}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //alert("you're at the bottom of the page");
        createDiv();
    }
};

function createDiv()
{
	var div = document.createElement('div')
        div.innerHTML=passage
        document.body.appendChild(div)
}

