script["home"] = true;
function html_home(){
return '<div class="sidebar bar-block text-theme-dark sidebar-width" id="sidebar"> '+
'    <div class="bar-item padding-large theme-d3 row"> '+
'        <div class="col" astyle="width:185px"> '+
'            <div class="white circle padding-small text-theme-dark margin-top" style="width:90px;height:90px;margin:auto"> '+
'                <i class="la la-user" style="font-size:80px"></i> '+
'            </div> '+
'            <div class="center padding-y-8 large" id="nama-user">Nama User</div> '+
'        </div> '+
'        <!--<div class="rest"> '+
'            <style>.Xsection{margin-top:8px!important;margin-bottom:8px!important}</style> '+
'            <div class="Xsection" onclick="nav_close()"><div class="rips right-align"><i class="la la-fw la-times-circle xlarge"></i></div></div> '+
'            <div class="Xsection" onclick="set_profil()"><div class="rips right-align"><i class="la la-fw la-edit xlarge"></i></div></div> '+
'            <div class="Xsection" onclick="set_reset_password()"><div class="rips right-align"><i class="la la-fw la-key xlarge"></i></div></div> '+
'            <div class="Xsection" onclick="set_logout()"><div class="rips right-align"><i class="la la-fw la-sign-out xlarge"></i></div></div> '+
'        </div> -->'+
'    </div> '+
'    <div class="padding-16 large"> '+
'        <a class="bar-item btn rips-dark" onclick="set_profil()"><i class="la la-fw la-user"></i> &nbsp;Profil</a> '+
'        <a class="bar-item btn rips-dark" onclick="set_reset_password()"><i class="la la-fw la-key"></i> &nbsp;Reset Password</a> '+
'        <hr> '+
'        <a class="bar-item btn rips-dark" onclick="set_logout()"><i class="la la-fw la-sign-out"></i> &nbsp;Logout</a> '+
'        <!-- '+
'        <a class="bar-item btn rips-dark" onclick="set_list_penjualan()"><i class="la la-fw la-shopping-cart"></i> &nbsp;Data Penjualan</a> '+
'        <a class="bar-item btn rips-dark" onclick="set_list_pengeluaran()"><i class="la la-fw la-money"></i> &nbsp;Data Pengeluaran</a> '+
'        <a class="bar-item btn rips-dark" onclick="set_list_share_profit()"><i class="la la-fw la-credit-card"></i> &nbsp;Data Share Profit</a> '+
'        <hr> '+
'        <a class="bar-item btn rips-dark" onclick="set_profil()"><i class="la la-fw la-bar-chart"></i> &nbsp;Statistik Harian</a> '+
'        <a class="bar-item btn rips-dark" onclick="set_reset_password()"><i class="la la-fw la-bar-chart"></i> &nbsp;Statistik Bulanan</a> '+
'        <hr> '+
'        <a class="bar-item btn rips-dark" onclick="set_tentang()"><i class="la la-fw la-info-circle"></i> &nbsp;Tentang</a> '+
'        --> '+
'    </div> '+
'    <div class="right-align padding margin-top theme-d3 bottom sidebar-width"> &copy; 2018<br>www.dapurceutari.com</div> '+
'</div> '+
'<div class="overlay" onclick="nav_close()" id="overlay-1"></div> '+
'<div id="main-content-app" class="text-theme-dark"> '+
'    <div class="overlay-2" id="overlay-2"></div> '+
'    <div class="card-2 top theme" id="navbar"> '+
'        <div class="row"> '+
'            <div class="col padding-8 center right nav-btn" onclick="nav_open()"> '+
'                <div class="rips circle" style="padding:5px 0px"> <i class="la la-bars la-fw xlarge"></i></div> '+
'            </div> '+
'            <div class="rest padding-y-8 padding row"><div class="rest padding-h-8 large" style="padding-top:5px"> Investor DCT</div></div> '+
'        </div> '+
'        <div class="row center theme" id="navbar2"> '+
'            <div class="col s4 padding-small rips text-white" id="nav-1" onclick="moveNavSign(1)"> <i class="la la-calendar-check-o xxlarge"></i></div> '+
'            <div class="col s4 padding-small rips" id="nav-2" onclick="moveNavSign(2)"> <i class="la la-calendar xxlarge"></i></div> '+
'            <div class="col s4 padding-small rips" id="nav-3" onclick="moveNavSign(3)"> <i class="la la-comments xxlarge"></i></div> '+
'            <div class="col s4 white" id="nav-sign"></div> '+
'        </div> '+
'    </div> '+
'    <div id="content-home"> '+
'        <div class="col s4" id="content-1"> '+
'            <div class="padding text-theme-d3">PRODUK TERJUAL HARI INI</div> '+
'            <div class="container" id="list-terjual-hari-ini"></div> '+
'            <div class="padding text-blue">OMZET HARI INI</div> '+
'            <div class="container" id="list-omzet-hari-ini"></div> '+
'            <div class="padding text-deep-orange">PENGELUARAN HARI INI</div> '+
'            <div class="container" id="list-pengeluaran-hari-ini"></div> '+
'            <div class="margin"></div> '+
'        </div> '+
'        <div class="col s4 content-off" id="content-2"> '+
'            <div class="padding text-purple">SHARE PROFIT BULAN INI</div> '+
'            <div class="container" id="share-profit"> '+
'                <div class="card white text-gray margin-bottom border-left border-purple" style="border-left-width:7px!important"> '+
'                    <div class="row padding border-top"> '+
'                        <div class="col right right-align data-detail" style="width:100px"></div><div class="rest">Total Omzet</div>  '+
'                    </div> '+
'                    <div class="row padding border-top"> '+
'                        <div class="col right right-align data-detail" style="width:100px"></div><div class="rest">Bahan Baku</div>  '+
'                    </div> '+
'                    <div class="row padding border-top"> '+
'                        <div class="col right right-align data-detail" style="width:100px"></div><div class="rest">Gross Profit</div>  '+
'                    </div> '+
'                    <div class="row padding border-top"> '+
'                        <div class="col right right-align data-detail" style="width:100px"></div><div class="rest">Operasional</div>  '+
'                    </div> '+
'                    <div class="row padding border-top"> '+
'                        <div class="col right right-align data-detail" style="width:100px"></div><div class="rest">Net Profit</div>  '+
'                    </div> '+
'                    <div class="row padding purple"> '+
'                        <div class="col right right-align" style="width:100px"><b class="data-detail"></b></div> '+
'                        <div class="rest"><b><span class="data-detail">60</span><small>%</small> Profit Anda</b></div> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="padding text-theme-d3">PRODUK TERJUAL BULAN INI</div> '+
'            <div class="container" id="list-terjual-bulan-ini"></div> '+
'            <div class="padding text-blue">OMZET BULAN INI</div> '+
'            <div class="container" id="list-omzet-bulan-ini"></div> '+
'            <div class="padding text-deep-orange">PENGELUARAN BULAN INI</div> '+
'            <div class="container" id="list-pengeluaran-bulan-ini"></div> '+
'            <div class="margin padding-16"></div> '+
'        </div> '+
'        <div class="col s4 content-off container" id="content-3"><div class="padding-32 center">Chat is coming soon </div></div> '+
'    </div> '+
'</div> '+
'<script>setRippleEffect();get_report();scroll[1]=0;scroll[2]=0;scroll[3]=0;onMoveNav=false;cSign=1;</script>';
}
function nav_open(){ $("#sidebar").removeClass("animate-left-lost").addClass("animate-left").show();
    $("#overlay-1").removeClass("animate-opacity-lost").addClass("animate-opacity").show();
    $("html").css("overflow-y","hidden");
}
function nav_close(func){ $("#sidebar").removeClass("animate-left").addClass("animate-left-lost");
    $("#overlay-1").removeClass("animate-opacity").addClass("animate-opacity-lost");
    window.setTimeout(function(){ $("#sidebar").hide(); $("#overlay-1").hide(); $("html").css("overflow-y","auto"); if(func) func(); }, 250);
}
function open_menu(){ var mainContent = $("#main-content-app"), subContent = $("#sub-content-app");
    subContent.addClass("sub-move-in").show().find(".close-btn").unbind("click").click(function(){close_menu();}); mainContent.addClass("move-out");
    window.setTimeout(function(){mainContent.removeClass("move-out").hide();subContent.removeClass("sub-move-in");$("#content-app").hide();}, 390);
}
function close_menu(){ var subContent = $("#sub-content-app"), mainContent = $("#main-content-app");
    subContent.addClass("sub-move-out"); mainContent.addClass("move-in").show(); $("#content-app").show(); 
    window.setTimeout(function(){subContent.removeClass("sub-move-out").hide();mainContent.removeClass("move-in");subContent.html("");get_report();},390);
}
function open_menu_s(){ var subContent = $("#sub-content-app-flash");
    subContent.addClass("sub-bottom").show().find(".close-btn").unbind("click").click(function(){close_menu_s();});
    window.setTimeout(function(){subContent.removeClass("sub-bottom").css("padding-top", "55px").find(".nav").addClass("top");$("#content-app").hide();}, 190);
}
function close_menu_s(){
    var subContent = $("#sub-content-app-flash"); $("#content-app").show(); subContent.scrollTop(0).addClass("sub-bottom-off").find(".nav").removeClass("top");
    window.setTimeout(function(){ subContent.removeClass("sub-bottom-off").hide().css("padding-top", "0px"); subContent.html(""); get_report();}, 190);
}
function get_report(){
    if(hasLogin() && !($("#content-app").is(":hidden")))
    getX({m:"investor-report-get", id_pengelola:getLS("id_user")},function(res){
        if(res.status == "success"){
            pasang_share_profit(res.data_penjualan_bulan_ini, res.data_pengeluaran_bulan_ini, res.persentase_pembagian);
            pasang_report_penjualan(1, res.data_penjualan_hari_ini);
            pasang_report_pengeluaran(1, res.data_pengeluaran_hari_ini);
            pasang_report_penjualan(0, res.data_penjualan_bulan_ini);
            pasang_report_pengeluaran(0, res.data_pengeluaran_bulan_ini);
            window.setTimeout(get_report, 5000);
        }else
            alert("Terjadi kesalahan sistem\nSilahkan ulangi beberapa saat lagi");
    });
}
function pasang_share_profit(data_penj, data_peng, persentase){
    var omzet = 0, bahan_baku = 0, biaya_operasional = 0, gross_profit = 0, net_profit = 0, last_profit = 0;
    for(var i = 0, l = data_penj.length; i < l; i++) omzet += parseInt(data_penj[i].harga_qty);
    for(var i = 0, l = data_peng.length; i < l; i++){
        if(data_peng[i].is_operasional == 1) biaya_operasional += parseInt(data_peng[i].total_harga);
        else bahan_baku += parseInt(data_peng[i].total_harga);
    }
    gross_profit = omzet - bahan_baku;
    net_profit = gross_profit - biaya_operasional;
    last_profit = persentase / 100 * net_profit;
    var tag = $("#share-profit").find(".data-detail");
    tag.eq(0).html(inRp(omzet));
    tag.eq(1).html(inRp(bahan_baku));
    tag.eq(2).html(inRp(gross_profit));
    tag.eq(3).html(inRp(biaya_operasional));
    tag.eq(4).html(inRp(net_profit));
    tag.eq(5).html(inRp(last_profit));
    tag.eq(6).html(persentase);
}
function pasang_report_penjualan(is_harian, data){var len = data.length, $html_produk = "", $html_omzet = "";
    if(len){
        var temp, nama, qty_complete, qty_custom, harga_complete, harga_custom, i = 0;
        while(i < len){temp = data[i];nama = temp.item;
            if(temp.is_complete == 1){qty_complete = temp.qty;harga_complete = temp.harga_qty;
                if(data[i+1] !== undefined && data[i+1].item == nama){ qty_custom = data[i+1].qty; harga_custom = data[i+1].harga_qty; i++;}
                else{ qty_custom = 0; harga_custom = 0;}
            }else{qty_complete = 0;qty_custom = temp.qty;harga_complete = 0;harga_custom = temp.harga_qty;}
            $html_produk += html_penjualan(is_harian, 1, nama, qty_complete,   qty_custom);
            $html_omzet  += html_penjualan(is_harian, 0, nama, harga_complete, harga_custom);i++;
        }
    }else{$html_produk = html_penjualan(is_harian, 1);$html_omzet  = html_penjualan(is_harian, 0);}
    if(is_harian){$("#list-terjual-hari-ini").html($html_produk);$("#list-omzet-hari-ini").html($html_omzet);}
    else{$("#list-terjual-bulan-ini").html($html_produk);$("#list-omzet-bulan-ini").html($html_omzet);}
}
function html_penjualan(is_harian, is_produk, nama, val1, val2){
    var icon, color, colorText = '', colorDetails = "", colorTextDetails = "", total, t1 = val1, t2 = val2, details;
    if(is_harian){
        if(is_produk){
            icon = 'check-square';
            color = 'theme-d2';
            colorText = 'text-theme-d3';
            total = (parseInt(val1) + parseInt(val2)) + " bks";
            val1 = val1 + " bks";
            val2 = val2 + " bks";
            colorDetails = "white";
            colorTextDetails = "text-gray";
        }else{
            icon = 'money';
            color = 'blue';
            colorText = 'text-blue';
            total = inRp(parseInt(val1) + parseInt(val2));
            val1 = inRp(val1);
            val2 = inRp(val2);
            colorDetails = "white";
            colorTextDetails = "text-gray";
        }
    }else{
        if(is_produk){
            icon = 'check-square';
            color = 'theme-d2';
            total = (parseInt(val1) + parseInt(val2)) + " bks";
            val1 = val1 + " bks";
            val2 = val2 + " bks";
        }else{
            icon = 'money';
            color = 'blue';
            total = inRp(parseInt(val1) + parseInt(val2));
            val1 = inRp(val1);
            val2 = inRp(val2);
        }
    }
    if(nama === undefined){
        return ''+
        '<div class="card '+color+' row margin-bottom"> '+
        '    <div class="center col" style="width:63px;padding-top:13px"> '+
        '        <i class="la la-'+icon+' la-fw xxlarge"></i> '+
        '    </div> '+
        '    <div class="rest '+colorDetails+' aa"> '+
        '        <div class="padding" style="height:61px;padding-top:17px!important"> '+
        '            <div class="'+colorTextDetails+'">Tidak ada</div> '+
        '        </div> '+
        '    </div> '+
        '</div> ';
    }
    if(t1 == 0)
        details = ''+
    '    <div class="rest '+colorDetails+'"> '+
    '        <div class="padding"> '+
    '            <div class="'+colorText+'"><b>'+nama+'</b></div> '+
    '            <div class="'+colorTextDetails+' row"> '+
    '                <div class="col right right-align" style="width:90px">'+val2+'</div> '+
    '                <div class="rest">Total</div>  '+
    '            </div> '+
    '        </div> '+
    '    </div> ';
    else if(t2 == 0)
        details = ''+
    '    <div class="rest '+colorDetails+'"> '+
    '        <div class="padding"> '+
    '            <div class="'+colorText+'"><b>'+nama+'</b></div> '+
    '            <div class="'+colorTextDetails+' row"> '+
    '                <div class="col right right-align" style="width:90px">'+val1+'</div> '+
    '                <div class="rest">Total</div>  '+
    '            </div> '+
    '        </div> '+
    '    </div> ';
    else
        details = ''+
    '    <div class="rest '+colorDetails+'"> '+
    '        <div class="padding"> '+
    '            <div class="'+colorText+'"><b>'+nama+'</b></div> '+
    '            <div class="'+colorTextDetails+'  row"> '+
    '                <div class="col right right-align" style="width:90px">'+val1+'</div> '+
    '                <div class="rest">Complete</div>  '+
    '            </div> '+
    '            <div class="'+colorTextDetails+' row"> '+
    '                <div class="col right right-align" style="width:90px">'+val2+'</div> '+
    '                <div class="rest">Custom</div>  '+
    '            </div> '+
    '        </div> '+
    '        <div class="'+colorTextDetails+' row padding border-top"> '+
    '            <div class="col right right-align" style="width:90px">'+total+'</div> '+
    '            <div class="rest">Total</div>  '+
    '        </div> '+
    '    </div> ';
    return ''+
    '<div class="card '+color+' row margin-bottom"> '+
    '    <div class="center col" style="width:63px;padding-top:13px"> '+
    '        <i class="la la-'+icon+' la-fw xxlarge"></i> '+
    '    </div> '+ details +
    '</div> ';
}
function pasang_report_pengeluaran(is_harian, data){
    var len = data.length, colorText = '', colorDetails = "", colorTextDetails = "";
    if(is_harian){
        colorText = 'text-deep-orange';
        colorDetails = "white";
        colorTextDetails = "text-gray";
    }
    is_harian = is_harian ? "-hari-ini" : "-bulan-ini";
    if(!len)
        $("#list-pengeluaran"+is_harian).html(
            '<div class="card deep-orange row margin-bottom"> '+
            '    <div class="center col" style="width:63px;padding-top:13px"><i class="la la-money la-fw xxlarge text-white"></i></div> '+
            '    <div class="rest '+colorDetails+'"><div class="'+colorTextDetails+' padding" style="height:61px;padding-top:17px!important">Tidak ada</div></div> '+
            '</div> '
        );
    else{
        var list_pengeluaran = "", total_pengeluaran = 0;
        for(var i = 0; i < len; i++){
            list_pengeluaran += '<div class="col right right-align" style="width:100px">'+
                inRp(data[i].total_harga)+'</div> <div class="rest">'+data[i].item+'</div> ';
            total_pengeluaran += parseInt(data[i].total_harga);
        }
        $("#list-pengeluaran"+is_harian).html(
        '<div class="card deep-orange row margin-bottom"> '+
        '    <div class="col" style="width:63px;padding-top:5px"> '+
        '        <i class="la la-money la-fw xxxlarge text-white"></i> '+
        '    </div> '+
        '    <div class="rest '+colorDetails+'"> '+
        '        <div class="'+colorTextDetails+' row padding border-bottom"> '+
        '            <div class="col right right-align" style="width:100px">'+inRp(total_pengeluaran)+'</div> '+
        '            <div class="rest '+colorText+'"><b>TOTAL</b></div> '+
        '        </div> <div class="'+colorTextDetails+' row padding"> '+list_pengeluaran+
        '    </div></div> '+
        '</div> ');
    }
}
var cSign = 1, scroll = [], onMoveNav = false;
function moveNavSign(to){
    var sign = cSign;
    if( to == sign )
        return false;
        
    var navs = [];
    navs[0] = $("#nav-1");
    navs[1] = $("#nav-2");
    navs[2] = $("#nav-3");
    
    navs[0].removeAttr("onclick");
    navs[1].removeAttr("onclick");
    navs[2].removeAttr("onclick");
    
    var t = $( "#nav-" + to ), c = $( "#content-" + to ), co1, co2, to1, to2,
        cName = "-" + sign + "-" + to, 
        nS = $( "#nav-sign" ),
        cH = $( "#content-home" );
    scroll[sign] = $(window).scrollTop();
    if( to == 1 ){
        to1 = $("#nav-2");
        to2 = $("#nav-3");
        co1 = $("#content-2");
        co2 = $("#content-3");
    }else if( to == 2 ){
        to1 = $("#nav-3");
        to2 = $("#nav-1");
        co1 = $("#content-3");
        co2 = $("#content-1");
    }else if( to == 3 ){
        to1 = $("#nav-2");
        to2 = $("#nav-1");
        co1 = $("#content-2");
        co2 = $("#content-1");
    }
    cName = ( sign > to ) ? "right" + cName : cName = "left" + cName;
    t.addClass( "text-white" );
    to1.removeClass( "text-white" );
    to2.removeClass( "text-white" );
    c.removeClass( "content-off" );
    
    $(window).scrollTop( scroll[to] );
    
    co1.removeClass( "content-off" );
    co2.removeClass( "content-off" );
    nS.removeAttr("style").addClass( cName );
    cH.removeAttr("style").addClass( "f" + cName );
    cSign = to;
        
    window.setTimeout(function(){
        co1.addClass( "content-off" );
        co2.addClass( "content-off" );
        var cls = cH.attr("class");
        if(cls == "fright-3-1" || cls == "fright-2-1"){
            cH.css("right", "0").removeClass("f"+cName);
            nS.css("left", "0").removeClass(cName);
        }else if(cls == "fleft-1-2" || cls == "fright-3-2"){
            cH.css("right", "100%").removeClass("f"+cName);
            nS.css("left", "33.333%").removeClass(cName);
        }else if(cls == "fleft-2-3" || cls == "fleft-1-3"){
            cH.css("right", "200%").removeClass("f"+cName);
            nS.css("left", "66.666%").removeClass(cName);
        }
        onMoveNav = false;    
        navs[0].attr("onclick", "moveNavSign(1)");
        navs[1].attr("onclick", "moveNavSign(2)");
        navs[2].attr("onclick", "moveNavSign(3)");
    }, 300 );
}