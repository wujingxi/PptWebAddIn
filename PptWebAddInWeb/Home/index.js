(function () {
    "use strict";

    var messageBanner;
    var iframe;
    // 每次加载新页面时都必须运行初始化函数
    Office.initialize = function (reason) {
        $(document).ready(function () {        
            $("#btnGoto").click(function () { goToLinkAddress(); });
            $("#btnConfirm").click(function () { confirmLinkAddress(); });
        });
        
        //initForIFrame('http://www.bitools.cn/app/#/preview/0f94981f-fc7a-1bfd-1a308-1bfd1a30856');
    };

    
    
    // 用于显示通知的帮助程序函数
    function showNotification(header, content) {
        $(".webpage-address-tips").show();
        $(".msg-content").text(content);
    }
    function hideNotification() {
        $(".webpage-address-tips").hide();
        $(".msg-content").text('');
        
        $(".logo").show();
        $("#div_cont_init").show();
        $("#forTxtLink").parent().hide();
        $("#btnGoto").attr('data-bind', 'goto');
        $("#btnGoto").children('span').text('预览');
        $("#btnConfirm").show();
    }

    function initForIFrame(url)
    {
        $("#forTxtLink").attr("src", url); 
    }

    function goToLinkAddress()
    {
        if ($("#btnGoto").attr('data-bind') == 'preview')
        {
            hideNotification();
            return false;
        }
        var txtLink = $("#txtLink").val().trim();
        if (txtLink.length == 0) {
            showNotification('', '无效的图册分享链接');
            return false;
        }
        txtLink = 'https://' + txtLink;
        var reg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if (!reg.test(txtLink)) {
            showNotification('', '无效的图册分享链接');
            return false;
        }
        var urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        var url = urlReg.exec(txtLink)[0];
        if (url != 'www.bitools.cn') {
            showNotification('', '无效的图册分享链接');
            return false;
        }

        $(".logo").hide();
        $("#forTxtLink").attr("src", txtLink);
        $("#forTxtLink").parent().show();
        $("#div_cont_init").hide();
        $("#btnGoto").attr('data-bind', 'preview');
        $("#btnGoto").children('span').text('返回');
        $("#btnConfirm").hide();
        //showNotification('', '链接源：' + txtLink);
    }
    function confirmLinkAddress()
    {
        var txtLink = $("#txtLink").val().trim();
        if (txtLink.length == 0) {
            showNotification('', '无效的图册分享链接');
            return false;
        }
        txtLink = 'https://' + txtLink;
        var reg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if (!reg.test(txtLink)) {
            showNotification('', '无效的图册分享链接');
            return false;
        }
        var urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        var url = urlReg.exec(txtLink)[0];
        if (url != 'www.bitools.cn') {
            showNotification('', '无效的图册分享链接');
            return false;
        }
        $(".logo").hide();
        $("#forTxtLink").addClass("o");
        $("#forTxtLink").attr("src", txtLink);
        $("#forTxtLink").parent().show();
        $("#div_cont_init").hide();
        $(".container-fluid").hide();
    }


})();