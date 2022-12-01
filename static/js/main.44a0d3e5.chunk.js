(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(8),o=n.n(s),r=(n(13),n(3)),c=n(4),d=n(2),h=n(6),l=n(5),j=(n(14),n(0)),b=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={rerender:"",firstDate:void 0,date:void 0,previousDate:void 0,genre:void 0},i.componentDidMount=i.componentDidMount.bind(Object(d.a)(i)),i.handleFictionFormChange=i.handleFictionFormChange.bind(Object(d.a)(i)),i.handleNonfictionFormChange=i.handleNonfictionFormChange.bind(Object(d.a)(i)),i.handleMoreFormChange=i.handleMoreFormChange.bind(Object(d.a)(i)),i.previousDate=i.previousDate.bind(Object(d.a)(i)),i.nextDate=i.nextDate.bind(Object(d.a)(i)),i}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=new Date;e.setDate(e.getDate()+7);var t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=new Date(t.setDate(t.getDate()-t.getDay()));this.setState({previousDate:n,date:n,firstDate:n})}},{key:"handleFictionFormChange",value:function(e){var t=e.target.value;this.setState({genre:t}),this.props.getDate(t,this.state.date)}},{key:"handleNonfictionFormChange",value:function(e){var t=e.target.value;this.setState({genre:t}),this.props.getDate(t,this.state.date)}},{key:"handleMoreFormChange",value:function(e){var t=e.target.value;this.setState({genre:t}),this.props.getDate(t,this.state.date)}},{key:"previousDate",value:function(e,t){e.preventDefault();var n=this.state.date;n.setDate(this.state.date.getDate()-7),this.setState({date:n}),void 0===this.state.genre?this.props.getBooks(this.state.date):this.props.getDate(this.state.genre,this.state.date)}},{key:"nextDate",value:function(e,t){e.preventDefault();this.state.date.getDate(),this.state.date.toLocaleString("default",{month:"long"}),this.state.date.getFullYear();var n=this.state.date;n.setDate(this.state.date.getDate()+7);var i=new Date;i.setDate(i.getDate()+14);var a=new Date(i.getFullYear(),i.getMonth(),i.getDate());n>new Date(a.setDate(a.getDate()-a.getDay()))?alert("The date is out of range"):(this.setState({date:n}),void 0===this.state.genre?this.props.getBooks(this.state.date):this.props.getDate(this.state.genre,this.state.date))}},{key:"render",value:function(){var e=this,t=[];if(void 0!==this.state.date){var n=this.state.date.getDate(),i=this.state.date.toLocaleString("default",{month:"long"}),a=this.state.date.getFullYear();t.push(i," ",n,", ",a)}return Object(j.jsxs)("div",{id:"panel",children:[Object(j.jsx)("h1",{id:"title",children:Object(j.jsx)("a",{id:"titleID",href:"https://colin-pace.github.io/NYT-books-application/",children:"The New York Times Best Sellers"})}),Object(j.jsx)("h2",{id:"subtitle",children:"Authoritatively ranked lists of books sold in the United States, sorted by format and genre."}),Object(j.jsxs)("div",{id:"formBar",children:[Object(j.jsx)("form",{id:"combined-print-and-e-book-fiction",onSubmit:this.handleFictionForm,children:Object(j.jsxs)("select",{value:"FICTION",onChange:this.handleFictionFormChange,autocomplete:"off",children:[Object(j.jsx)("option",{selected:!0,value:!0,children:"FICTION"}),Object(j.jsx)("option",{disabled:!0,children:"---"}),Object(j.jsx)("option",{value:"combined-print-and-e-book-fiction",children:"Combined Print and E-Book Fiction"}),Object(j.jsx)("option",{value:"hardcover-fiction",children:"Hardcover Fiction"})]})}),Object(j.jsx)("form",{id:"nonfiction",onSubmit:this.handleNonfictionFormChange,children:Object(j.jsxs)("select",{value:"NONFICTION",onChange:this.handleNonfictionFormChange,children:[Object(j.jsx)("option",{selected:!0,value:!0,children:"NONFICTION"}),Object(j.jsx)("option",{disabled:!0,children:"---"}),Object(j.jsx)("option",{value:"combined-print-and-e-book-nonfiction",children:"Combined Print and E-Book Nonfiction"}),Object(j.jsx)("option",{value:"paperback-nonfiction",children:"Paperback Nonfiction"})]})}),Object(j.jsx)("form",{onSubmit:this.moreChange,children:Object(j.jsxs)("select",{id:"moreMenu",value:"MORE",onChange:this.handleMoreFormChange,children:[Object(j.jsx)("option",{selected:!0,value:!0,children:"MORE"}),Object(j.jsx)("option",{disabled:!0,children:"---"}),Object(j.jsx)("optgroup",{label:"CHILDREN'S",children:Object(j.jsx)("option",{value:"young-adult-hardcover",children:"Young Adult Hardcover"})})]})}),Object(j.jsxs)("div",{id:"dateNav",children:[Object(j.jsx)("a",{id:"leftNav",href:" ",onClick:function(n){return e.previousDate(n,t)},children:"<"}),t,Object(j.jsx)("a",{id:"rightNav",href:" ",onClick:function(n){return e.nextDate(n,t)},children:">"})]})]})]})}}]),n}(a.a.Component);var u=function(e,t){if(void 0!==e){for(var n=[],i=0;i<5;i++){var a=[],s=Object(j.jsxs)("button",{className:"buyButton",children:["BUY",Object(j.jsxs)("div",{className:"buyButtonText",children:[Object(j.jsx)("a",{href:e[i].buy_links[0].url,children:"Amazon"}),Object(j.jsx)("a",{href:e[i].buy_links[1].url,children:"Apple Books"}),Object(j.jsx)("a",{href:e[i].buy_links[2].url,children:"Barnes and Noble"}),Object(j.jsx)("a",{href:e[i].buy_links[3].url,children:"Books-A-Million"}),Object(j.jsx)("a",{href:e[i].buy_links[4].url,children:"Bookshop"}),Object(j.jsx)("a",{href:e[i].buy_links[5].url,children:"IndieBound"})]})]});if(a.push(s),"forGenreCard"===t)if(1===e[i].weeks_on_list){var o=Object(j.jsx)("div",{className:"genreCard",children:Object(j.jsxs)("div",{className:"genreCardContent",children:[Object(j.jsxs)("div",{className:"rankHistoryTitle",children:[Object(j.jsx)("div",{className:"genreCardRank",children:Object(j.jsx)("h4",{children:e[i].rank})}),Object(j.jsxs)("div",{className:"historyTitleAuthorDescriptionButton",children:[Object(j.jsx)("h4",{className:"history",children:"NEW THIS WEEK"}),Object(j.jsx)("h3",{className:"title",children:e[i].title}),Object(j.jsxs)("h4",{className:"author",children:["by ",e[i].author," ",Object(j.jsx)("span",{className:"authorSeparation",children:"|"})," ",e[i].publisher]}),Object(j.jsx)("p",{className:"description",children:e[i].description}),a]})]}),Object(j.jsx)("div",{className:"cardImage",children:Object(j.jsx)("img",{src:e[i].book_image,alt:"image"})})]})},"".concat(t,"_").concat(i));n.push(o)}else{var r=Object(j.jsx)("div",{className:"genreCard",children:Object(j.jsxs)("div",{className:"genreCardContent",children:[Object(j.jsxs)("div",{className:"rankHistoryTitle",children:[Object(j.jsx)("div",{className:"genreCardRank",children:Object(j.jsx)("h4",{children:e[i].rank})}),Object(j.jsxs)("div",{className:"historyTitleAuthorDescriptionButton",children:[Object(j.jsxs)("h4",{className:"history",children:[e[i].weeks_on_list," WEEKS ON THE LIST"]}),Object(j.jsx)("h3",{className:"title",children:e[i].title}),Object(j.jsxs)("h4",{className:"author",children:["by ",e[i].author," ",Object(j.jsx)("span",{className:"authorSeparation",children:"|"})," ",e[i].publisher]}),Object(j.jsx)("p",{className:"description",children:e[i].description}),a]})]}),Object(j.jsx)("div",{className:"cardImage",children:Object(j.jsx)("img",{src:e[i].book_image,alt:"image"})})]})},"".concat(t,"_").concat(i));n.push(r)}else if(1===e[i].weeks_on_list){var c=Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"cardContent",children:[Object(j.jsxs)("div",{className:"rankAndImage",children:[Object(j.jsx)("h4",{className:"cardRank",children:e[i].rank}),Object(j.jsx)("img",{className:"cardImage",src:e[i].book_image,alt:"image"})]}),Object(j.jsx)("h4",{className:"history",children:"NEW THIS WEEK"}),Object(j.jsx)("h3",{className:"title",children:e[i].title}),Object(j.jsxs)("div",{className:"authorButton",children:[Object(j.jsxs)("h4",{className:"author",children:["by ",e[i].author]}),Object(j.jsx)("div",{className:"button",children:a})]})]})},"".concat(t,"_").concat(i));n.push(c)}else{var d=Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"cardContent",children:[Object(j.jsxs)("div",{className:"rankAndImage",children:[Object(j.jsx)("h4",{className:"cardRank",children:e[i].rank}),Object(j.jsx)("img",{className:"cardImage",src:e[i].book_image,alt:"image"})]}),Object(j.jsxs)("h4",{className:"history",children:[e[i].weeks_on_list," WEEKS ON THE LIST"]}),Object(j.jsx)("h4",{className:"title",children:e[i].title}),Object(j.jsxs)("div",{className:"authorButton",children:[Object(j.jsxs)("h4",{className:"author",children:["by ",e[i].author]}),Object(j.jsx)("div",{className:"button",children:a})]})]})},"".concat(t,"_").concat(i));n.push(d)}}return n}},v=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={index:void 0},i}return Object(c.a)(n,[{key:"getDate",value:function(e,t){e.preventDefault(),this.props.getDate(t,"current"),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=this.props.fiction,n=this.props.nonfiction,i=this.props.hardcoverFiction,a=u(t,"fiction"),s=u(n,"nonfiction"),o=u(i,"hardcoverFiction");return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"cardContainer",children:[Object(j.jsx)("h2",{className:"genreTitle",children:Object(j.jsx)("a",{href:"",onClick:function(t){return e.getDate(t,"combined-print-and-e-book-fiction")},children:"Combined Print and E-Book Fiction >"})}),Object(j.jsx)("div",{id:"fictionCards",children:a})]}),Object(j.jsxs)("div",{className:"cardContainer",children:[Object(j.jsx)("h2",{className:"genreTitle",children:Object(j.jsx)("a",{href:"",onClick:function(t){return e.getDate(t,"combined-print-and-e-book-nonfiction")},children:"Combined Print and E-Book Nonfiction >"})}),Object(j.jsx)("div",{id:"nonfictionCards",children:s})]}),Object(j.jsxs)("div",{className:"cardContainer",children:[Object(j.jsx)("h2",{className:"genreTitle",children:Object(j.jsx)("a",{href:"",onClick:function(t){return e.getDate(t,"hardcover-fiction")},children:"Hardcover Fiction >"})}),Object(j.jsx)("div",{id:"hardcoverFictionCards",children:o})]})]})}}]),n}(a.a.Component),m=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={index:void 0},i}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.books,t=u(e,"forGenreCard");return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"genreTitle",children:this.props.genre}),Object(j.jsx)("div",{id:"genreCards",children:t})]})}}]),n}(a.a.Component),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={modalIndex:void 0,books:void 0,mainPage:!0},i}return Object(c.a)(n,[{key:"render",value:function(){return!0===this.props.error?Object(j.jsxs)("div",{id:"error",children:[Object(j.jsx)("br",{}),"Too many requests were made: please wait a minute and then make another selection"]}):void 0!==this.props.books?Object(j.jsx)("div",{id:"genre",children:Object(j.jsx)(m,{genre:this.props.genre,books:this.props.books})}):Object(j.jsx)("div",{id:"main",children:Object(j.jsx)(v,{fiction:this.props.fiction,nonfiction:this.props.nonfiction,hardcoverFiction:this.props.hardcoverFiction,getDate:this.props.getDate})})}}]),n}(a.a.Component),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={firstLoad:!0,apiKey:"9TBX0DGLbpnhHCfDM986bizRqoGRESJ0",firstDate:void 0,combinedPrintEBooKFiction:void 0,combinedPrintEBooKNonfiction:void 0,hardcoverFiction:void 0,error:!1,date:void 0,books:void 0,genre:void 0},i.componentDidMount=i.componentDidMount.bind(Object(d.a)(i)),i.getBooks=i.getBooks.bind(Object(d.a)(i)),i.getDate=i.getDate.bind(Object(d.a)(i)),i.apiFormat=i.apiFormat.bind(Object(d.a)(i)),i}return Object(c.a)(n,[{key:"apiFormat",value:function(e){var t,n,i;return"current"!==e?(1===(t=String(e.getDate())).length&&(t="0"+t),1===(n=String(e.getMonth()+1)).length&&(n="0"+String(n)),i=e.getFullYear()+"-"+n+"-"+t):i=e,i}},{key:"getBooks",value:function(e){var t,n=this;t="current"!==e?this.apiFormat(e):e,fetch("https://api.nytimes.com/svc/books/v3/lists/".concat(t,"/combined-print-and-e-book-fiction.json?api-key=").concat(this.state.apiKey)).then((function(e){if(e.ok)return e.json();throw n.setState({error:!0}),new Error("An error occurred")})).then((function(e){n.setState({combinedPrintEBooKFiction:e.results.books})})).catch((function(e){console.log(e)})),fetch("https://api.nytimes.com/svc/books/v3/lists/".concat(t,"/combined-print-and-e-book-nonfiction.json?api-key=").concat(this.state.apiKey)).then((function(e){if(e.ok)return e.json();throw n.setState({error:!0}),new Error("An error occurred")})).then((function(e){n.setState({combinedPrintEBooKNonfiction:e.results.books})})).catch((function(e){console.log(e)})),fetch("https://api.nytimes.com/svc/books/v3/lists/".concat(t,"/hardcover-fiction.json?api-key=").concat(this.state.apiKey)).then((function(e){if(e.ok)return e.json();throw n.setState({error:!0}),new Error("An error occurred")})).then((function(e){n.setState({hardcoverFiction:e.results.books,error:!1})})).catch((function(e){console.log(e)}))}},{key:"getDate",value:function(e,t){var n,i=this;!0===this.state.error&&this.setState({error:!1}),void 0===e&&(e=this.state.genre),n="current"!==t?this.apiFormat(t):t,fetch("https://api.nytimes.com/svc/books/v3/lists/".concat(n,"/").concat(e,".json?api-key=").concat(this.state.apiKey)).then((function(e){if(e.ok)return!0===i.state.error&&i.setState({error:!1}),e.json();throw i.setState({error:!0}),new Error("An error occurred")})).then((function(e){i.setState({books:e.results.books,genre:e.results.display_name})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){!0===this.state.firstLoad&&(this.setState({firstLoad:!1}),this.getBooks("current"))}},{key:"render",value:function(){return Object(j.jsxs)("div",{id:"app",children:[Object(j.jsx)(b,{getBooks:this.getBooks,getDate:this.getDate,error:this.state.error,firstLoad:this.state.firstLoad}),Object(j.jsx)(p,{fiction:this.state.combinedPrintEBooKFiction,nonfiction:this.state.combinedPrintEBooKNonfiction,hardcoverFiction:this.state.hardcoverFiction,getDate:this.getDate,error:this.state.error,books:this.state.books,genre:this.state.genre})]})}}]),n}(a.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.44a0d3e5.chunk.js.map