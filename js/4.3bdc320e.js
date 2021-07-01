(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{13:function(e,t){},1543:function(e,t,n){"use strict";var o=n("2591"),a={apiKey:"AIzaSyC3mSqN_lKIPC7ml2LH5iaQj7c85lRu_50",authDomain:"templit-697dc.firebaseapp.com",databaseURL:"https://templit-697dc.firebaseio.com",projectId:"templit-697dc",storageBucket:"templit-697dc.appspot.com",messagingSenderId:"673698949280",appId:"1:673698949280:web:6da4c034a879d4bdfa01c5",measurementId:"G-0P33MV38MC"};t["a"]=o["a"].apps.length?o["a"].app():o["a"].initializeApp(a)},2960:function(e,t,n){},"3ade":function(e,t,n){},"4d4e":function(e,t,n){},"6a0e":function(e,t,n){"use strict";n("b1af")},"8fb8":function(e,t,n){"use strict";n("4d4e")},"985e":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="985e"},ad0c:function(e,t,n){"use strict";n("3ade")},b1af:function(e,t,n){},c67b:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));n("b64b");var o={Blank:"",Homework:'# Homework X - Title Here\n### <span class=\'default\'>CS 1301 - Intro to Computing - Fall 20XX</span>\n\n## Important\n- Due Date: **Monday, December 31<sup>st</sup>, 11:59 PM**.\n- This is an individual assignment. High-level collaboration is encouraged, **but your submission must be uniquely yours.**\n- Resources:\n    - TA Helpdesk\n    - Email TA\'s or use class Piazza\n    - [How to Think Like a Computer Scientist](http://openbookproject.net/thinkcs/python/english3e/)\n    - [CS 1301 YouTube Channel](https://www.youtube.com/channel/UCrWj3U4f89aIxPoYBzZQItw/featured)\n- Comment out or delete all function calls. Only import statements, global variables, and comments are okay to be outside of your functions.\n- **Read the entire document before starting this assignment.**\n\n**ADD SHORT DESCRIPTION OF HOMEWORK TOPICS HERE**\n\n**Hidden Test Cases**: In an effort to encourage debugging and writing robust code, we will be including hidden test cases on Gradescope for some functions. You will not be able to see the input or output to these cases. Below is an example output from a failed hidden test case:\n```python\nTest failed: False is not true\n```\n\nWritten by [Arvin Poddar (apoddar32@gatech.edu)](mailto:apoddar32@gatech.edu) & [Anthony Zheng (azheng47@gatech.edu)](mailto:azheng47@gatech.edu)\n\n<div class="page-break"></div>\n\n\n\x3c!--------------------FUNCTION----------------------\x3e\n\n### Function Example\n**Function Name:** functionName()\n**Parameters:** param name (`type`)\n**Returns:** param type (`type`)\n**Description:** Type your function description here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales aliquet sapien eu dapibus. Nunc vitae semper lacus. Vestibulum vel tincidunt lacus. Pellentesque et leo orci. Phasellus sed lorem sed tortor dignissim pulvinar id eget orci. Proin laoreet, tellus vel interdum aliquet, dui eros scelerisque lorem, ac malesuada tortor felis a ipsum.\n```python\nprint (functionName())\n"Test Case 1"\n```\n\n```python\nprint (functionName())\n"Test Case 1"\n```\n\n\x3c!---------------SUBMISSION INFORMATION-----------------\x3e\n\n<div class="page-break"></div>\n\n## Grading Rubric\n| Function | Points |\n|----|----|\n| functionName() | Point Value |\n| functionName2() | Point Value |\n| functionName3() | Point Value |\n|**Total**|**100**|\n\n## Provided\nThe `HW0X.py` skeleton file has been provided to you. This is the file you will edit and implement. All instructions for what the functions should do are in this skeleton and this document.\n\n## Submission Process\nFor this homework, we will be using Gradescope for submissions and automatic grading. When you submit your `HW0X.py` file to the appropriate assignment on Gradescope, the autograder will run automatically. The grade you see on Gradescope will be the grade you get, unless your grading TA sees signs of you trying to defeat the system in your code. You can re-submit this assignment an unlimited number of times until the deadline; just click the “Resubmit” button at the lower right-hand corner of Gradescope. You do not need to submit your `HW0X.py` on Canvas. \n\n'},a=Object.keys(o)},cabd:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{staticClass:"outer-layout",attrs:{view:"lHh Lpr lFf"}},[n("q-header",{staticClass:"bg-white header",attrs:{elevated:""}},[n("q-toolbar",{staticClass:"text-black q-py-sm"},[n("q-btn",{attrs:{flat:"",color:"white","text-color":"primary",icon:"home",round:"",to:"/"}}),n("q-toolbar-title",[n("div",{staticClass:"text-weight-bold"},[e._v("\n          "+e._s(e.documentName)+" - "+e._s(e.documentDate)+"\n        ")]),n("div",{staticClass:"text-caption text-grey"},[e._v("Last synced: "+e._s(e.lastSyncDateString))])]),n("AvatarRow"),n("q-btn",{attrs:{flat:"",color:"white","text-color":"primary",icon:"download",round:""}},[n("q-menu",{attrs:{anchor:"bottom middle",self:"top middle"}},[n("q-list",{staticStyle:{"min-width":"120px"},attrs:{dense:""}},[n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:e.savePdf}},[n("q-item-section",[e._v("Save PDF")])],1),n("q-separator"),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:e.saveMarkdown}},[n("q-item-section",[e._v("Save Markdown")])],1),n("q-separator"),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:e.restoreFromLocal}},[n("q-item-section",[e._v("Recover File")])],1),n("q-separator")],1)],1)],1),n("q-btn",{attrs:{flat:"",color:"white","text-color":"primary",icon:"save",round:""},on:{click:e.saveLocally}})],1)],1),n("q-page-container",{staticClass:"outer-page-container"},[n("q-page",{staticClass:"outer-page"},[n("div",{staticClass:"doc-outer"},[n("div",{staticClass:"doc-editor"},[n("DocumentEditor",{ref:"docEditor",attrs:{documentId:e.docId},on:{init:function(t){e.loading=!0},ready:function(t){e.loading=!1},update:e.updateContents,save:e.saveLocally,synced:e.updateSync}})],1),n("div",{staticClass:"doc-preview"},[n("DocumentPreview",{attrs:{content:e.contents}})],1)])]),n("q-inner-loading",{staticStyle:{"z-index":"10"},attrs:{showing:e.loading}},[n("q-spinner",{attrs:{size:"50px",color:"primary",thickness:10}}),n("div",{staticClass:"text-center text-h6 q-mt-md"},[e._v("\n        Fetching document...\n      ")])],1)],1)],1)},a=[],i=(n("a9e3"),n("ac1f"),n("1276"),n("498a"),n("5a0c")),s=n.n(i),r=n("a002"),c=n.n(r),u=n("21a6"),l=n.n(u),d=n("1543"),m=n("cc8f"),p=n("f430"),f=n("ecf6"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{attrs:{id:"firepad-container"}})},g=[],v=(n("d3b7"),n("e6cf"),n("56b3")),b=n.n(v),y=n("e44b"),w=n("c67b"),k=(n("a7be"),n("0109"),n("959b"),n("db91"),n("31c5"),{name:"DocumentEditor",mixins:[p["a"]],props:{documentId:{type:String,required:!0}},data:function(){return{firepad:null,editor:null,codeMirrorOptions:{lineNumbers:!0,lineWrapping:!0,mode:"markdown",theme:"dracula",readOnly:!0,styleActiveLine:{nonEmpty:!0},styleActiveSelected:!0,showCursorWhenSelecting:!0,extraKeys:{"Cmd-S":this.saveData,"Ctrl-S":this.saveData}}}},computed:{canEdit:function(){return!(this.readOnly||this.$q.platform.is.mobile||this.isOffline)},userColor:function(){return y["c"][this.uid.split(" ")[0]]}},methods:{saveData:function(){this.$emit("save")},confirmDeletion:function(){var e=this;return new Promise((function(t){e.$q.dialog({title:"Confirm",message:"Are you sure you want to delete the contents of this document?",cancel:!0,persistent:!0}).onOk((function(){return t(!0)})).onCancel((function(){return t(!1)}))}))},initFirepad:function(){var e=this,t=b.a.fromTextArea(document.getElementById("firepad-container"),e.codeMirrorOptions);t.on("change",(function(t){var n=t.getValue();e.emitChanges(n)})),e.editor=t,window.CodeMirror=b.a;var o=n("b932"),a=d["a"].database().ref("documents").child(e.documentId),i=o.fromCodeMirror(a,t,{defaultText:"# Start typing..."});i.on("ready",(function(){if(e.setReadOnly(!1),e.$emit("ready"),e.$emit("synced",Date.now()),i.setUserColor(e.userColor),i.isHistoryEmpty()){var t=e.$route.query.template||"Blank";i.setText(w["b"][t])}})),i.on("synced",(function(){e.$emit("synced",Date.now())})),e.firepad=i},emitChanges:function(e){this.$emit("update",e)},setReadOnly:function(e){this.editor.setOption("readOnly",e)}},mounted:function(){this.$emit("init"),this.initFirepad()},beforeDestroy:function(){this.firepad&&this.firepad.dispose()},watch:{canEdit:function(e){this.setReadOnly(!e)}}}),C=k,O=(n("6a0e"),n("2877")),q=Object(O["a"])(C,h,g,!1,null,null,null),x=q.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview"},[n("Markdown",{staticClass:"markdown-body",attrs:{content:e.content,options:e.options}})],1)},I=[],D=n("48cd"),F=n.n(D),N=n("1487"),P=n.n(N),T=function(e,t){if(t&&P.a.getLanguage(t))try{return P.a.highlight(t,e).value}catch(n){console.error(n)}try{return P.a.highlightAuto(e).value}catch(n){console.error(n)}return""},M={name:"Preview",components:{Markdown:F.a},props:{content:{type:String}},data:function(){return{options:{markdownIt:{highlight:T,html:!0,linkify:!0,breaks:!0},linkAttributes:{attrs:{target:"_blank",rel:"noopener"}}}}}},R=M,_=(n("ad0c"),Object(O["a"])(R,S,I,!1,null,null,null)),E=_.exports,A={name:"PageDocument",mixins:[p["a"],m["a"]],components:{AvatarRow:f["a"],DocumentEditor:x,DocumentPreview:E},props:{docId:{type:String,required:!0}},data:function(){return{loading:!1,contents:"",lastSynced:0}},computed:{documentName:function(){return this.docId.split(":")[0]},documentDate:function(){return s()(Number(this.docId.split(":")[1])).format("M/D/YY")},lastSyncDateString:function(){return s()(this.lastSynced).format("M/D/YY h:mm:ss A")}},methods:{updateContents:function(e){this.contents=e},updateSync:function(e){this.lastSynced=e},saveLocally:function(){var e=this,t=this.contents;t.trim()?c.a.setItem(e.docId,t).then((function(){e.showMessage('Locally saved "'.concat(e.documentName,'"'),"positive")})).catch((function(t){e.showMessage(),console.log(t)})):e.showMessage('Locally saved "'.concat(e.documentName,'"'),"positive")},restoreFromLocal:function(){var e=this;e.$refs.docEditor;e.$q.dialog({title:"Recovering",message:'Recovering will generate a Markdown file containing the contents from the last time you saved. Press "OK" to proceed.',cancel:!0}).onOk((function(){c.a.getItem(e.docId).then((function(t){t?(e.showMessage("Contents recovered!","positive"),e.saveRecoveryFile(t)):e.showMessage("Nothing to restore")})).catch((function(t){e.showMessage(),console.log(t)}))}))},saveFile:function(e,t){var n=t+".md",o=new Blob([e],{type:"text/plain;charset=utf-8"});l.a.saveAs(o,n)},saveRecoveryFile:function(e){var t="RECOVERY - "+this.documentName;this.saveFile(e,t)},saveMarkdown:function(){this.saveFile(this.contents,this.documentName)},savePdf:function(){window.print()}},mounted:function(){document.title=this.documentName},beforeRouteLeave:function(e,t,n){document.title="Templit",n()}},L=A,U=(n("df27"),n("4d5a")),H=n("e359"),$=n("65c6"),j=n("9c40"),Q=n("6ac5"),z=n("4e73"),B=n("1c1c"),Y=n("66e5"),W=n("4074"),G=n("eb85"),V=n("09e3"),X=n("9989"),K=n("74f7"),J=n("0d59"),Z=n("7f67"),ee=n("eebe"),te=n.n(ee),ne=Object(O["a"])(L,o,a,!1,null,null,null);t["default"]=ne.exports;te()(ne,"components",{QLayout:U["a"],QHeader:H["a"],QToolbar:$["a"],QBtn:j["a"],QToolbarTitle:Q["a"],QMenu:z["a"],QList:B["a"],QItem:Y["a"],QItemSection:W["a"],QSeparator:G["a"],QPageContainer:V["a"],QPage:X["a"],QInnerLoading:K["a"],QSpinner:J["a"]}),te()(ne,"directives",{ClosePopup:Z["a"]})},cc8f:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var o={methods:{showMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Uh oh, something went wrong",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"negative",n=this.$q.screen.gt.xs?"top":"bottom";this.$q.notify({message:e,color:t,position:n,timeout:2e3,actions:[{label:"",icon:"close",color:"white",dense:!0,handler:function(){}}]})}}};t["a"]=o},df27:function(e,t,n){"use strict";n("2960")},e44b:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i}));n("b64b");var o=["alligator","anteater","armadillo","auroch","axolotl","badger","bat","beaver","buffalo","camel","capybara","chameleon","cheetah","chinchilla","chipmunk","chupacabra","cormorant","coyote","crow","dingo","dinosaur","dolphin","duck","elephant","ferret","fox","frog","giraffe","gopher","grizzly","hedgehog","hippo","hyena","ibex","ifrit","iguana","jackal","kangaroo","koala","kraken","lemur","leopard","liger","llama","manatee","mink","monkey","moose","narwhal","orangutan","otter","panda","penguin","platypus","pumpkin","python","quagga","rabbit","raccoon","rhino","sheep","shrew","skunk","squirrel","tiger","turtle","walrus","wolf","wolverine","wombat"],a={red:"#FF0044",blue:"#006CFE",yellow:"#FFCC41",purple:"#B476FB",orange:"#FE9D24",green:"#29B278",teal:"#00D7BF"},i=Object.keys(a)},ecf6:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isOffline?n("div",{staticClass:"text-weight-bold text-grey-5"},[e._v("\n    You're offline\n  ")]):n("div",{staticClass:"avatar-row q-mr-sm"},[n("v-animal",{key:e.uid,staticClass:"current-user",attrs:{name:e.currentUserAnimal,color:e.currentUserColor,dance:"",size:"40px"}}),e._l(e.userObjects,(function(e){return n("v-animal",{key:e.key,attrs:{name:e.name,color:e.color,size:"40px"}})})),e.remainingUsers>0?n("div",{staticClass:"user-overflow"},[e._v("\n      +"+e._s(e.remainingUsers)+"\n    ")]):e._e()],2)])},a=[],i=(n("4de4"),n("d81d"),n("fb6a"),n("ac1f"),n("1276"),n("3b6c")),s=n.n(i),r=n("f430"),c=7,u={name:"AvatarRow",mixins:[r["a"]],components:{"v-animal":s.a},computed:{cappedList:function(){var e=this,t=this.users.filter((function(t){return t.key!==e.uid+":"+e.timestamp}));return t.slice(0,c)},userObjects:function(){return this.cappedList.map((function(e){var t=e.uid.split(" ");return{key:e.key,color:t[0],name:t[1]}}))},remainingUsers:function(){return this.users.length-c},currentUserColor:function(){return this.uid.split(" ")[0]},currentUserAnimal:function(){return this.uid.split(" ")[1]}},methods:{isCurrentUser:function(e){return this.uid===e}}},l=u,d=(n("8fb8"),n("2877")),m=Object(d["a"])(l,o,a,!1,null,null,null);t["a"]=m.exports},f430:function(e,t,n){"use strict";var o=n("ded3"),a=n.n(o),i=n("2f62"),s={computed:a()({},Object(i["c"])("store",["uid","users","timestamp","isOffline","readOnly"])),methods:a()({},Object(i["b"])("store",["setUser","addUser","removeUser","setTimestamp","setIsOffline","setReadOnly"]))};t["a"]=s}}]);