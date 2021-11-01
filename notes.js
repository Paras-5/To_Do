var e = [];
window.onload = function() {
  if (JSON.parse(localStorage.getItem("e")) != null)
    e = JSON.parse(localStorage.getItem("e"));
  console.log(e);
  display();
};
function addElement() {
  if (document.querySelector(".addnts").value.trim() != "") {
    e.push(document.querySelector(".addnts").value.trim());
    document.querySelector(".addnts").value="";
    if (localStorage.getItem("e") == null) {
      localStorage.setItem("e", JSON.stringify(e));
    } else {
      localStorage.setItem("e", JSON.stringify(e));
    }
    display();
  }
}
function display() {
  document.querySelector(".list").innerHTML = "";
  for (var i = 0; i < e.length; i++)
    document.querySelector(".list").innerHTML +=
      "<center><div class='element'>" +
      e[i] +
      "<img class='tick' src = 'tick.png' onclick='strike(" +
      i +
      ")'><img class='dustbin' src = 'del.png' onclick='del(" +
      i +
      ")'></div></center><br>";
}
function del(index) {
  e.splice(index, 1);
  if (localStorage.getItem("e") == null) {
    localStorage.setItem("e", JSON.stringify(e));
  } else {
    localStorage.setItem("e", JSON.stringify(e));
  }
  display();
}
function strike(index) {
  if (e[index].includes("<strike>")) {
    e[index] = e[index].replace("<strike>", "");
  } else {
    e[index] = "<strike>" + e[index] + "</strike>";
  }
  if (localStorage.getItem("e") == null) {
    localStorage.setItem("e", JSON.stringify(e));
  } else {
    localStorage.setItem("e", JSON.stringify(e));
  }
  display();
}
