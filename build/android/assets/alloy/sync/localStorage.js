function S4(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function guid(){return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()}function InitAdapter(){throw"localStorage persistence supported only with MobileWeb."}function Sync(t,e,i){function r(t){localStorage.setItem(n,JSON.stringify(t))}var n=e.config.adapter.collection_name,s=e.config.data,o=null;switch(t){case"create":e.id||(e.id=guid(),e.set(e.idAttribute,e.id)),s[e.id]=e,r(s),o=e.toJSON();break;case"read":var a=localStorage.getItem(n),l=a&&JSON.parse(a)||{},h=0;for(var u in l){var c=new e.config.Model(l[u]);e.models.push(c),h++}e.length=h,o=1===h?e.models[0]:e.models;break;case"update":s[e.id]=e,r(s),o=e.toJSON();break;case"delete":delete s[e.id],r(s),o=e.toJSON()}o?(_.isFunction(i.success)&&i.success(o),"read"===t&&e.trigger("fetch")):_.isFunction(i.error)&&i.error(o)}var _=require("alloy/underscore")._;module.exports.sync=Sync,module.exports.beforeModelCreate=function(t){return t=t||{},t.data={},InitAdapter(),t},module.exports.afterModelCreate=function(t){return t=t||{},t.prototype.config.Model=t,t};