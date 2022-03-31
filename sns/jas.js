burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
list = document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    list.classList.toggle('vc');
    navbar.classList.toggle('hlist');
})

list.addEventListener('click',()=>{
    list.classList.toggle('vc');
    navbar.classList.toggle('hlist');
})

now = new Date();
localtime = now.toString();
// document.write("<p><strong>Local time:</strong> " + localtime + "</p>");
document.getElementById('time').innerHTML = localtime;


document.getElementById("temp").onclick = function() {
    document.getElementById("b2").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b1").style.display = "block";
    document.getElementById("b5").style.display = "none";
// }
}

document.getElementById("temp1").onclick = function() {
    document.getElementById("b2").style.display = "block";
    document.getElementById("b1").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b5").style.display = "none";
    // document.getElementById("b2").style.display = "none";
}
document.getElementById("temp2").onclick = function() {
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b3").style.display = "block";
    document.getElementById("b5").style.display = "none";
}
document.getElementById("temp3").onclick = function() {
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "block";
    document.getElementById("b5").style.display = "none";
}
document.getElementById("temp4").onclick = function() {
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b5").style.display = "block";
}

function check() {
    document.writeln('Thank you '+document.hack.name.value);
}burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
list = document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    list.classList.toggle('vc');
    navbar.classList.toggle('hlist');
})

list.addEventListener('click',()=>{
    list.classList.toggle('vc');
    navbar.classList.toggle('hlist');
})

now = new Date();
localtime = now.toString();
// document.write("<p><strong>Local time:</strong> " + localtime + "</p>");
document.getElementById('time').innerHTML = localtime;


document.getElementById("temp").onclick = function() {
    document.getElementById("b2").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b1").style.display = "block";
    document.getElementById("b5").style.display = "none";
// }
}

document.getElementById("temp1").onclick = function() {
    document.getElementById("b2").style.display = "block";
    document.getElementById("b1").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b5").style.display = "none";
    // document.getElementById("b2").style.display = "none";
}
document.getElementById("temp2").onclick = function() {
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b3").style.display = "block";
    document.getElementById("b5").style.display = "none";
}
document.getElementById("temp3").onclick = function() {
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "block";
    document.getElementById("b5").style.display = "none";
}
document.getElementById("temp4").onclick = function() {
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b5").style.display = "block";
}

// function check() {
//     document.writeln('Thank you '+document.hack.name.value);
// }