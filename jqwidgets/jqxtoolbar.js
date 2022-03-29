/*
jQWidgets v12.0.4 (2021-Apr)
Copyright (c) 2011-2021 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxToolBar","",{});a.extend(a.jqx._jqxToolBar.prototype,{defineInstance:function(){var b={width:"100%",minWidth:null,maxWidth:null,height:35,tools:"",initTools:null,minimizeWidth:200,disabled:false,rtl:false,events:["open","close"]};if(this===a.jqx._jqxToolBar.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){var b=this;if(b.host.css("display")==="none"||document.body.contains(b.element)===false){b._initiallyHidden=true}b._toolToWidgetMapping={button:"jqxButton",toggleButton:"jqxToggleButton",dropdownlist:"jqxDropDownList",combobox:"jqxComboBox",input:"jqxInput"};b._toolChanges=[];b.render()},render:function(){var c=this,b=true;c.element.innerHTML="";if(c.element.className.length>0){c._removeClass(c.element,c.toThemeProperty("jqx-widget jqx-fill-state-normal jqx-rc-all jqx-toolbar jqx-fill-state-disabled"))}c._setSize();c._destroyTools(false);if(c._toolWidgets){b=false;a(c._minimizeButton).remove();a(c._minimizePopup).remove()}c._appendMinimizeButton();c._addClasses();if(!c._initiallyHidden){c._createTools()}if(c.disabled===true){c.element.className+=" "+c.toThemeProperty("jqx-fill-state-disabled");c._disableTools(true)}if(!c._initiallyHidden){c._minimize()}c._removeHandlers();c._addHandlers();if(b===false&&c._toolChanges.length>0){c._restoreChanges()}},refresh:function(b){if(b!==true){this.render()}},getTools:function(){return this._toolWidgets},destroy:function(){var b=this;b._removeHandlers();b._destroyTools();b.host.remove()},_destroyTools:function(d){var c=this;if(d!==false){d=true}if(c._toolWidgets){for(var b=c._toolWidgets.length-1;b>=0;b--){c._destroyTool(b,d,true)}}},_destroyTool:function(e,i,g){var h=this;e=parseInt(e,10);var c=h._toolWidgets[e];if(c){var f=c.type,d=c.tool,b=c.menuTool;if(f!=="custom"){d[h._toolToWidgetMapping[f]]("destroy");if(b){b[h._toolToWidgetMapping[f]]("destroy")}}else{d.remove();if(b){b.remove()}}if(c.menuSeparator){a(c.menuSeparator).remove()}h._toolWidgets.splice(e,1);if(h._checkType(f)){h._refreshButtonGroups()}if(g!==true){h._minimize()}if(i!==false){h._toolChanges.push({action:"destroyTool",index:e})}}},destroyTool:function(b){this._destroyTool(b,true)},addTool:function(j,g,f,b){var h=this,i,d,c,e;if(g==="first"){i=0}else{i=h._toolWidgets.length}if(h._toolWidgets[i-1]){d=h._toolWidgets[i-1].tool;if(h._toolWidgets[i-1].separatorAfterWidget){c="|"}else{c=h._toolWidgets[i-1].type}}if(f===true){e="|"}else{if(h._toolWidgets[i+1]){e=h._toolWidgets[i+1].type}}var k=h._initializeTool(i,j,d,c,e,b,false);if(g==="first"){h._toolWidgets.splice(0,0,k)}else{h._toolWidgets.push(k)}h._removeHandlers();h._addHandlers();if(h._checkType(j)){h._refreshButtonGroups()}if(g!=="first"&&h._minimizedTools>0){h._minimizeTool(true)}else{h._minimize()}h._toolChanges.push({action:"addTool",type:j,position:g,separator:f,initCallback:b})},_disableTools:function(b){var d=this;for(var c=0;c<d._toolWidgets.length;c++){d.disableTool(c,b)}},disableTool:function(d,c){var f=this;d=parseInt(d,10);var b=f._toolWidgets[d];if(b){var e=b.type;if(e!=="custom"){b.tool[f._toolToWidgetMapping[e]]({disabled:c});b.menuTool[f._toolToWidgetMapping[e]]({disabled:c})}f._toolChanges.push({action:"disableTool",index:d,disable:c})}},propertyChangedHandler:function(d,n,c,m){if(n!=="initTools"){if(m!==c){switch(n){case"theme":if(c!==""){d._removeClass(d.element,d.toThemeProperty("jqx-widget-"+c+" jqx-fill-state-normal-"+c+" jqx-rc-all-"+c+" jqx-toolbar-"+c));d._removeClass(d._minimizePopup,"jqx-popup-"+c+" jqx-fill-state-normal-"+c+" jqx-rc-b-"+c+" jqx-toolbar-minimized-popup-"+c)}d._addClasses();d._minimizePopup.className+=" "+d.toThemeProperty("jqx-popup jqx-fill-state-normal jqx-rc-b jqx-toolbar-minimized-popup");for(var f=0;f<d._toolWidgets.length;f++){var g=d._toolWidgets[f];if(g.type!=="custom"){if(g.menuTool){if(g.menuSeparator){if(c!==""){d._removeClass(g.menuSeparator,"jqx-fill-state-pressed-"+c+" jqx-toolbar-minimized-popup-separator-"+c)}g.menuSeparator.className+=" jqx-fill-state-pressed-"+m+" jqx-toolbar-minimized-popup-separator-"+m}g.menuTool[d._toolToWidgetMapping[d._toolWidgets[f].type]]({theme:m})}g.tool[d._toolToWidgetMapping[d._toolWidgets[f].type]]({theme:m})}}a.jqx.utilities.setTheme(c,m,d.host);break;case"width":d.element.style.width=d._toPx(m);d._minimize();break;case"minWidth":d.element.style.minWidth=d._toPx(m);d._minimize();break;case"maxWidth":d.element.style.maxWidth=d._toPx(m);d._minimize();break;case"height":var b,h=false;d.element.style.height=d._toPx(m);if(typeof m==="string"&&m.indexOf("%")!==-1){if(typeof c==="string"&&c.indexOf("%")!==-1){d.host.trigger("resize");return}h=true}else{b=parseInt(m,10);b-=d._getComputedStyle(d.element,"paddingTop")+d._getComputedStyle(d.element,"paddingBottom")+d._getComputedStyle(d.element,"borderTopWidth")+d._getComputedStyle(d.element,"borderBottomWidth")}for(var e=0;e<d._toolWidgets.length;e++){var o=d._toolWidgets[e];var k=o.type;if(k==="button"||k==="toggleButton"||k==="repeatButton"||k==="linkButton"){o.tool[0].style.height=h?"100%":d._toPx(b);if(o.menuTool){o.menuTool[0].style.height=h?"100%":d._toPx(b)}}else{if(k==="dropdownlist"||k==="combobox"||k==="input"){o.tool[d._toolToWidgetMapping[k]]({height:h?"100%":b-2});if(o.menuTool){o.menuTool[d._toolToWidgetMapping[k]]({height:h?"100%":b-2})}}}}break;case"tools":d._removeHandlers();d._destroyTools();d._createTools();d._addHandlers();d._minimize();break;case"minimizeWidth":if(d._isOpen===true){var l=d._getComputedStyle(d._minimizePopup,"left")-(m-c);d._minimizePopup.style.width=d._toPx(m);d._minimizePopup.style.left=d._toPx(l)}else{d._minimizePopup.style.width=d._toPx(m)}break;case"rtl":d.render();break;case"disabled":if(m===true){d.element.className+=" "+d.toThemeProperty("jqx-fill-state-disabled");d._disableTools(true)}else{d._removeClass(d.element,d.toThemeProperty("jqx-fill-state-disabled"));d._disableTools(false)}break}}}},_raiseEvent:function(f,c){if(c===undefined){c={owner:null}}var d=this.events[f];c.owner=this;var e=new a.Event(d);e.owner=this;e.args=c;if(e.preventDefault){e.preventDefault()}var b=this.host.trigger(e);return b},_addClasses:function(){var c=this,b="jqx-widget jqx-fill-state-normal jqx-rc-all jqx-toolbar";if(c.rtl===true){b+=" jqx-toolbar-rtl"}c.element.className+=" "+c.toThemeProperty(b)},_checkType:function(b){if(b==="button"||b==="toggleButton"||b==="repeatButton"||b==="linkButton"){return true}return false},_refreshButtonGroups:function(){var d=this;function k(s,v,t,o,m,u){var p=s.tool[0],q=s.menuTool[0],n={add:"",remove:""};n[v]+=" jqx-toolbar-tool-inner-button";n[t]+=" jqx-rc-all";n[o]+=" jqx-rc-l";n[m]+=" jqx-rc-r";if(n.add!==""){p.className+=" "+d.toThemeProperty(a.trim(n.add));if(q){q.className+=" "+d.toThemeProperty(a.trim(n.add))}}if(n.remove!==""){d._removeClass(p,d.toThemeProperty(a.trim(n.remove)));if(q){d._removeClass(q,d.toThemeProperty(a.trim(n.remove)))}}p.style.borderLeftWidth=u+"px";if(q){q.style.borderLeftWidth=u+"px"}}for(var e=0;e<d._toolWidgets.length;e++){var i=d._toolWidgets[e];if(d._checkType(i.type)){var b,c,f=i.tool,g=i.menuTool;if(e>0){if(d._toolWidgets[e-1].separatorAfterWidget){b="|"}else{b=d._toolWidgets[e-1]}}if(i.separatorAfterWidget){c="|"}else{if(e<d._toolWidgets.length-1){c=d._toolWidgets[e+1]}}var j=b&&d._checkType(b.type);var l=i.separatorAfterWidget===false&&c&&d._checkType(c.type);if(!j&&!l){k(i,"remove","add","remove","remove",1)}else{if(!j&&l){k(i,"remove","remove","add","remove",1)}else{if(j&&l){k(i,"add","remove","remove","remove",0)}else{if(j&&!l){k(i,"remove","remove","remove","add",0)}}}}var h=d.rtl?"rtl":"ltr";if(!l){if(i.separatorAfterWidget){d._removeClass(f[0],d.toThemeProperty("jqx-toolbar-tool-no-separator-"+h));f[0].className+=" "+d.toThemeProperty("jqx-toolbar-tool-separator-"+h);if(g){d._removeClass(g[0],d.toThemeProperty("jqx-toolbar-tool-no-separator-"+h));g[0].className+=" "+d.toThemeProperty("jqx-toolbar-tool-separator-"+h)}}else{d._removeClass(f[0],d.toThemeProperty("jqx-toolbar-tool-separator-"+h));f[0].className+=" "+d.toThemeProperty("jqx-toolbar-tool-no-separator-"+h);if(g){d._removeClass(g[0],d.toThemeProperty("jqx-toolbar-tool-separator-"+h));g[0].className+=" "+d.toThemeProperty("jqx-toolbar-tool-no-separator-"+h)}}}else{d._removeClass(f[0],d.toThemeProperty("jqx-toolbar-tool-separator-"+h));d._removeClass(f[0],d.toThemeProperty("jqx-toolbar-tool-no-separator-"+h));if(g){d._removeClass(g[0],d.toThemeProperty("jqx-toolbar-tool-separator-"+h));d._removeClass(g[0],d.toThemeProperty("jqx-toolbar-tool-no-separator-"+h))}}}}},_addHandlers:function(){var b=this;var c=b.element.id;a.jqx.utilities.resize(b.host,function(){if(b._initiallyHidden){b._createTools();b._minimize();b._initiallyHidden=false;return}if(b._isOpen===true){b._minimizePopup.style.display="none";b._isOpen=false;b._raiseEvent("1")}b._minimize()});b.addHandler(document,"click.jqxToolbar"+c,function(){if(b._isOpen===true){b._openMinimizePopup()}});b.addHandler(b._minimizeButton,"click.jqxToolbar"+c,function(d){d.stopPropagation();b._openMinimizePopup()});b.addHandler(a(".jqx-popup"),"click.jqxToolbar"+c,function(d){if(d.target.className.indexOf("jqx-window-content")===-1){d.stopPropagation()}})},_removeHandlers:function(){var b=this;var c=b.element.id;b.removeHandler(document,"click.jqxToolbar"+c);b.removeHandler(b._minimizeButton,"click.jqxToolbar"+c);b.removeHandler(a(".jqx-popup"),"click.jqxToolbar"+c)},_setSize:function(){var b=this,c=b.element.style;c.width=b._toPx(b.width);c.height=b._toPx(b.height);if(b.minWidth){c.minWidth=b._toPx(b.minWidth)}if(b.maxWidth){c.maxWidth=b._toPx(b.maxWidth)}},_createTools:function(){var g=this;var m=g.tools.split(" ");var f=a.trim(g.tools.replace(/\|/g,""));f=f.replace(/\s+/g," ");f=f.split(" ");g._toolWidgets=[];var k=0;for(var h=0;h<f.length;h++){if(f[h]!==m[h+k]){k++}var j=h+k;var d;if(g._toolWidgets[h-1]){d=g._toolWidgets[h-1].tool}var i=m[j];var c=m[j-1];var e=m[j+1];var b=g.initTools;if(i===""){return true}var l=g._initializeTool(h,i,d,c,e,b,true);g._toolWidgets.push(l)}g._minimizePopup.style.display="none";g._minimizePopup.style.visibility="visible"},_initializeTool:function(k,h,d,s,t,f,o){var n=this,e,p;var g=n._initializeWidget(h,e,p,d);e=g.tool;p=g.menuTool;var q=e[0],r="jqx-toolbar-tool",x=p[0],m,c=true;if(n.rtl===true){r+=" jqx-toolbar-tool-rtl"}if(n.initTools){var w;if(o===true){w=n.initTools(h,k,e,false)}else{w=f(h,e,false)}if(!w||(w.minimizable!==false&&w.menuTool!==false)){if(o===true){n.initTools(h,k,p,true)}else{f(h,p,true)}if(p){m="jqx-toolbar-tool-minimized"}}else{if(h!=="custom"){p[n._toolToWidgetMapping[h]]("destroy")}else{p.remove()}if(w.minimizable===false){c=false}p=false}}var b=false;if(p){x.style.display="none"}var l;var j=n.rtl?"rtl":"ltr";var v=["button","toggleButton","repeatButton","linkButton"];var u={button:"jqxButton",toggleButton:"jqxToggleButton",repeatButton:"jqxRepeatButton",linkButton:"jqxRepeatButton"};if(t==="|"){b=true;r+=" jqx-toolbar-tool-separator-"+j;if(p){m+=" jqx-toolbar-tool-separator-"+j}if(p){l=document.createElement("div");l.className=n.toThemeProperty("jqx-fill-state-pressed jqx-toolbar-minimized-popup-separator");n._minimizePopup.appendChild(l)}}else{if(v.indexOf(h)===-1||(v.indexOf(h)!==-1&&v.indexOf(t)===-1)){r+=" jqx-toolbar-tool-no-separator-"+j;if(p){m+=" jqx-toolbar-tool-no-separator-"+j}}}if(v.indexOf(s)===-1&&v.indexOf(h)!==-1&&v.indexOf(t)!==-1){if(n.rtl===false){e[u[h]]({roundedCorners:"left"});if(p){p[u[h]]({roundedCorners:"left"})}}else{e[u[h]]({roundedCorners:"left"});q.style.borderLeftWidth="0px";if(p){p[u[h]]({roundedCorners:"left"});x.style.borderLeftWidth="0px"}}}else{if(v.indexOf(s)!==-1&&v.indexOf(h)!==-1&&v.indexOf(t)!==-1){r+=" jqx-toolbar-tool-inner-button";q.style.borderLeftWidth="0px";if(p){m+=" jqx-toolbar-tool-inner-button";x.style.borderLeftWidth="0px"}}else{if(v.indexOf(s)!==-1&&v.indexOf(h)!==-1&&v.indexOf(t)===-1){if(n.rtl===false){e[u[h]]({roundedCorners:"right"});q.style.borderLeftWidth="0px";if(p){p[u[h]]({roundedCorners:"right"});x.style.borderLeftWidth="0px"}}else{e[u[h]]({roundedCorners:"left"});if(p){p[u[h]]({roundedCorners:"left"})}}}}}q.className+=" "+n.toThemeProperty(r);if(p){x.className+=" "+n.toThemeProperty(m)}var i={type:h,tool:e,separatorAfterWidget:b,minimizable:c,minimized:false,menuTool:p,menuSeparator:l};return i},_initializeWidget:function(k,f,i,c){var e=this,j,d=e._toolToWidgetMapping[k],l,h=false;if(typeof e.height==="string"&&e.height.indexOf("%")!==-1){h=true}else{var m=window.getComputedStyle?window.getComputedStyle(e.element):e.element.currentStyle;l=e.element.offsetHeight-(parseInt(m.paddingTop,10)+parseInt(m.paddingBottom,10)+parseInt(m.borderTopWidth,10)+parseInt(m.borderBottomWidth,10))}function b(){var n=e.host.children(),o=a(e._minimizePopup).children();if(c||n.length===1&&o.length===0){e.element.appendChild(f);e._minimizePopup.appendChild(i)}else{e.element.insertBefore(f,n[1]);e._minimizePopup.insertBefore(i,o[0])}}if(k!=="custom"&&e.host[d]===undefined){var g=e._toolToWidgetMapping[k].toLowerCase();throw new Error("jqxToolBar: Missing reference to "+g+".js")}switch(k){case"button":case"toggleButton":f=document.createElement("button");i=document.createElement("button");j={theme:e.theme,height:h?"100%":l,disabled:e.disabled,rtl:e.rtl};break;case"dropdownlist":case"combobox":f=document.createElement("div");i=document.createElement("div");j={theme:e.theme,autoDropDownHeight:true,height:h?"100%":l-2,disabled:e.disabled,rtl:e.rtl};break;case"input":f=document.createElement("input");f.setAttribute("type","text");i=document.createElement("input");i.setAttribute("type","text");j={theme:e.theme,height:h?"100%":l-2,disabled:e.disabled,rtl:e.rtl};break;case"custom":f=document.createElement("div");i=document.createElement("div");break}b();f=a(f);i=a(i);if(k!=="custom"){f[d](j);i[d](j)}return{tool:f,menuTool:i}},_appendMinimizeButton:function(){var e=this;e._minimizedTools=0;var c=document.createElement("div"),d="jqx-menu-minimized-button jqx-toolbar-minimized-button";var f=document.createElement("div"),b="jqx-popup jqx-fill-state-normal jqx-rc-b jqx-toolbar-minimized-popup";f.setAttribute("id",e.element.id+"Popup");if(e.rtl===true){d+=" jqx-toolbar-minimized-button-rtl";b+=" jqx-toolbar-minimized-popup-rtl"}c.className=e.toThemeProperty(d);f.className=e.toThemeProperty(b);e.element.appendChild(c);document.body.appendChild(f);e._isOpen=false;f.style.width=e._toPx(e.minimizeWidth);e._minimizeButton=c;e._minimizePopup=f},_openMinimizePopup:function(){var c=this;if(c._isOpen===false){var b=c.host.offset();var e=b.left;if(c.rtl===false){e+=c.element.offsetWidth-parseInt(c.minimizeWidth,10)-(c._getComputedStyle(c._minimizePopup,"paddingLeft")+c._getComputedStyle(c._minimizePopup,"paddingRight")+c._getComputedStyle(c._minimizePopup,"borderLeftWidth")+c._getComputedStyle(c._minimizePopup,"borderRightWidth"))}var d=b.top+c.element.offsetHeight-1;c._minimizePopup.style.left=e+"px";c._minimizePopup.style.top=d+"px";a(c._minimizePopup).slideDown("fast",function(){c._isOpen=true;c._raiseEvent("0")})}else{a(c._minimizePopup).slideUp("fast");c._isOpen=false;c._raiseEvent("1")}},_minimize:function(){var h=this,b=0;function d(i){var m=i.cloneNode(true),l;m.style.visibility="hidden";m.style.display="block";m.style.position="absolute";document.body.appendChild(m);l=m.offsetWidth+h._getComputedStyle(m,"marginLeft")+h._getComputedStyle(m,"marginRight");a(m).remove();return l}if(h._minimizedTools>0){b=h._minimizeButton.offsetWidth+h._getComputedStyle(h._minimizeButton,"marginLeft")}var k=h.element.offsetWidth-h._getComputedStyle(h.element,"paddingLeft")-h._getComputedStyle(h.element,"paddingRight")-b-10;if(k<0){return}var e=0;var g;for(var f=0;f<h._toolWidgets.length;f++){var j=h._toolWidgets[f].tool;if(h._toolWidgets[f].minimized===false){var c=j[0].offsetWidth+h._getComputedStyle(j[0],"marginLeft")+h._getComputedStyle(j[0],"marginRight");e+=c}else{if(g===undefined){g=d(j[0])}}}if(e>k){h._minimizeTool(true);h._minimize()}else{if(g!==undefined&&(e+g)<k){h._minimizeTool(false);h._minimize()}}},_minimizeTool:function(g){var e=this,b,f;if(g===true){for(var d=e._toolWidgets.length-1;d>=0;d--){b=e._toolWidgets[d];if(b.minimizable===false){continue}if(b.minimized===false){f=e._getToolValue(b.tool,b.type);b.tool[0].style.display="none";if(b.menuTool){b.menuTool[0].style.display="block";e._setToolValue(f,b.menuTool,b.type)}if(b.menuSeparator){b.menuSeparator.style.display="block"}e._toolWidgets[d].minimized=true;e._minimizedTools++;if(e._minimizedTools===1){e._minimizeButton.style.display="block"}break}}}else{for(var c=0;c<e._toolWidgets.length;c++){b=e._toolWidgets[c];if(b.minimized===true){if(b.menuTool){f=e._getToolValue(b.menuTool,b.type);b.menuTool[0].style.display="none"}if(b.menuSeparator){b.menuSeparator.style.display="none"}b.tool.show();if(b.menuTool){e._setToolValue(f,b.tool,b.type)}e._toolWidgets[c].minimized=false;e._minimizedTools--;if(e._minimizedTools===0){e._minimizeButton.style.display="none"}break}}}},_getToolValue:function(c,d){var e;switch(d){case"button":case"custom":e=undefined;break;case"toggleButton":var f=c[0].className.indexOf("jqx-fill-state-pressed")!==-1;e={text:c[0].innerHTML,toggled:f};break;case"dropdownlist":case"combobox":var b=this._toolToWidgetMapping[d];if(!c[b]("checkboxes")){e=c[b]("getSelectedIndex")}else{e=c[b]("val")}break;case"input":e=c.val();break}return e},escape_HTML:function(b){return b.replace(/[&<>"]/g,function(d){var c={"&":"&","<":"<",">":">",'"':'"'};return c[d]||d})},_setToolValue:function(g,d,f){if(g!==undefined){switch(f){case"button":case"custom":break;case"toggleButton":d[0].innerHTML=this.escape_HTML(g.text);var h=d[0].className.indexOf("jqx-fill-state-pressed")!==-1;if(h!==g.toggled){d.jqxToggleButton("toggle")}break;case"dropdownlist":case"combobox":var c=this._toolToWidgetMapping[f];if(!d[c]("checkboxes")){g=d[c]("selectIndex",g)}else{d[c]("uncheckAll");if(g===""){return}var b=g.split(",");for(var e=0;e<b.length;e++){d[c]("checkItem",b[e])}}break;case"input":d.val(g);break}}},_restoreChanges:function(){var b=this;a.each(b._toolChanges,function(c,d){if(d.action==="addTool"){b.addTool(d.type,d.position,d.separator,d.initCallback)}else{if(d.action==="destroyTool"){b._destroyTool(d.index)}else{if(d.action==="disableTool"){b.disableTool(d.index,d.disable)}}}})},_removeClass:function(c,b){a(c).removeClass(b)},_toPx:function(b){if(typeof b==="number"){return b+"px"}else{return b}},_getComputedStyle:function(c,d){var b;if(window.getComputedStyle){b=window.getComputedStyle(c)}else{if(c.currentStyle){b=c.currentStyle}}if(typeof b[d]==="string"&&b[d].indexOf("px")===-1){return 0}return parseInt(b[d],10)}})})(jqxBaseFramework);

