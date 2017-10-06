function isUpper(c){
    return c == c.toUpperCase();
}

function mimimi(input,output){
    toUpper = function(x){ 
        return x.toUpperCase();
    };
    var ilimintis = [['ca','que','qui','co','cu'],['cá','qué','quí','có','cú'],['a','e','o','u'], ['á','é','ó','ú'], ['ä','ë','ö','ü']];
    var sistiticiinis = ['ki','kí','i','í','ï'];
    for (var i = 0; i < ilimintis.length; i++) {
        ilimintis[i] = ilimintis[i].concat(ilimintis[i].map(toUpper));
    }
    var txt_inpit=document.getElementById(input);
    var txt_iitpit=document.getElementById(output);
    var txt_inpit_vilii=txt_inpit.value;
    for (var i=0;i<ilimintis.length;i++){
        for (var j = 0; j < ilimintis[i].length; j++) {
            if (txt_inpit_vilii.indexOf(ilimintis[i][j])>-1){
                txt_inpit_vilii= txt_inpit_vilii.replace(new RegExp(ilimintis[i][j], 'g'), (isUpper(ilimintis[i][j]) ? sistiticiinis[i].toUpperCase() : sistiticiinis[i]));
            }
        }
    }
    txt_iitpit.value=txt_inpit_vilii;
}
