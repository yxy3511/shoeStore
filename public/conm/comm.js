/**
 * Created by lenovo on 2016/12/21.
 */

function findallin( ){

    var platform= $("#platform").val();
    //alert(platform);
    var startDate= $("#startDate").val();
    var endDate= $("#endDate").val();
    var action =$("#action").val();
   // alert(startDate);
    // startDate.getTime();
    //alert(typeof startDate);





  /*  var startDateTimeLong =0;
       if (startDate != null && startDate != undefined && startDate != '') {
           var startDateTime = new Date(Date.parse(startDate.replace(/-/g, "/")));
           //alert(startDateTime.getTime());
           startDateTimeLong=startDateTime.getTime();
       }
    //alert(startDateTimeLong);
    var endDateTimeLong=0;
    if (endDate != null && endDate != undefined && endDate != '') {
        var endDateTime = new Date(Date.parse(endDate.replace(/-/g, "/")));
        //alert(endDateTime.getTime());
        endDateTimeLong=endDateTime.getTime();

    }*/


    if ((startDate != null && startDate != undefined && startDate != '')&&(endDate != null && endDate != undefined && endDate != '')) {
       if(startDate>endDate){
           alert("开始日期不能大于结束日期");
           return ;
       }
    }
   //alert(endDateTimeLong);


    //console.log("platform:"+platform);


    //alert("0000"+platform);


    //if (platform != -1 && action != -1) {
    //alert("1111"+platform);
    //window.location = "/contentsFind?platform=" + platform;
    //}





    //if ((action != null && action != undefined && action != '')  && (platform != null && platform != undefined && platform != '' ) && (startDate == null && startDate == undefined && startDate == '')   && (endDate == null && endDate == undefined && endDate == '') ) {
    //alert("2222"+platform);

    //if(platform == "-1"  && action =="-1"&& (startDate == null && startDate == undefined && startDate == '')   && (endDate == null && endDate == undefined && endDate == '') ){
    //alert("3333"+platform);
    //window.location = "/contents?index=1&size=100";
    //  }else {

    //window.location = "/contentsFindActionPlatform?platform=" + platform + "&action=" + action;
    //  }
    //}


    //if ((action != null && action != undefined && action != '')  && (platform != null && platform != undefined && platform != '' ) && (startDate != null && startDate != undefined && startDate != '') && (endDate == null && endDate == undefined && endDate == '')) {
       // startDateTimeLong = startDateTimeLong+"";
        //alert(typeof  platform);
    //alert("4444"+platform);

    //  window.location = "/contentsFindActionPlatformStartDateTime?platform=" + platform + "&action=" + action + "&startDateTime=" + startDateTimeLong;
    //}

    //if ((action != null && action != undefined && action != '')  && (platform != null && platform != undefined && platform != '' ) && (endDate != null && endDate != undefined && endDate != '')&& (startDate == null && startDate == undefined && startDate == '') ) {
    //alert("5555"+platform);
    // window.location = "/contentsFindActionPlatformEndDateTime?platform=" + platform + "&action=" + action + "&endDateTime=" + endDateTimeLong ;
    //}

    //if ((action != null && action != undefined && action != '')  && (platform != null && platform != undefined && platform != '' ) && (startDate != null && startDate != undefined && startDate != '')   && (endDate != null && endDate != undefined && endDate != '') ) {
    //alert("6666"+platform);
    //window.location = "/contentsFindActionPlatformStartDateTimeEndDateTime?platform=" + platform + "&action=" + action + "&startDateTime=" + startDateTimeLong + "&endDateTime=" + endDateTimeLong;
    //}

    window.location = "/contentsFindActionPlatformStartDateTimeEndDateTime?platform=" + platform + "&action=" + action + "&startDateTime=" + startDate + "&endDateTime=" + endDate;



// alert("dddd")
}
function strateBack(){
    window.location = "/manage/admin";
}
function contentsExport( ){
    var platform= $("#platform").val();
    //alert(platform);
    var startDate= $("#startDate").val();
    var endDate= $("#endDate").val();
    var action =$("#action").val();
    // alert(startDate);
    // startDate.getTime();
    //alert(typeof startDate);





   /* var startDateTimeLong =0;
    if (startDate != null && startDate != undefined && startDate != '') {
        var startDateTime = new Date(Date.parse(startDate.replace(/-/g, "/")));
        //alert(startDateTime.getTime());
        startDateTimeLong=startDateTime.getTime();
    }
    //alert(startDateTimeLong);
    var endDateTimeLong=0;
    if (endDate != null && endDate != undefined && endDate != '') {
        var endDateTime = new Date(Date.parse(endDate.replace(/-/g, "/")));
        //alert(endDateTime.getTime());
        endDateTimeLong=endDateTime.getTime();

    }*/

    if ((startDate != null && startDate != undefined && startDate != '')&&(endDate != null && endDate != undefined && endDate != '')) {
        if(startDate>endDate){
            alert("开始日期不能大于结束日期");
            return ;
        }
    }
     /* if (platform != null && platform != undefined && platform != '') {
        alert(1111);
        window.location = "/export?platform=" + platform;
    }


    if ((action != null && action != undefined && action != '')  && (platform != null && platform != undefined && platform != '' )) {
        window.location = "/export?platform=" + platform + "&action=" + action;
    }


    if ((action != null && action != undefined && action != '')  && (platform != null && platform != undefined && platform != '' ) && (startDateTimeLong != null && startDateTimeLong != undefined && startDateTimeLong != '' )) {
        // startDateTimeLong = startDateTimeLong+"";
        //alert(typeof  platform);
        window.location = "/export?platform=" + platform + "&action=" + action + "&startDateTime=" + startDateTimeLong;
    }

    if ((action != null && action != undefined && action != '')  && (platform != null && platform != undefined && platform != '' ) && (endDateTimeLong != null && endDateTimeLong != undefined && endDateTimeLong != '' )) {
        window.location = "/export?platform=" + platform + "&action=" + action + "&endDateTime=" + endDateTimeLong ;
    }


    if ((action != null && action != undefined && action != '')  && (platform != null && platform != undefined && platform != '' ) && (startDateTimeLong != null && startDateTimeLong != undefined && startDateTimeLong != '' ) && (endDateTimeLong != null && endDateTimeLong != undefined && endDateTimeLong != '' )) {
        window.location = "/export?platform=" + platform + "&action=" + action + "&startDateTime=" + startDateTimeLong + "&endDateTime=" + endDateTimeLong;
    }*/

    window.location = "/export?platform=" + platform + "&action=" + action + "&startDateTime=" + startDate + "&endDateTime=" + endDate;
}



