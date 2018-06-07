script["apps"] = true;
function set_login(){ $("body").removeClass("light-gray").addClass("white"); $("#content-app").html(html_login());}
function set_home(){
    $("body").removeClass("white").addClass("light-gray").find("#content-app").html(html_home());
    var nama = getLS("nama").split(" "); $("#nama-user").html(nama[0]);
}
function set_logout(){ if(confirm("Yakin akan logout?")){
    delLS("id_user"); $("body").removeClass("light-gray").addClass("white");
    nav_close(function(){ $("#content-app").html(html_first_screen()); window.setTimeout(function(){ play(); }, 579); })
}}
function set_profil(){
    $("#sub-content-app").html(html_profil()).removeClass("light-gray").addClass("white");
    nav_close(function(){ open_menu(); });
}
function set_reset_password(){
    $("#sub-content-app").html(html_reset_password()).removeClass("light-gray").addClass("white");
    nav_close(function(){ open_menu(); });
}
function set_tentang(){}