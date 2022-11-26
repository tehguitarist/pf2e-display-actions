var h=Object.defineProperty;var d=(i,e,t)=>e in i?h(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var n=(i,e,t)=>(d(i,typeof e!="symbol"?e+"":e,t),t);const g="pf2e-display-actions",o=g,u=`module.${o}`;class f extends Application{constructor(){super();n(this,"clickString","symbolClick");n(this,"actionImage","/systems/pf2e/icons/actions/OneAction.webp");n(this,"reactionImage","/systems/pf2e/icons/actions/Reaction.webp");n(this,"numOfActions",3);n(this,"numOfReactions",1);n(this,"socketlib");n(this,"state",{numOfActions:this.numOfActions,numOfReactions:this.numOfReactions,classNameListActions:Array.from({length:this.numOfActions},()=>"symbol"),classNameListReactions:Array.from({length:this.numOfReactions},()=>"symbol")})}get title(){return game.i18n.localize("DisplayActions2e.WindowTitle")}static get defaultOptions(){return foundry.utils.mergeObject(super.defaultOptions,{id:"DisplayActions2e",template:`modules/${o}/templates/result.hbs`,width:600,height:200,resizable:!0,title:"DisplayActions2e.WindowTitle"})}getData(){return this.updateState(),{numOfActions:this.numOfActions,numOfReactions:this.numOfReactions,actionImagePayload:this.buildHandlebarPayload(this.numOfActions,{actionImage:this.actionImage},this.state.classNameListActions),reactionImagePayload:this.buildHandlebarPayload(this.numOfReactions,{reactionImage:this.reactionImage},this.state.classNameListReactions)}}activateListeners(t){super.activateListeners(t),t.find("img.symbol").on("click",this._onClickSymbolImage.bind(this)),t.find("input.input-counter").on("change",this._onChangeCountNumber.bind(this))}_onClickSymbolImage(t){t.preventDefault();const s=t.currentTarget;if(s==null||s.className===void 0||s.className===null)return;s.className.includes(this.clickString)?s.className=s.className.replace(this.clickString,""):s.className=s.className.concat(" ",this.clickString);const a=parseInt(s.id.slice(1));switch(s.id.charAt(0)){case"a":this.state.classNameListActions[a]=s.className;break;case"r":this.state.classNameListReactions[a]=s.className;break;default:console.error(`${o} handled Image onClicks wrong.`)}}buildHandlebarPayload(t,s,a){let m=[];for(let c=0;c<t;c++)m.push(foundry.utils.mergeObject({number:c,cssClass:a[c]},s));return m}_onChangeCountNumber(t){t.preventDefault();const s=t.currentTarget,a=parseInt(s.value);if(!isNaN(a)&&a>=0){switch(s.id){case"count-action":this.numOfActions=a;break;case"count-reaction":this.numOfReactions=a;break;default:console.error(`${o} incorrectly handled number of actions!`)}this.render()}}_getHeaderButtons(){const t=super._getHeaderButtons(),s={label:"JOURNAL.ActionShow",class:"share-image",icon:"fas fa-eye",onclick:a=>this._onShowPlayers(a)};return t.unshift(s),t}_onShowPlayers(t){var s,a;t.preventDefault(),(s=game.socket)==null||s.emit(u,{operation:"showToAll",displayApp:this,user:game.userId,html:this.render}),this.socketlib.executeForEveryone("showToAll",(a=game.user)==null?void 0:a.name)}setSocketlib(t){this.socketlib=t}updateState(){if(this.state.classNameListActions.length<this.numOfActions){const t=Array.from({length:this.numOfActions-this.state.classNameListActions.length},()=>"symbol");this.state.classNameListActions=this.state.classNameListActions.concat(t)}else if(this.state.classNameListActions.length>this.numOfActions){const t=this.state.classNameListActions.length-this.numOfActions;this.state.classNameListActions=this.state.classNameListActions.slice(0,t)}if(this.state.classNameListReactions.length<this.numOfReactions){const t=Array.from({length:this.numOfReactions-this.state.classNameListReactions.length},()=>"symbol");this.state.classNameListReactions=this.state.classNameListReactions.concat(t)}else if(this.state.classNameListReactions.length>this.numOfReactions){const t=this.state.classNameListReactions.length-this.numOfReactions;this.state.classNameListReactions=this.state.classNameListReactions.slice(0,t)}}}function p(i){console.log(i)}function A(){game.modules.get(o).displayActions2e.render(!0)}let l,r;Hooks.once("init",()=>{console.log(`Initializing ${o}`)});Hooks.on("getSceneControlButtons",i=>{let e=i.find(t=>t.name==="token");e==null||e.tools.push({name:"DisplayActions2e.ButtonName",title:"DisplayActions2e.ButtonHint",icon:"fa fa-angle-double-right",button:!0,onClick:async()=>{var t;l.displayActions2e.render(!0),(t=game.socket)==null||t.emit("module.DisplayActions2e",{event:"DisplayActions2e"})}})});Hooks.once("socketlib.ready",()=>{r=socketlib.registerModule(o),console.log(r),console.log("Jens")});Hooks.on("ready",()=>{var i;l=game.modules.get(o),l.displayActions2e=new f,l.displayActions2e.setSocketlib(r),r.register("showToAll",A),(i=game.socket)==null||i.on(u,e=>{switch(console.log("Jens"),e.operation){case"showToAll":p(e);break;default:console.log(e);break}})});
//# sourceMappingURL=module.js.map
