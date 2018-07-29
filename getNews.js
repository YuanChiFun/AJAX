window.onload = function() {
    var btn = document.getElementById("btn");

    function inner(data) {
        var data = JSON.parse(data);
        var oUL = document.getElementById("ul1");
        var News = '';
        for (var i = 0; i < data.length; i++) {
            News += '<li><a href="">' + data[i].title + '</a><span>' + data[i].time + '</span></li>';
        }
        oUL.innerHTML = News;
    };

    function ajax(method, url, data, success) {
        var xhr = null
        try {
            xhr = new XMLHttpRequest();
        } catch (ex) {
            xhr = new ActiveXObject('microsoft.XMLHttp');
        }
        if (method == "get" && data) {
            url += '?' + data;
        }
        xhr.open("get", "getNews.php", true);
        if (method == "post") {
            xhr.setRequestHeader('content-type', "applacation/x-www-form-urlencoded");
            xhr.send(data);
        } else {
            xhr.send();
        };

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) { //readyState:send()的状态，4表示完成.
                if (xhr.status == 200) { //status:http状态
                    success && success(xhr.responseText);
                } else {
                    alert("出错了" + this.status);
                }
            }
        };
    };
    btn.onclick = function() {
        ajax("get", "getNews.php", "", inner);
        setInterval(function() {
            ajax("get", "getNews.php", "", inner);
        }, 1000);
    };
}