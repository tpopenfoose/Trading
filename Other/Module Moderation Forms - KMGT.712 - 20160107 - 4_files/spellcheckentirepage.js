function $_global_spellcheckentirepage(){if("undefined"==typeof g_all_modules)g_all_modules={};g_all_modules["spellcheckentirepage.js"]={version:{rmj:16,rmm:0,rup:5312,rpr:1208}};typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkBegin_spellcheckentirepage.js");typeof Sys!="undefined"&&Sys&&Sys.Application&&Sys.Application.notifyScriptLoaded();typeof NotifyScriptLoadedAndExecuteWaitingJobs!="undefined"&&NotifyScriptLoadedAndExecuteWaitingJobs("spellcheckentirepage.js");typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkEnd_spellcheckentirepage.js")}function ULSvwe(){var a={};a.ULSTeamName="CMS";a.ULSFileName="SpellCheckEntirePage.commentedjs";return a}function jsonSerialize(a){a:;switch(typeof a){case"undefined":return"undefined";break;case"object":if(null==a)return"null";else return a instanceof Array?jsonSerializeArray(a):jsonSerializeObject(a);break;case"boolean":return a.toString();break;case"number":return a.toString();break;case"string":return'"'+a.replace("\\","\\\\").replace(/"/,'\\"').replace("\b","\\b").replace("\t","\\t").replace("\n","\\n").replace("\13","\\v").replace("\f","\\f").replace("\r","\\r")+'"';break;default:throw new Error("Can't serialize object of type "+typeof a);}}function jsonSerializeArray(d){a:;for(var a="[",f=d.length,c=true,b=0;b<f;++b)try{var e=jsonSerialize(d[b]);if(!c)a+=",";a+=e;c=false}catch(g){}a+="]";return a}function jsonSerializeObject(c){a:;var a="{",b=true;for(prop in c)try{var e=jsonSerialize(prop),d=jsonSerialize(c[prop]);if(!b)a+=",";a+=e;a+=":";a+=d;b=false}catch(f){}a+="}";return a}function jsonDeserialize(c){a:;var a={},b=jsonDeserializePrefix(c,a);if(!b||a.remain!=null&&a.remain.length>0)throw new Error("Cannot deserialize this string");return a.value}function jsonDeserializePrefix(f,b){a:;var d=new RegExp("^undefined(.*)"),a=d.exec(f);if(null!=a){b.value=undefined;b.remain=a[1];return true}d=new RegExp("^null(.*)");a=d.exec(f);if(null!=a){b.value=null;b.remain=a[1];return true}d=new RegExp("^true(.*)");a=d.exec(f);if(null!=a){b.value=true;b.remain=a[1];return true}d=new RegExp("^false(.*)");a=d.exec(f);if(null!=a){b.value=false;b.remain=a[1];return true}var g=parseFloat(f);if(!isNaN(g)){b.value=g;b.remain=f.slice(g.toString().length);return true}d=new RegExp('^"((?:(?:\\\\")|(?:[^"]))*)"(.*)');a=d.exec(f);if(null!=a){b.value=a[1].replace("\\r","\r").replace("\\f","\f").replace("\\v","\13").replace("\\n","\n").replace("\\t","\t").replace("\\b","\b").replace('\\"','"').replace("\\\\","\\");b.remain=a[2];return true}d=new RegExp("^\\[(.*)");a=d.exec(f);if(null!=a){b.value=[];strToParse=a[1];do{if(strToParse.charAt(0)=="]"){b.remain=strToParse.slice(1);return true}var c={},e=jsonDeserializePrefix(strToParse,c);if(e){b.value.push(c.value);if(c.remain.charAt(0)==",")strToParse=c.remain.slice(1);else if(c.remain.charAt(0)=="]")strToParse=c.remain;else e=false}}while(e);if(!e)return false}d=new RegExp("^{(.*)");a=d.exec(f);if(null!=a){b.value={};strToParse=a[1];do{if(strToParse.charAt(0)=="}"){b.remain=strToParse.slice(1);return true}var c={},e=jsonDeserializePrefix(strToParse,c);if(e){if("string"==typeof c.value)var h=c.value;else return false;if(c.remain.charAt(0)==":"){strToParse=c.remain.slice(1);e=jsonDeserializePrefix(strToParse,c);if(e){b.value[h]=c.value;if(c.remain.charAt(0)==",")strToParse=c.remain.slice(1);else if(c.remain.charAt(0)=="}")strToParse=c.remain;else e=false}}else e=false}}while(e);if(!e)return false}}function SpellCheckEntirePage(b,c,a){a:;SpellCheckEntirePageWithExplicitLanguage(b,c,a,Strings.STS.L_Language_Text)}function SpellCheckEntirePageWithExplicitLanguage(m,n,l,r){a:;if(null==document.getElementById("__spPickerHasReturnValue")){var h=document.createElement("INPUT");h.type="hidden";h.id="__spPickerHasReturnValue";document.body.appendChild(h)}if(null==document.getElementById("__spPickerReturnValueHolder")){var g=document.createElement("INPUT");g.type="hidden";g.id="__spPickerReturnValueHolder";document.body.appendChild(g)}for(var e,b=[],d=[],c=document.body.getElementsByTagName("*"),a=0;a<c.length;++a){if(null!=c[a].getAttribute("excludeFromSpellCheck"))continue;if(c[a].tagName=="INPUT"){if("text"==c[a].type){if((null==c[a].id||!c[a].id.match("SearchBox"))&&c[a].value!=""){b[b.length]=c[a];d[d.length]=new ChunkToSpell(c[a].value,"text",c[a].title,b.length-1)}}else if("hidden"==c[a].type&&c[a].id.indexOf("RichHtmlField_hiddenDisplay")!=-1)if("undefined"!=typeof document.body.createTextRange){var o=c[a].id.replace("hiddenDisplay","displayContent"),k=document.getElementById(o);b[b.length]=k;d[d.length]=new ChunkToSpell(k.innerHTML,"html",c[a].parentNode.title,b.length-1)}}else if(c[a].tagName=="TEXTAREA"){var j=false;if(null!=c[a].id){e=c[a].id.replace(/\$/g,"_");var i=RTE_GetEditorDocument(e);if(null!=i&&i.body.innerHTML!=""){j=true;if("undefined"!=typeof document.body.createTextRange){b[b.length]=c[a];d[d.length]=new ChunkToSpell(i.body.innerHTML,"html",c[a].title,b.length-1)}}}if(false==j&&c[a].value!=""){b[b.length]=c[a];d[d.length]=new ChunkToSpell(c[a].value,"text",c[a].title,b.length-1)}}}var q=SpellCheckerDialogFeaturesString(),f={};f.chunks=d;f.lang=r;f.webServiceUrl=m;f.alertNoWebParts=l;var p=function(c){a:;if(null==c){var f=document.getElementById("__spPickerHasReturnValue"),d=document.getElementById("__spPickerReturnValueHolder");if(null!=f&&f.value=="1"&&null!=d)try{c=jsonDeserialize(d.value)}catch(h){}}else if("string"==typeof c)try{c=jsonDeserialize(c)}catch(h){}if(null!=c&&"string"!=typeof c)for(a=0;a<c.length;++a)if("INPUT"==b[c[a].Index].tagName){if("text"==b[c[a].Index].type)b[c[a].Index].value=c[a].Text;else if("hidden"==b[c[a].Index].type)if(typeof RTE2_ReplaceContent!="undefined")RTE2_ReplaceContent(b[c[a].Index].id,c[a].Html);else b[c[a].Index].innerHTML=c[a].Html}else if("TEXTAREA"==b[c[a].Index].tagName){if(null!=c[a].Text)b[c[a].Index].value=c[a].Text;else if(null!=c[a].Html&&null!=b[c[a].Index].id){e=b[c[a].Index].id.replace(/\$/g,"_");var g=RTE_GetEditorDocument(e);g.body.innerHTML=c[a].Html}}else if("DIV"==b[c[a].Index].tagName)if(typeof RTE2_ReplaceContent!="undefined"){e=b[c[a].Index].id.replace("_displayContent","");RTE2_ReplaceContent(e,c[a].Html)}else b[c[a].Index].innerHTML=c[a].Html};commonShowModalDialog(n,q,p,f)}function ChunkToSpell(a,d,b,c){a:;if("text"==d){this.Text=a;this.Html=null}else{this.Text=null;this.Html=a}this.DisplayName=b;this.Index=c}function SpellCheckerDialogFeaturesString(){a:;return"dialogWidth:"+Strings.CMS.L_SpellCheckerDialogWidth_TEXT+";dialogHeight:"+Strings.CMS.L_SpellCheckerDialogHeight_TEXT+";status:no;resizable:yes;scroll:no"}$_global_spellcheckentirepage();