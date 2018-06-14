let refBtn=document.getElementById("getNew");
refBtn.addEventListener("click",function(){
    getNew();
});

getNew();
function getNew(){
    var xmlHttp = new XMLHttpRequest();
    var url="https://favqs.com/api/qotd";
    xmlHttp.open("GET",url,true);
    xmlHttp.send();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var qObj = JSON.parse(this.responseText);
                var quote=qObj["quote"].body;
                document.getElementById("quote").innerText=quote;
            }
    }
}