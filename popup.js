function click(e){
  var ajCode = `
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert('Dodano zagrożenie. Dziękujemy.');
      }
    };
    xhttp.open('POST', 'http://httpstat.us/200', true);
    xhttp.send('link='+window.location.href);
    window.close();
  `;
  var generateBoom = `
    var img = document.createElement('img');
    img.src = 'https://fakealert.000webhostapp.com/fakealert';
    img.id = 'fakeAlertLink';
    document.querySelector('body').appendChild(img);
    fakeAlertLink = document.querySelector('#fakeAlertLink');
    fakeAlertLink.style = 'position:fixed;z-index:9999;top:20px;left:20px;';
  `;
  chrome.tabs.executeScript(null, {
    code: ajCode + generateBoom
  });
  
}

document.addEventListener('DOMContentLoaded', function(){
  var a = document.querySelectorAll('a');
  for (var i = 0; i < a.length; i++){
    a[i].addEventListener('click', click);
  }
});