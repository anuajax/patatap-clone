
var images = [
    "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx",
    "https://www.petfinder.com/wp-content/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_March_2010-1.jpg"
  ];

var xyx=document.getElementbyTagName("body");
var i=0;
setInterval(function(){
	xyx.style.backgroundImage="url(" + images[i] + ")";
	i=i+1;
	if(i===images.length)
	{
		i=0;
	}
},2000);