function __processArg(t,e){var i=null;return t&&(i=t[e]||null,delete t[e]),i}function Controller(){function t(){20==a?a=0:a++;var t=a+".svg";Ti.API.info("Image loaded :"+t),o.setImage(t)}function e(){var t=Alloy.createController("listView").getView();t.open()}require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="index",this.args=arguments[0]||{},arguments[0]&&(__processArg(arguments[0],"__parentSymbol"),__processArg(arguments[0],"$model"),__processArg(arguments[0],"__itemTemplate"));var i=this,r={},n={};i.__views.container=Ti.UI.createWindow({backgroundColor:"red",id:"container",layout:"vertical"}),i.__views.container&&i.addTopLevelView(i.__views.container),i.__views.button=Ti.UI.createButton({id:"button",title:"change Svg file",top:"10",width:"200",height:"50"}),i.__views.container.add(i.__views.button),t?i.addListener(i.__views.button,"click",t):n["$.__views.button!click!changeSvg"]=!0,i.__views.buttonListView=Ti.UI.createButton({id:"buttonListView",top:"50",width:"200",height:"50",title:"ListView test"}),i.__views.container.add(i.__views.buttonListView),e?i.addListener(i.__views.buttonListView,"click",e):n["$.__views.buttonListView!click!openListView"]=!0,r.destroy=function(){},_.extend(i,i.__views);var s=require("com.geraudbourdin.svgview"),o=s.createView({image:"0.svg",width:"350",height:"350",top:0,left:0,backgroundColor:"pink"});i.container.add(o);var a=0;i.container.open(),n["$.__views.button!click!changeSvg"]&&i.addListener(i.__views.button,"click",t),n["$.__views.buttonListView!click!openListView"]&&i.addListener(i.__views.buttonListView,"click",e),_.extend(i,r)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;