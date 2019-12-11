(function () {
    "use strict";

    var messageBanner;
    var iframe;
    // 每次加载新页面时都必须运行初始化函数
    Office.initialize = function (reason) {
        $(document).ready(function () {
            //var element = document.querySelector('.ms-MessageBanner');
            //messageBanner = new fabric.MessageBanner(element);
            //messageBanner.hideBanner();

            //$('#get-data-from-selection').click(goToLinkAddress);            
            $("#btnGoto").click(function () { goToLinkAddress(); });
            $("#btnClose").click(function () { $(".fail-tips").hide(); });
            
        });
        
        //initForIFrame('http://www.bitools.cn/app/#/preview/0f94981f-fc7a-1bfd-1a308-1bfd1a30856');
    };

    // 从当前选择的文档内容中读取数据并显示通知
    //function getDataFromSelection() {
    //    if (Office.context.document.getSelectedDataAsync) {
    //        Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
    //            function (result) {
    //                if (result.status === Office.AsyncResultStatus.Succeeded) {
    //                    showNotification('选定的文本为:', '"' + result.value + '"');
    //                } else {
    //                    showNotification('错误:', result.error.message);
    //                }
    //            }
    //        );
    //    } else {
    //        app.showNotification('错误:', '此主机应用程序不支持读取选择数据。');
    //    }
    //}

    
    
    // 用于显示通知的帮助程序函数
    function showNotification(header, content) {
        $(".fail-tips").show();
        $(".msg-fail-content").text(content);
    }


    function initForIFrame(url)
    {
        $("#forTxtLink").attr("src", url); 
    }

    function goToLinkAddress()
    {
        var txtLink = $("#txtLink").val().trim();
        if (txtLink.length == 0)
        {
            showNotification('', '无效的图册分享链接');
            return false;
        }
        var reg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if (!reg.test(txtLink)) {
            showNotification('', '无效的图册分享链接');
            return false;
        }
        var urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        var url = urlReg.exec(txtLink)[0];
        if (url != 'www.bitools.cn')
        {
            showNotification('', '无效的图册分享链接');
            return false;
        }
        $("#forTxtLink").attr("src", txtLink); 
        $("#forTxtLink").show();
        $(".bit-main").hide();
    }
})();