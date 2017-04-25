function mimimi(input,output,c){
    var iliminitis=['a','e,','i','o','u','á','é,','í','ó','ú','ä','ë,','ï','ö','ü']
    var txt_inpit=document.getElementById(input);
    var txt_iitpit=document.getElementById(output);
    var txt_inpit_vilii=txt_inpit.value;
    for (var i=0;i<iliminitis.length;i++){
        if (txt_inpit_vilii.indexOf(iliminitis[i])>-1){
            txt_inpit_vilii= txt_inpit_vilii.replace(new RegExp("\\" + iliminitis[i], 'gi'),c);
        }
    }
    txt_iitpit.value=txt_inpit_vilii;
}
