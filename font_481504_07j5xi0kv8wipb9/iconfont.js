(function(window){var svgSprite='<svg><symbol id="icon-huiyuanqia" viewBox="0 0 1024 1024"><path d="M868.096 155.712H155.904A143.232 143.232 0 0 0 12.8 298.752v426.496a143.232 143.232 0 0 0 143.04 143.04h712.256a143.232 143.232 0 0 0 143.04-143.04V298.752a143.168 143.168 0 0 0-143.04-143.04z m104.704 569.536c0 57.664-46.976 104.704-104.704 104.704H155.904A104.896 104.896 0 0 1 51.2 725.248V380.032h921.6v345.216z m0-383.552H51.2v-42.944c0-57.664 46.976-104.704 104.704-104.704h712.256c57.664 0 104.704 46.976 104.704 104.704v42.944zM128.704 680.704h89.728a19.2 19.2 0 1 0 0-38.4H128.704a19.2 19.2 0 1 0 0 38.4z m456.384-188.032h-27.136v238.72h27.136v-238.72z m-143.168 238.784l88.256-238.72h-30.08l-74.56 209.024h-0.96L349.952 492.672h-30.08l88.32 238.72h33.728z m220.736-97.664h69.888c55.04 0 82.56-23.616 82.56-70.848 0-46.784-27.392-70.272-82.24-70.272H635.2v238.72h27.456V633.792z m0-117.376h68.544c19.136 0 33.28 3.968 42.432 11.776 9.344 6.848 14.08 18.496 14.08 34.752 0 15.808-4.608 27.648-13.76 35.456-9.536 7.808-23.872 11.712-42.752 11.712h-68.544V516.416z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)