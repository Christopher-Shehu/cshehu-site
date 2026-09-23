var yr=document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
// occasional subtle glitch on the name
(function(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var g = document.querySelector('.glitch'); if (!g) return;
  function pulse(){ g.classList.add('on'); setTimeout(function(){ g.classList.remove('on'); }, 140); setTimeout(pulse, 3500 + Math.random()*4000); }
  setTimeout(pulse, 1200);
})();
// theme toggle (remembered per browser)
(function(){
  var root = document.documentElement, key = 'cshehu-theme';
  try { var saved = localStorage.getItem(key); if (saved) root.setAttribute('data-theme', saved); } catch(e){}
  document.getElementById('theme').addEventListener('click', function(){
    var cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    var next = cur === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(key, next); } catch(e){}
  });
})();
