/*! This file is auto-generated */
window.edButtons=[],window.edAddTag=function(){},window.edCheckOpenTags=function(){},window.edCloseAllTags=function(){},window.edInsertImage=function(){},window.edInsertLink=function(){},window.edInsertTag=function(){},window.edLink=function(){},window.edQuickLink=function(){},window.edRemoveTag=function(){},window.edShowButton=function(){},window.edShowLinks=function(){},window.edSpell=function(){},window.edToolbar=function(){},function(){function u(t){var e,n,o,a;"undefined"!=typeof jQuery?jQuery(t):((e=u).funcs=[],e.ready=function(){if(!e.isReady)for(e.isReady=!0,n=0;n<e.funcs.length;n++)e.funcs[n]()},e.isReady?t():e.funcs.push(t),e.eventAttached||(document.addEventListener?(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),e.ready()},document.addEventListener("DOMContentLoaded",o,!1),window.addEventListener("load",e.ready,!1)):document.attachEvent&&(o=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",o),e.ready())},document.attachEvent("onreadystatechange",o),window.attachEvent("onload",e.ready),(a=function(){try{document.documentElement.doScroll("left")}catch(t){return void setTimeout(a,50)}e.ready()})()),e.eventAttached=!0))}var t,e,t=(t=new Date,e=function(t){t=t.toString();return t=t.length<2?"0"+t:t},t.getUTCFullYear()+"-"+e(t.getUTCMonth()+1)+"-"+e(t.getUTCDate())+"T"+e(t.getUTCHours())+":"+e(t.getUTCMinutes())+":"+e(t.getUTCSeconds())+"+00:00"),r=window.QTags=function(t){if("string"==typeof t)t={id:t};else if("object"!=typeof t)return!1;var e,n,o,a=this,i=t.id,s=document.getElementById(i),l="qt_"+i;if(!i||!s)return!1;a.name=l,a.id=i,a.canvas=s,a.settings=t,o="content"!==i||"string"!=typeof adminpage||"post-new-php"!==adminpage&&"post-php"!==adminpage?l+"_toolbar":(window.edCanvas=s,"ed_toolbar"),(e=document.getElementById(o))||((e=document.createElement("div")).id=o,e.className="quicktags-toolbar"),s.parentNode.insertBefore(e,s),a.toolbar=e,n=function(t){var e=(t=t||window.event).target||t.srcElement;(e.clientWidth||e.offsetWidth)&&/ ed_button /.test(" "+e.className+" ")&&(a.canvas=s=document.getElementById(i),t=e.id.replace(l+"_",""),a.theButtons[t]&&a.theButtons[t].callback.call(a.theButtons[t],e,s,a))},t=function(){window.wpActiveEditor=i},o=document.getElementById("wp-"+i+"-wrap"),e.addEventListener?(e.addEventListener("click",n,!1),o&&o.addEventListener("click",t,!1)):e.attachEvent&&(e.attachEvent("onclick",n),o&&o.attachEvent("onclick",t)),a.getButton=function(t){return a.theButtons[t]},a.getButtonElement=function(t){return document.getElementById(l+"_"+t)},a.init=function(){u(function(){r._buttonsInit(i)})},a.remove=function(){delete r.instances[i],e&&e.parentNode&&e.parentNode.removeChild(e)},(r.instances[i]=a).init()};function s(t){return(t=(t=t||"").replace(/&([^#])(?![a-z1-4]{1,8};)/gi,"&#038;$1")).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}r.instances={},r.getInstance=function(t){return r.instances[t]},r._buttonsInit=function(t){var c=this;function e(t){var e,n,o=c.instances[t],a=(o.canvas,o.name),i=o.settings,s="",l={},u="";for(n in i.buttons&&(u=","+i.buttons+","),edButtons)edButtons[n]&&(e=edButtons[n].id,u&&-1!==",strong,em,link,block,del,ins,img,ul,ol,li,code,more,close,".indexOf(","+e+",")&&-1===u.indexOf(","+e+",")||edButtons[n].instance&&edButtons[n].instance!==t||(l[e]=edButtons[n],edButtons[n].html&&(s+=edButtons[n].html(a+"_"))));u&&-1!==u.indexOf(",dfw,")&&(l.dfw=new r.DFWButton,s+=l.dfw.html(a+"_")),"rtl"===document.getElementsByTagName("html")[0].dir&&(l.textdirection=new r.TextDirectionButton,s+=l.textdirection.html(a+"_")),o.toolbar.innerHTML=s,o.theButtons=l,"undefined"!=typeof jQuery&&jQuery(document).triggerHandler("quicktags-init",[o])}if(t)e(t);else for(t in c.instances)e(t);c.buttonsInitDone=!0},r.addButton=function(t,e,n,o,a,i,s,l,u){var c;if(t&&e){if(s=s||0,o=o||"",u=u||{},"function"==typeof n)(c=new r.Button(t,e,a,i,l,u)).callback=n;else{if("string"!=typeof n)return;c=new r.TagButton(t,e,n,o,a,i,l,u)}if(-1===s)return c;if(0<s){for(;void 0!==edButtons[s];)s++;edButtons[s]=c}else edButtons[edButtons.length]=c;this.buttonsInitDone&&this._buttonsInit()}},r.insertContent=function(t){var e,n,o,a,i=document.getElementById(wpActiveEditor);return!!i&&(document.selection?(i.focus(),document.selection.createRange().text=t):i.selectionStart||0===i.selectionStart?(a=i.value,e=i.selectionStart,n=i.selectionEnd,o=i.scrollTop,i.value=a.substring(0,e)+t+a.substring(n,a.length),i.selectionStart=e+t.length,i.selectionEnd=e+t.length,i.scrollTop=o):i.value+=t,i.focus(),document.createEvent?((t=document.createEvent("HTMLEvents")).initEvent("change",!1,!0),i.dispatchEvent(t)):i.fireEvent&&i.fireEvent("onchange"),!0)},r.Button=function(t,e,n,o,a,i){this.id=t,this.display=e,this.access="",this.title=o||"",this.instance=a||"",this.attr=i||{}},r.Button.prototype.html=function(t){var e,n=this.title?' title="'+s(this.title)+'"':"",o=this.attr&&this.attr.ariaLabel?' aria-label="'+s(this.attr.ariaLabel)+'"':"",a=this.display?' value="'+s(this.display)+'"':"",i=this.id?' id="'+s(t+this.id)+'"':"",t=(e=window.wp)&&e.editor&&e.editor.dfw;return"fullscreen"===this.id?'<button type="button"'+i+' class="ed_button qt-dfw qt-fullscreen"'+n+o+"></button>":"dfw"===this.id?(e=t&&t.isActive()?"":' disabled="disabled"','<button type="button"'+i+' class="ed_button qt-dfw'+(t&&t.isOn()?" active":"")+'"'+n+o+e+"></button>"):'<input type="button"'+i+' class="ed_button button button-small"'+n+o+a+" />"},r.Button.prototype.callback=function(){},r.TagButton=function(t,e,n,o,a,i,s,l){r.Button.call(this,t,e,a,i,s,l),this.tagStart=n,this.tagEnd=o},r.TagButton.prototype=new r.Button,r.TagButton.prototype.openTag=function(t,e){e.openTags||(e.openTags=[]),this.tagEnd&&(e.openTags.push(this.id),t.value="/"+t.value,this.attr.ariaLabelClose&&t.setAttribute("aria-label",this.attr.ariaLabelClose))},r.TagButton.prototype.closeTag=function(t,e){var n=this.isOpen(e);!1!==n&&e.openTags.splice(n,1),t.value=this.display,this.attr.ariaLabel&&t.setAttribute("aria-label",this.attr.ariaLabel)},r.TagButton.prototype.isOpen=function(t){var e=0,n=!1;if(t.openTags)for(;!1===n&&e<t.openTags.length;)n=t.openTags[e]===this.id&&e,e++;else n=!1;return n},r.TagButton.prototype.callback=function(t,e,n){var o,a,i,s,l,u,c=this,r=e.value,d=r?c.tagEnd:"";document.selection?(e.focus(),0<(u=document.selection.createRange()).text.length?c.tagEnd?u.text=c.tagStart+u.text+d:u.text=u.text+c.tagStart:c.tagEnd?!1===c.isOpen(n)?(u.text=c.tagStart,c.openTag(t,n)):(u.text=d,c.closeTag(t,n)):u.text=c.tagStart):e.selectionStart||0===e.selectionStart?((o=e.selectionStart)<(a=e.selectionEnd)&&"\n"===r.charAt(a-1)&&--a,i=a,s=e.scrollTop,l=r.substring(0,o),u=r.substring(a,r.length),r=r.substring(o,a),o!==a?c.tagEnd?(e.value=l+c.tagStart+r+d+u,i+=c.tagStart.length+d.length):(e.value=l+r+c.tagStart+u,i+=c.tagStart.length):c.tagEnd?!1===c.isOpen(n)?(e.value=l+c.tagStart+u,c.openTag(t,n),i=o+c.tagStart.length):(e.value=l+d+u,i=o+d.length,c.closeTag(t,n)):(e.value=l+c.tagStart+u,i=o+c.tagStart.length),e.selectionStart=i,e.selectionEnd=i,e.scrollTop=s):d?!1!==c.isOpen(n)?(e.value+=c.tagStart,c.openTag(t,n)):(e.value+=d,c.closeTag(t,n)):e.value+=c.tagStart,e.focus(),document.createEvent?((c=document.createEvent("HTMLEvents")).initEvent("change",!1,!0),e.dispatchEvent(c)):e.fireEvent&&e.fireEvent("onchange")},r.SpellButton=function(){},r.CloseButton=function(){r.Button.call(this,"close",quicktagsL10n.closeTags,"",quicktagsL10n.closeAllOpenTags)},r.CloseButton.prototype=new r.Button,r._close=function(t,e,n){var o,a,i=n.openTags;if(i)for(;0<i.length;)o=n.getButton(i[i.length-1]),a=document.getElementById(n.name+"_"+o.id),t?o.callback.call(o,a,e,n):o.closeTag(a,n)},r.CloseButton.prototype.callback=r._close,r.closeAllTags=function(t){t=this.getInstance(t);t&&r._close("",t.canvas,t)},r.LinkButton=function(){var t={ariaLabel:quicktagsL10n.link};r.TagButton.call(this,"link","link","","</a>","","","",t)},r.LinkButton.prototype=new r.TagButton,r.LinkButton.prototype.callback=function(t,e,n,o){"undefined"==typeof wpLink?(o=o||"http://",!1===this.isOpen(n)?(o=prompt(quicktagsL10n.enterURL,o))&&(this.tagStart='<a href="'+o+'">',r.TagButton.prototype.callback.call(this,t,e,n)):r.TagButton.prototype.callback.call(this,t,e,n)):wpLink.open(n.id)},r.ImgButton=function(){var t={ariaLabel:quicktagsL10n.image};r.TagButton.call(this,"img","img","","","","","",t)},r.ImgButton.prototype=new r.TagButton,r.ImgButton.prototype.callback=function(t,e,n,o){o=o||"http://";var a=prompt(quicktagsL10n.enterImageURL,o);a&&(o=prompt(quicktagsL10n.enterImageDescription,""),this.tagStart='<img src="'+a+'" alt="'+o+'" />',r.TagButton.prototype.callback.call(this,t,e,n))},r.DFWButton=function(){r.Button.call(this,"dfw","","f",quicktagsL10n.dfw)},r.DFWButton.prototype=new r.Button,r.DFWButton.prototype.callback=function(){var t;(t=window.wp)&&t.editor&&t.editor.dfw&&window.wp.editor.dfw.toggle()},r.TextDirectionButton=function(){r.Button.call(this,"textdirection",quicktagsL10n.textdirection,"",quicktagsL10n.toggleTextdirection)},r.TextDirectionButton.prototype=new r.Button,r.TextDirectionButton.prototype.callback=function(t,e){var n="rtl"===document.getElementsByTagName("html")[0].dir,o=(o=e.style.direction)||(n?"rtl":"ltr");e.style.direction="rtl"===o?"ltr":"rtl",e.focus()},edButtons[10]=new r.TagButton("strong","b","<strong>","</strong>","","","",{ariaLabel:quicktagsL10n.strong,ariaLabelClose:quicktagsL10n.strongClose}),edButtons[20]=new r.TagButton("em","i","<em>","</em>","","","",{ariaLabel:quicktagsL10n.em,ariaLabelClose:quicktagsL10n.emClose}),edButtons[30]=new r.LinkButton,edButtons[40]=new r.TagButton("block","b-quote","\n\n<blockquote>","</blockquote>\n\n","","","",{ariaLabel:quicktagsL10n.blockquote,ariaLabelClose:quicktagsL10n.blockquoteClose}),edButtons[50]=new r.TagButton("del","del",'<del datetime="'+t+'">',"</del>","","","",{ariaLabel:quicktagsL10n.del,ariaLabelClose:quicktagsL10n.delClose}),edButtons[60]=new r.TagButton("ins","ins",'<ins datetime="'+t+'">',"</ins>","","","",{ariaLabel:quicktagsL10n.ins,ariaLabelClose:quicktagsL10n.insClose}),edButtons[70]=new r.ImgButton,edButtons[80]=new r.TagButton("ul","ul","<ul>\n","</ul>\n\n","","","",{ariaLabel:quicktagsL10n.ul,ariaLabelClose:quicktagsL10n.ulClose}),edButtons[90]=new r.TagButton("ol","ol","<ol>\n","</ol>\n\n","","","",{ariaLabel:quicktagsL10n.ol,ariaLabelClose:quicktagsL10n.olClose}),edButtons[100]=new r.TagButton("li","li","\t<li>","</li>\n","","","",{ariaLabel:quicktagsL10n.li,ariaLabelClose:quicktagsL10n.liClose}),edButtons[110]=new r.TagButton("code","code","<code>","</code>","","","",{ariaLabel:quicktagsL10n.code,ariaLabelClose:quicktagsL10n.codeClose}),edButtons[120]=new r.TagButton("more","more","\x3c!--more--\x3e\n\n","","","","",{ariaLabel:quicktagsL10n.more}),edButtons[140]=new r.CloseButton}(),window.quicktags=function(t){return new window.QTags(t)},window.edInsertContent=function(t,e){return window.QTags.insertContent(e)},window.edButton=function(t,e,n,o,a){return window.QTags.addButton(t,e,n,o,a,"",-1)};