//1

function dropdown_list() {
    let Model = document.getElementById("Model").value;
    let Year = document.getElementById("Year").value;
             alert("Dear user your car model is :  " + Model + "  and your car year is :  " + Year )
}

 //2

function changing(){
    let mycolor=document.getElementById("mycolor");
    let mycolor2=document.getElementById("mycolor2").value;
    mycolor.style.background=mycolor2;
}

//3

function change_link() {
    const link = document.getElementById('link');
    link.href = 'https://www.twitter.com';
}

//4
function function1() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("CV"));
    ul.appendChild(li);
  }

  //5
  function font_color() {
    const arr = [...document.getElementsByTagName('li')];
    arr.forEach((el, i) => el.style.color = i % 2 ? 'red' : 'green');
}

  //6
  function width_height() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    document.getElementById('w_h').innerHTML = `<h4> Width: ${width}, Height: ${height}</h4>`;
}
