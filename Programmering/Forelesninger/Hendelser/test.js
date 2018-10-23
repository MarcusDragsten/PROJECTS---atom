
let theButton = document.getElementById('theButton')
theButton.onclick = () => {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  document.body.style.backgroundColor = 'rgb('+red+', '+green+', '+blue+')';
}

window.onmousemove = (event) => {
  //console.log(event);
  let red = event.clientX;
  let blue = event.clientY;
  document.body.style.backgroundColor = 'rgb('+red+', 0, '+blue+')'
}
//sett en timer
setTimeout(() => {
  alert('3 sekunder har gått');
}, 2000);
