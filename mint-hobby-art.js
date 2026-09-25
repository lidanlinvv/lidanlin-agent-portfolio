(function(){
 const art=[
  '<div class="hobby-art agent-art" aria-hidden="true"><i class="agent-orbit"></i><i class="agent-line one"></i><i class="agent-line two"></i><i class="agent-line three"></i><i class="agent-node center">AI</i><i class="agent-node one"></i><i class="agent-node two"></i><i class="agent-node three"></i></div>',
  '<div class="hobby-art backend-art" aria-hidden="true"><i class="terminal-panel"></i><i class="terminal-dot one"></i><i class="terminal-dot two"></i><i class="terminal-dot three"></i><i class="terminal-prompt">&gt;_</i><i class="terminal-line one"></i><i class="terminal-line two"></i></div>',
  '<div class="hobby-art research-art" aria-hidden="true"><i class="research-ring"></i><i class="research-line one"></i><i class="research-line two"></i><i class="research-line three"></i><i class="research-node one"></i><i class="research-node two"></i><i class="research-node three"></i><i class="research-node four"></i></div>',
  '<div class="hobby-art coding-art" aria-hidden="true"><i class="editor-panel"></i><i class="editor-tab"></i><i class="editor-line one"></i><i class="editor-line two"></i><i class="editor-line three"></i><i class="editor-cursor"></i></div>'
 ];
 document.querySelectorAll('#play .hobby').forEach(function(card,index){card.insertAdjacentHTML('beforeend',art[index])});
})();
