/**
 * Created by Administrator on 2016-08-11.
 */

//增加新的记事
function addnote() {
    var jiedian=table.children[1];

    var newdiv =document.createElement("div");
    var newdivt=document.createElement("div");
    var newdivb=document.createElement("div");

    var newinput1=document.createElement("input");
    var newinput2=document.createElement("input");
    var newinput3=document.createElement("input");

    var newa1=document.createElement("a");
    var newa2=document.createElement("a");

    newinput1.setAttribute("type","text");
    newinput2.setAttribute("type","text");
    newinput3.setAttribute("type","text");
    newinput1.setAttribute("placeholder","Date");
    newinput2.setAttribute("placeholder","Weather");
    newinput3.setAttribute("placeholder","Mood");
    newa1.setAttribute("href","./edit/edit.html")
    newa1.innerHTML="<div  class='bt' onmousedown='change1(this)' onmouseup='change2(this)' >Edit</div>";
    newa2.innerHTML="<div  class='bt' onclick='del(this.parentNode)'onmousedown='change1(this)' onmouseup='change2(this)'>Delete</div>";

    newdiv.className="note";
    newdivt.className="tabline";
    newdivb.className="btstyle";
    newinput1.className="shuru";
    newinput2.className="shuru";
    newinput3.className="shuru";
    newa1.className="bt";
    newa2.className="bt";

    olddiv = document.getElementById("table");
    olddiv.insertBefore(newdiv,jiedian);
    newdiv.appendChild(newdivt);
    newdiv.appendChild(newdivb);
    newdivt.appendChild(newinput1);
    newdivt.appendChild(newinput2);
    newdivt.appendChild(newinput3);
    newdivb.appendChild(newa1);
    newdivb.appendChild(newa2);
}
function del(obj){
    var  note=obj.parentNode.parentNode;
    note.parentNode.removeChild(note);
}
//获取时间
var ndate=function datetoday(){
    today = new Date();
    var date;
    var centry ;
    centry="";
    if  (today.getFullYear()<2000 )
    centry = "19" ;
    date1 = centry + (today.getFullYear())  + "-" + (today.getMonth() + 1 ) + "-" + today.getDate();
    date2 = "";
    document.write( date1+date2);
}
//增加按钮的样式
function changebg(){
    var addFU=document.getElementById("cgbg");
    addFU.onmousedown=function(){
        this.className = "addfu2";
    }
    addFU.onmouseup=function(){
        this.className="addfu";
    }
}
//编辑删除按钮样式
function change1(obj){
        obj.className = "bt2";
}
function change2(obj){
    obj.className = "bt";
}
