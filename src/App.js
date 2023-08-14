import './App.css';



function movelight(e){
  var x = e.clientX

  var y = e.clientY 

  document.documentElement.style.setProperty('--cursorX', x + 'px')

  document.documentElement.style.setProperty('--cursorY', y + 'px')
}
var touchX = 0;
var touchY = 0;
function movelight2(e){
  var touch = e.touches[0];
  touchX = touch.clientX;
  touchY = touch.clientY;

  if(touchY || touchX){


    
    
    

    document.documentElement.style.setProperty('--cursorX', touchX + 'px')
    
    document.documentElement.style.setProperty('--cursorY', touchY + 'px')
  }
}




function lightson(){
  const link = document.getElementById('link');
  const pp = document.getElementById('pp');
  if (link) {
    link.href = 'lighton.css';
  }
  
  document.removeEventListener('dblclick',lightson)
  document.addEventListener('dblclick',lightoff)
  
  pp.innerText = 'double click to turn off the lights'
  console.log('on');
    
}
function lightoff(){
  const pp = document.getElementById('pp');
  
  
  const link = document.getElementById('link');
  if (link) {
    link.href = 'lightsoff.css';
  }
  
  document.removeEventListener('dblclick',lightoff)
  document.addEventListener('dblclick',lightson)
  
  
  pp.innerText = 'double click to turn on the lights'
}
document.addEventListener('dblclick',lightoff)



document.addEventListener('mousemove',movelight)
document.addEventListener('touchmove',movelight2)

function App() {










  var lastTouchTime = 0;
  var touchTimeout;
  var doubleClickCount = 0;
  
  function f1() {
      // console.log('Function f1');
      lightoff()
      
  }
  
  function f2() {
      // console.log('Function f2');
      lightson()
  }
  
  function handleDoubleClick() {
      doubleClickCount++;
      
      if (doubleClickCount % 2 === 1) {
          f1();
      } else {
          f2();
      }
  }
  
  document.addEventListener('touchstart', function(event) {
      var currentTime = new Date().getTime();
      var timeSinceLastTouch = currentTime - lastTouchTime;
  
      if (timeSinceLastTouch < 300) {
          clearTimeout(touchTimeout);
          handleDoubleClick();
          event.preventDefault();
      }
  
      lastTouchTime = currentTime;
      touchTimeout = setTimeout(function() {
          lastTouchTime = 0;
      }, 300);
  });
  




  // var touchX = 0;
  // var touchY = 0;
  
  // document.addEventListener('touchmove', function(event) {
  //     var touch = event.touches[0];
  //     touchX = touch.clientX;
  //     touchY = touch.clientY;
  // });
  
  // document.addEventListener('mousemove', function(event) {
  //     // Use touchX and touchY to track touch movement
  //     var mouseX = event.clientX;
  //     var mouseY = event.clientY;
      
  //     console.log('Mouse X:', mouseX);
  //     console.log('Mouse Y:', mouseY);
  // });
  





  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{pointerEvents:'none'}} id='pp'>
          double click to turn off the lights
          </h2>
        
      </header>
        
    </div>
  );
}

export default App;
