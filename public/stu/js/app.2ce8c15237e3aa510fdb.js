webpackJsonp([0],{"8JKc":function(t,i){},EDgR:function(t,i){function e(t){var i=document.documentElement.clientHeight/t;document.querySelector("html").style.fontSize=100*i+"px"}document.addEventListener("DOMContentLoaded",function(){e(1156)}),window.onresize=function(){e(1156)}},F5Q2:function(t,i){},IUBz:function(t,i){},"M/jH":function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},n,!1,function(t){e("8JKc")},null,null).exports,o=e("/ocq"),r={name:"slider",props:["nums"],data:function(){return{sliderBox:null,length:0,sliderList:null,startx:0,movex:0,initx:0,dir:"",maxlength:50,num:0}},methods:{start:function(t){this.sliderBox.style.transition="none",this.initx=getComputedStyle(this.sliderBox,null)["margin-left"]?parseInt(getComputedStyle(this.sliderBox,null)["margin-left"]):0,this.startx=t.touches[0].pageX,console.log(this.startx),this.sliderBox.addEventListener("touchmove",this.move),this.sliderBox.addEventListener("touchend",this.end)},move:function(t){this.movex=t.touches[0].pageX,Math.abs(this.movex-this.startx)&&(this.movex>this.startx?this.dir="right":this.startx>this.movex&&(this.dir="left"),this.sliderBox.style.marginLeft=this.initx+(this.movex-this.startx)+"px")},end:function(t){"left"==this.dir?Math.abs(this.movex-this.startx)>this.maxlength&&(this.num--,this.num<-(this.sliderList.length-1)&&(this.num=-(this.sliderList.length-1))):"right"==this.dir&&Math.abs(this.movex-this.startx)>this.maxlength&&(this.num++,this.num>0&&(this.num=0),console.log(this.num)),this.sliderBox.style.transition="margin 1s linear",this.sliderBox.style.marginLeft=this.num*document.documentElement.clientWidth+"px",this.sliderBox.removeEventListener("touchmove",this.move),this.sliderBox.removeEventListener("touchend",this.end)}},mounted:function(){},watch:{nums:function(){this.length=this.nums,this.sliderBox=this.$refs["slider-box"],this.sliderBox.style.width=100*this.nums+"%",this.sliderList=this.sliderBox.getElementsByClassName("slider-list")}}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"slider-win"},[e("div",{ref:"slider-box",staticClass:"slider-box",on:{"&touchstart":function(i){t.start(i)}}},[t._t("default")],2)])},staticRenderFns:[]};var l={components:{slider:e("VU/8")(r,c,!1,function(t){e("yMxg")},"data-v-6c5e5af8",null).exports},methods:{logout:function(){sessionStorage.removeItem("stuLogin"),this.$router.push("/login")}},data:function(){return{sliders:[]}},mounted:function(){this.sliders=[{img:"/static/img/1.jpg"},{img:"/static/img/2.jpg"},{img:"/static/img/111.jpeg"}]}},u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("header",{staticClass:"mui-bar mui-bar-nav"},[e("router-link",{staticClass:"mui-action-back  mui-pull-left photo",attrs:{to:"/center",tag:"a"}}),t._v(" "),e("a",{staticClass:"mui-action-back  mui-pull-right logout",on:{click:t.logout}},[t._v(" 退出")]),t._v(" "),e("h1",{staticClass:"mui-title"},[t._v("主页")])],1),t._v(" "),e("div",{staticClass:"mui-content"},[e("slider",{attrs:{nums:t.sliders.length}}),t._v(" "),e("ul",{staticClass:"opts"},[e("router-link",{staticClass:"opt",attrs:{to:"/kaoshi",tag:"li"}},[e("span",{staticClass:"mui-icon mui-icon mui-icon-compose"}),t._v(" "),e("div",{staticClass:"info"},[t._v("我要考试")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)],1),t._v(" "),t._m(2)],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("li",{staticClass:"opt"},[i("span",{staticClass:"mui-icon mui-icon mui-icon-compose"}),this._v(" "),i("div",{staticClass:"info"},[this._v("我要出题")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("li",{staticClass:"opt"},[i("span",{staticClass:"mui-icon mui-icon mui-icon-compose"}),this._v(" "),i("div",{staticClass:"info"},[this._v("我要出题")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ul",{staticClass:"opts"},[e("li",{staticClass:"opt"},[e("span",{staticClass:"mui-icon  mui-icon-star"}),t._v(" "),e("div",{staticClass:"info"},[t._v("我要出题")])]),t._v(" "),e("li",{staticClass:"opt"},[e("span",{staticClass:"mui-icon mui-icon mui-icon-compose"}),t._v(" "),e("div",{staticClass:"info"},[t._v("我要出题")])]),t._v(" "),e("li",{staticClass:"opt"},[e("span",{staticClass:"mui-icon mui-icon mui-icon-compose"}),t._v(" "),e("div",{staticClass:"info"},[t._v("我要出题")])])])}]};var m=e("VU/8")(l,u,!1,function(t){e("vIaY")},"data-v-41447bb4",null).exports,d=e("mvHQ"),v=e.n(d),h={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"username",style:{"margin-top":t.top}},[e("span",{staticClass:"mui-icon",class:t.icon}),t._v(" "),"checkbox"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.name)?t._i(t.name,null)>-1:t.name},on:{keyup:t.up,change:function(i){var e=t.name,s=i.target,n=!!s.checked;if(Array.isArray(e)){var a=t._i(e,null);s.checked?a<0&&(t.name=e.concat([null])):a>-1&&(t.name=e.slice(0,a).concat(e.slice(a+1)))}else t.name=n}}}):"radio"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.name,null)},on:{keyup:t.up,change:function(i){t.name=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.name},on:{keyup:t.up,input:function(i){i.target.composing||(t.name=i.target.value)}}})])},staticRenderFns:[]};var p={name:"login",components:{username:e("VU/8")({data:function(){return{name:""}},methods:{up:function(){this.$emit("getval",this.prop,this.name)}},props:["top","placeholder","type","icon","prop"]},h,!1,function(t){e("F5Q2")},"data-v-7e673039",null).exports},data:function(){return{}},methods:{getval:function(t,i){this[t]=i},submit:function(){var t=this,i="name="+this.name+"&pass="+this.pass;fetch("/api/stuLogin/login?"+i).then(function(t){return t.json()}).then(function(i){sessionStorage.stuLogin=v()(i),t.$router.push("/")})}}},f={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"box"},[i("div",{staticClass:"photo"}),this._v(" "),i("username",{attrs:{top:"3.9rem",placeholder:"请输入学生名",type:"text",icon:"mui-icon-person",prop:"name"},on:{getval:this.getval}}),this._v(" "),i("username",{attrs:{top:"0.3rem",placeholder:"请输入密码",type:"password",icon:"mui-icon-locked",prop:"pass"},on:{getval:this.getval}}),this._v(" "),i("div",{staticClass:"btn",on:{click:this.submit}},[this._v("\n         Login\n     ")])],1)},staticRenderFns:[]};var _=e("VU/8")(p,f,!1,function(t){e("PdZa")},"data-v-44782b7d",null).exports,g={name:"kaoshi",methods:{back:function(t){this.$router.go(-1)},go:function(t){var i=new Date(t.start).getTime(),e=new Date(t.end).getTime(),s=(new Date).getTime();s>i&&s<e?this.$router.push("/view?id="+t.id):alert("请等待开考时间")}},data:function(){return{datas:[]}},mounted:function(){var t=this;fetch("/api/stukaoshi/kaoshi?cid="+JSON.parse(sessionStorage.stuLogin).cid).then(function(t){return t.json()}).then(function(i){t.datas=i})}},x={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("header",{staticClass:"mui-bar mui-bar-nav"},[e("a",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",on:{click:function(i){i.preventDefault(),t.back(i)}}}),t._v(" "),e("h1",{staticClass:"mui-title"},[t._v("待考项目")])]),t._v(" "),e("div",{staticClass:"mui-content"},[e("ul",{staticClass:"mui-table-view"},t._l(t.datas,function(i){return e("li",{staticClass:"mui-table-view-cell"},[e("span",{staticClass:"mui-navigate-right",on:{click:function(e){t.go(i)}}},[t._v("\n                    "+t._s(i.teachname)),e("br"),t._v("\n\n                    考试时间"),e("br"),t._v(" "),e("time",[t._v("（"+t._s(i.start)+"-"+t._s(i.end)+"）")])])])}))])])},staticRenderFns:[]};var C=e("VU/8")(g,x,!1,function(t){e("IUBz")},"data-v-07b62f37",null).exports,b={name:"preview",methods:{back:function(){this.$router.go(-1)},show:function(){console.log(this.raidoData),console.log(this.checkData)}},data:function(){return{all:["abc"],raidoData:[],checkData:[],jiandaData:[],totalScore:0}},mounted:function(){var t=this,i=this.$route.query.id;fetch("/api/stukaoshi/shiti?id="+i).then(function(t){return t.json()}).then(function(i){console.log(i);for(var e=0;e<i.length;e++)1==i[e].typeid?t.raidoData.push(i[e]):2==i[e].typeid?t.checkData.push(i[e]):t.jiandaData.push(i[e])})}},k={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("header",{staticClass:"mui-bar mui-bar-nav"},[e("a",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",on:{click:function(i){i.preventDefault(),t.back(i)}}}),t._v(" "),e("h1",{staticClass:"mui-title"},[t._v("开始考试")])]),t._v(" "),e("div",{staticClass:"mui-content"},[e("div",[t._v("\n        单选题:\n        "),t._l(t.raidoData,function(i,s){return e("div",{staticClass:"box"},[e("div",{staticClass:"title"},[t._v("\n                题目： "+t._s(i.title)+"   "+t._s(i.score)+"\n            ")]),t._v(" "),e("div",{staticClass:"opts"},t._l(i.options,function(n,a){return e("div",{staticClass:"mui-input-row mui-radio"},[e("label",[t._v(" "+t._s(1*a+1)+". "+t._s(n))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:i.info,expression:"item.info"}],attrs:{name:s,type:"radio"},domProps:{value:a,checked:t._q(i.info,a)},on:{change:function(e){t.$set(i,"info",a)}}})])})),t._v(" "),e("div",{staticClass:"line"})])})],2),t._v(" "),e("div",[t._v("\n        多选题:\n        "),t._l(t.checkData,function(i,s){return e("div",{staticClass:"box"},[e("div",{staticClass:"title"},[t._v("\n                题目： "+t._s(i.title)+"  "+t._s(i.score)+"\n            ")]),t._v(" "),e("div",{staticClass:"opts"},[t._v("\n                选项:\n                "),e("div"),t._v(" "),t._l(i.options,function(s,n){return e("div",{staticClass:"mui-input-row mui-checkbox"},[e("label",[t._v(t._s(1*n+1)+". "+t._s(s))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:i.info,expression:"item.info"}],attrs:{name:"checkbox1",value:"abc",type:"checkbox"},domProps:{value:n,checked:Array.isArray(i.info)?t._i(i.info,n)>-1:i.info},on:{change:function(e){var s=i.info,a=e.target,o=!!a.checked;if(Array.isArray(s)){var r=n,c=t._i(s,r);a.checked?c<0&&t.$set(i,"info",s.concat([r])):c>-1&&t.$set(i,"info",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(i,"info",o)}}})])})],2),t._v(" "),e("div",{staticClass:"line"})])}),t._v(" "),e("input",{attrs:{type:"button",value:"点击"},on:{click:t.show}})],2),t._v(" "),e("div",[t._v("\n        简答题：\n        "),t._l(t.jiandaData,function(i,s){return e("div",{staticClass:"box"},[e("div",{staticClass:"title"},[t._v("\n                题目： "+t._s(i.title)+" "+t._s(i.score)+"\n            ")]),t._v(" "),e("div",[t._v("\n                答案:\n                "),e("div",[t._v("\n                    "+t._s(i.daan)+"\n                ")])]),t._v(" "),e("div",{staticClass:"line"})])})],2)])])},staticRenderFns:[]};var y=e("VU/8")(b,k,!1,function(t){e("zrnV")},"data-v-6aae91fc",null).exports;s.a.use(o.a);var w=new o.a({routes:[{path:"/",component:m},{path:"/login",component:_},{path:"/kaoshi",component:C},{path:"/view",component:y}]});w.beforeEach(function(t,i,e){"/login"==t.path?sessionStorage.stuLogin&&"yes"==JSON.parse(sessionStorage.stuLogin).message?e("/"):e():sessionStorage.stuLogin&&"yes"==JSON.parse(sessionStorage.stuLogin).message?e():e("/login")});var $=w;e("M/jH"),e("EDgR");s.a.config.productionTip=!1,new s.a({el:"#app",router:$,components:{App:a},template:"<App/>"})},PdZa:function(t,i){},vIaY:function(t,i){},yMxg:function(t,i){},zrnV:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.2ce8c15237e3aa510fdb.js.map