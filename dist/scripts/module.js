var f=Object.defineProperty;var d=(a,e,t)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var n=(a,e,t)=>(d(a,typeof e!="symbol"?e+"":e,t),t);const g="pf2e-display-actions",o=g,u=`module.${o}`;var m;class h extends Application{constructor(t){super();n(this,"clickString","symbolClick");n(this,"actionImage","/systems/pf2e/icons/actions/OneAction.webp");n(this,"reactionImage","/systems/pf2e/icons/actions/Reaction.webp");n(this,"defaultNumOfActions",3);n(this,"defaultNumOfReactions",1);n(this,"state",{numOfActions:this.defaultNumOfActions,numOfReactions:this.defaultNumOfReactions,classNameListActions:Array.from({length:this.defaultNumOfActions},()=>"symbol"),classNameListReactions:Array.from({length:this.defaultNumOfReactions},()=>"symbol"),sentFromName:String((m=game.user)==null?void 0:m.name)});t&&(this.state=t)}get title(){var s;console.log(this.state.sentFromName),console.log(game.user);let t=game.i18n.localize("DisplayActions2e.WindowTitle");return this.state.sentFromName===((s=game.user)==null?void 0:s.name)?t:t.concat(" sent from",this.state.sentFromName)}static get defaultOptions(){return foundry.utils.mergeObject(super.defaultOptions,{id:"DisplayActions2e",template:`modules/${o}/templates/result.hbs`,width:600,height:200,resizable:!0,title:"DisplayActions2e.WindowTitle"})}getData(){return this.updateState(),{numOfActions:this.state.numOfActions,numOfReactions:this.state.numOfReactions,actionImagePayload:this.buildHandlebarPayload(this.state.numOfActions,{actionImage:this.actionImage},this.state.classNameListActions),reactionImagePayload:this.buildHandlebarPayload(this.state.numOfReactions,{reactionImage:this.reactionImage},this.state.classNameListReactions)}}activateListeners(t){super.activateListeners(t),t.find("img.symbol").on("click",this._onClickSymbolImage.bind(this)),t.find("input.input-counter").on("change",this._onChangeCountNumber.bind(this))}_onClickSymbolImage(t){t.preventDefault();const s=t.currentTarget;if(s==null||s.className===void 0||s.className===null)return;s.className.includes(this.clickString)?s.className=s.className.replace(this.clickString,""):s.className=s.className.concat(" ",this.clickString);const i=parseInt(s.id.slice(1));switch(s.id.charAt(0)){case"a":this.state.classNameListActions[i]=s.className;break;case"r":this.state.classNameListReactions[i]=s.className;break;default:console.error(`${o} handled Image onClicks wrong.`)}}buildHandlebarPayload(t,s,i){let r=[];for(let c=0;c<t;c++)r.push(foundry.utils.mergeObject({number:c,cssClass:i[c]},s));return r}_onChangeCountNumber(t){t.preventDefault();const s=t.currentTarget,i=parseInt(s.value);if(!isNaN(i)&&i>=0){switch(s.id){case"count-action":this.state.numOfActions=i;break;case"count-reaction":this.state.numOfReactions=i;break;default:console.error(`${o} incorrectly handled number of actions!`)}this.render()}}_getHeaderButtons(){const t=super._getHeaderButtons(),s={label:"JOURNAL.ActionShow",class:"share-image",icon:"fas fa-eye",onclick:i=>this._onShowPlayers(i)};return t.unshift(s),t}_onShowPlayers(t){var s;t.preventDefault(),(s=game.socket)==null||s.emit(u,{operation:"showToAll",state:this.state,user:game.userId})}updateState(){if(this.state.classNameListActions.length<this.state.numOfActions){const t=Array.from({length:this.state.numOfActions-this.state.classNameListActions.length},()=>"symbol");this.state.classNameListActions=this.state.classNameListActions.concat(t)}else if(this.state.classNameListActions.length>this.state.numOfActions){const t=this.state.classNameListActions.length-this.state.numOfActions;this.state.classNameListActions=this.state.classNameListActions.slice(0,t)}if(this.state.classNameListReactions.length<this.state.numOfReactions){const t=Array.from({length:this.state.numOfReactions-this.state.classNameListReactions.length},()=>"symbol");this.state.classNameListReactions=this.state.classNameListReactions.concat(t)}else if(this.state.classNameListReactions.length>this.state.numOfReactions){const t=this.state.classNameListReactions.length-this.state.numOfReactions;this.state.classNameListReactions=this.state.classNameListReactions.slice(0,t)}}}function N(a){const e=new h(a.state);console.log("shark"),console.log(a.user),e.render(!0,{id:`DisplayActions2e${a.user}`})}let l;Hooks.once("init",()=>{console.log(`Initializing ${o}`)});Hooks.on("getSceneControlButtons",a=>{let e=a.find(t=>t.name==="token");e==null||e.tools.push({name:"DisplayActions2e.ButtonName",title:"DisplayActions2e.ButtonHint",icon:"fa fa-angle-double-right",button:!0,onClick:async()=>{var t;l.displayActions2e.render(!0),(t=game.socket)==null||t.emit("module.DisplayActions2e",{event:"DisplayActions2e"})}})});Hooks.on("ready",()=>{var a;l=game.modules.get(o),l.displayActions2e=new h,(a=game.socket)==null||a.on(u,e=>{switch(e.operation){case"showToAll":N(e);break;default:console.log(e);break}})});
//# sourceMappingURL=module.js.map
