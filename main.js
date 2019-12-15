console.log('iframe implementation');
const btn = document.getElementById('btn-1');
btn.onclick = toggleFullscreen;

function toggleFullscreen(){
    const iframe = document.getElementById('iframe');
    iframe.requestFullscreen().catch(i => console.log(i));
}


var csp = HTMLIFrameElement.csp;
console.log(csp);
