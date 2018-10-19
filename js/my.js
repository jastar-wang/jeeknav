/* Mobile nav */
var oMenu = document.getElementById('menu');
var oBtn = oMenu.getElementsByTagName('a')[0];
var oLeftBar = document.getElementById('leftBar');
oBtn.onclick = function () {
    if (oLeftBar.offsetLeft == 0) {
        oLeftBar.style.left = -249 + 'px';
    } else {
        oLeftBar.style.left = 0 + 'px';
    }
    if (document.documentElement.clientWidth <= 481) {
        document.onclick = function () {
            if (oLeftBar.offsetLeft == 0) {
                oLeftBar.style.left = -249 + 'px';
            }
        }
    }
}

/* Navigation style */
$(".nav-item a").click(function () {
    $(".nav-item a").removeClass("active");
    $(this).addClass("active");
    $(".nav .item").removeClass("active");
    $(this).parents("ul").prev().addClass("active");
});

/* Search style */
$(".search-li").click(function () {
    $(".search-li").removeClass("active");
    $(this).addClass("active");
    $("#searchForm").attr("action", $(this).attr("url"));
    $("#searchText").attr("name", $(this).attr("name"));
    $("#searchBtn").text($(this).text());
});

/* About */
$(".jeek-about").click(function () {
    layer.open({
        title: 'About',
        skin: 'layui-layer-lan',
        shadeClose: true,
        closeBtn: 0,
        content: $("#jeek-about").html()
    });
});