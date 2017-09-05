

function strategyAdd(){
    window.location = "/manage/toStrategyPage";
}

function queryStrategy(){
    var fmac=$('#fmac').val();
    var fsn=$('#fsn').val();
    var fregion=$('#fregion').val();
    var fsw=$('#fsw').val();
    var fhw=$('#fhw').val();
    window.location = "/manage/strategQuery?fmac=" + fmac + "&fsn=" + fsn + "&fregion=" + fregion + "&fsw=" + fsw+ "&fhw=" + fhw;
}