(this.webpackJsonpcovid19tracker=this.webpackJsonpcovid19tracker||[]).push([[0],{27:function(e,t,n){e.exports=n(48)},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),s=(n(32),n(3)),i=n(4),o=n(6),u=n(5),h=(n(33),n(7)),m=n.n(h),d=n(15),f=(n(35),n(18),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={status:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.covid19india.org/data.json",e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n.statewise),this.setState({status:Object.entries(n.statewise)}),console.log(this.state.status[0][1]);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("table",{align:"center"},r.a.createElement("tr",null,r.a.createElement("th",null,"sr no"),r.a.createElement("th",null,"State"),r.a.createElement("th",null,"Confirmed"),r.a.createElement("th",null,"Active"),r.a.createElement("th",null,"Recovered"),r.a.createElement("th",null,"Deaths")),this.state.status.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,t+=1),r.a.createElement("td",null,e[1].state),r.a.createElement("td",null,e[1].confirmed),r.a.createElement("td",null,e[1].active),r.a.createElement("td",null,e[1].recovered),r.a.createElement("td",null,e[1].deaths))})),r.a.createElement("tr",null))}}]),n}(a.Component)),p=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={district:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.covid19india.org/state_district_wise.json",e.next=3,fetch("https://api.covid19india.org/state_district_wise.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({district:Object.entries(n.Maharashtra.districtData)}),console.log(this.state.district);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("table",{align:"left"},r.a.createElement("tr",null,r.a.createElement("th",null,"sr no"),r.a.createElement("th",null,"District"),r.a.createElement("th",null,"Confirmed")),this.state.district.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,t+=1),r.a.createElement("td",null," ",e[0])," ",r.a.createElement("td",null,e[1].confirmed))})))}}]),n}(a.Component),v=n(23),E=n.n(v),b=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null," ",E()().format("MMMM Do YYYY, h:mm:ss a")))}}]),n}(a.Component),j=(n(47),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={news:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=254af5c7543644ea95f7480f596cec11",e.next=3,fetch("http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=254af5c7543644ea95f7480f596cec11");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({news:n.articles}),console.log(this.state.news);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("section",{class:"mw7 right  "},r.a.createElement("h2",{class:"athelas ph3 ph0-l"},"News"),this.state.news.map((function(e){return r.a.createElement("article",{className:"pv4 bt bb b--black-10 ph3 ph0-l"},r.a.createElement("div",{className:"flex flex-column flex-row-ns"},r.a.createElement("div",{class:"w-10 w-6-ns pr3-ns order-2 order-1-ns"},r.a.createElement("h4",null," ",e.source.name),r.a.createElement("h3",{class:"f3 athelas mt0 lh-title"},e.title),r.a.createElement("p",{class:"f5 f4-l lh-copy athelas"},e.description),r.a.createElement("a",{href:e.url},"Click For more")),r.a.createElement("div",{class:"pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns"},r.a.createElement("img",{src:e.urlToImage,width:"500",height:"250",className:"db"}))))})))}}]),n}(a.Component)),w=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(p,null),r.a.createElement(f,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.2e1b8a1a.chunk.js.map