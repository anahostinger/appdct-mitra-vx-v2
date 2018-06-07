script["list-share-profit"] = true;
function html_list_share_profit(){
return '<div id="the-sub-content-app"> '+
'    <style>.w100{width:100px}</style> '+
'    <div class="card theme nav top"> '+
'        <div class="row"> '+
'            <div class="col padding-8 center nav-btn"> '+
'                <div class="rips circle close-btn" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'            </div> '+
'            <div class="col right padding-8 center nav-btn hide"> '+
'                <div class="rips circle save-btn" style="padding:5px 0px"><i class="la la-check la-fw xlarge"></i></div> '+
'            </div> '+
'            <div class="rest padding-8 row large"><div style="padding-top:5px"> List Pengeluaran</div></div> '+
'        </div> '+
'    </div> '+
'    <div class="content-of-sub"> '+
'        <div class="padding-16 center loading"><i class="la la-circle-o-notch la-spin text-theme-d3" style="font-size:25px"></i></div> '+
'        <div id="list-share"></div> '+
'    </div> '+
'</div> '+
'<script>setRippleEffect();ambil_data_share();</script> ';
}
function ambil_data_share(){var loading = $(".loading"), list = $("#list-share"); loading.show(); list.hide();
    getX({m:"pengelola-share-profit-list",id_pengelola:getLS("id_pengelola")},function(res){
    if(res.status=="success"){set_data_share(res.data);loading.hide();list.show();}else alert("Terjadi kesalahan sistem");});
}
function set_data_share(data){var omz = data.total_omzet, bhn = data.bahan_baku, opp = data.operasional, blns = susun_tanggal(omz, bhn, opp),
    bln="", t1="", t2="", t3="", t4="", t5="", t6=data.share_profit, t7="", l = blns.length, i = 0,
    html = "<div class=\"padding-16 center loading text-gray\">Data share profit kosong</div>";
    if(l){ html = ""; while(i < l){bln = blns[i];t1 = parseInt(cari_data(bln, omz));t2 = parseInt(cari_data(bln, bhn));t3 = t1 - t2;
        t4 = parseInt(cari_data(bln, opp));t5 = t3 - t4;t7 = t6*t5/100;if(t7 < 0) t7 = 0;html += html_data_share(bln, t1, t2, t3, t4, t5, t6, t7);i++;}
    };$("#list-share").html(html);
}
function html_data_share(bln, t1, t2, t3, t4, t5, t6, t7){return '<div class="padding text-purple">SHARE PROFIT BULAN '+showBln(bln)+'</div> '+
    '<div class="container" id="share-profit"> '+
    '    <div class="card white text-gray margin-bottom border-left border-purple" style="border-left-width:7px!important"> '+
    '            <div class="row padding border-top"><div class="col right right-align w100">'+inRp(t1)+'</div><div class="rest">Total Omzet</div></div> '+
    '            <div class="row padding border-top"><div class="col right right-align w100">'+inRp(t2)+'</div><div class="rest">Bahan Baku</div></div> '+
    '            <div class="row padding border-top"><div class="col right right-align w100">'+inRp(t3)+'</div><div class="rest">Gross Profit</div></div> '+
    '            <div class="row padding border-top"><div class="col right right-align w100">'+inRp(t4)+'</div><div class="rest">Operasional</div></div> '+
    '            <div class="row padding border-top"><div class="col right right-align w100">'+inRp(t5)+'</div><div class="rest">Net Profit</div></div> '+
    '            <div class="row padding purple"> '+
    '                <div class="col right right-align w100"><b>'+inRp(t7)+'</b></div><div class="rest"><b>'+t6+'<small>%</small> Profit Anda</b></div> '+
    '            </div> '+
    '    </div> '+
    '</div> ';
}
function susun_tanggal(tb_omz, tb_bhn, tb_opp){ var bln = ambil_tanggal(tb_omz), un_bln = [];
    bln = bln.concat(ambil_tanggal(tb_bhn)); bln = bln.concat(ambil_tanggal(tb_opp)); bln.sort(); bln.reverse();
    $.each(bln, function(i, el){ if($.inArray(el, un_bln) === -1) un_bln.push(el) }); return un_bln;
}
function ambil_tanggal(tb){var arr=[];for(var i=0,l=tb.length;i<l;i++) arr.push(tb[i].bulan); return arr}
function cari_data(bln, tbl){
    var val = false; for(var i = 0, l = tbl.length; i < l; i++) if(tbl[i].bulan == bln){val = tbl[i].nilai;break;}if(val === false) val = 0; return val;
}
function showBln(bln){bln = bln.split("-");return getMonthNames(parseInt(bln[1])-1).toUpperCase() + " " + bln[0];}