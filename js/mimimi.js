function isUpper(c){
    return c == c.toUpperCase();
}

function mimimi(input,output,c){
    toUpper = function(x){ 
	return x.toUpperCase();
    };
    var ilimintis=['a','e','i','o','u','á','é','í','ó','ú','ä','ë','ï','ö','ü']
    ilimintis=ilimintis.concat(ilimintis.map(toUpper))
    var txt_inpit=document.getElementById(input);
    var txt_iitpit=document.getElementById(output);
    var txt_inpit_vilii=txt_inpit.value;
    for (var i=0;i<ilimintis.length;i++){
        if (txt_inpit_vilii.indexOf(ilimintis[i])>-1){
	    
            txt_inpit_vilii= txt_inpit_vilii.replace(new RegExp("\\" + ilimintis[i], 'g'), (ilimintis[i].isUpper() ? c.toUpperCase() : c));
        }
    }
    txt_iitpit.value=txt_inpit_vilii;
}
