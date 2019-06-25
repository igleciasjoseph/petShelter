(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),s=a.n(r),c=a(8),i=a(9),o=a(11),m=a(10),p=a(12),u=a(5),h=a(13),d=a(6),E=a.n(d),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){E.a.get("/api/pets").then(function(e){a.setState({pets:a.sort(e.data.pets)})}).catch(function(e){console.log(e)})},a.state={pets:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"sort",value:function(e){return e.sort(function(e,t){var a=e.type.toUpperCase(),n=t.type.toUpperCase();return a<n?-1:a>n?1:0}),e}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"mb-5 mt-5"},"These pets are looking for a home!"),l.a.createElement("a",{href:"/new"},"Add a pet to the shelter"),l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,this.state.pets.map(function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(u.b,{to:"/pet/".concat(e._id),className:"btn btn-outline-primary mr-3"},"Details"),l.a.createElement(u.b,{to:"/pet/".concat(e._id,"/edit"),className:"btn btn-outline-success"},"Edit")))}))))}}]),t}(n.Component),f=a(14),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).change=function(e,t){var n=Object(f.a)({},a.state.pet);n[e]=t.target.value,a.setState({pet:n})},a.create=function(e){e.preventDefault(),E.a.post("/api/create",a.state.pet).then(function(e){e.data.errors?(console.log(e.data.errors),a.setState({errors:e.data.errors.errors})):a.props.history.push("/")})},a.state={pet:{name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:"",likes:0},errors:{}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"mb-5 mt-5"},"Know of a pet needing a home?"),l.a.createElement("div",{className:"border border-dark p-3"},l.a.createElement("form",{onSubmit:this.create},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Pet Name:"),l.a.createElement("input",{type:"text",className:"form-control",onChange:this.change.bind(this,"name")}),this.state.errors.name?l.a.createElement("p",null,this.state.errors.name.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Pet Type:"),l.a.createElement("input",{type:"text",className:"form-control",onChange:this.change.bind(this,"type")}),this.state.errors.type?l.a.createElement("p",null,this.state.errors.type.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description:"),l.a.createElement("input",{type:"text",className:"form-control",onChange:this.change.bind(this,"description")}),this.state.errors.description?l.a.createElement("p",null,this.state.errors.description.message):""),l.a.createElement("div",null,l.a.createElement("label",null,"Skills:"),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Skill 1:"),l.a.createElement("input",{type:"text",onChange:this.change.bind(this,"skillOne")})),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Skill 2:"),l.a.createElement("input",{type:"text",onChange:this.change.bind(this,"skillTwo")})),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Skill 3:"),l.a.createElement("input",{type:"text",onChange:this.change.bind(this,"skillThree")}))),l.a.createElement("input",{type:"submit",className:"btn btn-success mr-3"}),l.a.createElement(u.b,{to:"/",className:"btn btn-danger"},"Cancel"))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){E.a.get("/api/pets/".concat(a.props.match.params._id)).then(function(e){a.setState({pet:e.data.pet})})},a.like=function(){var e=Object(f.a)({},a.state);e.liked=!0,e.pet.likes+=1,a.setState(e),E.a.put("/api/pets/".concat(a.props.match.params._id),a.state.pet).then(function(e){a.componentDidMount()})},a.adopt=function(){E.a.delete("/api/pets/".concat(a.props.match.params._id)).then(function(e){e.data.errors?console.log(e.data.errors.errors):a.props.history.push("/")})},a.state={pet:{},liked:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"mt-5 mb-5"},"Pet Shelter"),l.a.createElement("h1",{className:"mb-5"},"Details about ",this.state.pet.name),l.a.createElement(u.b,{to:"/",className:"btn btn-primary mb-5"},"Home"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Pet Type:")," ",l.a.createElement("p",null,this.state.pet.type)),l.a.createElement("div",null,l.a.createElement("h3",null,"Description:")," ",l.a.createElement("p",null,this.state.pet.description)),l.a.createElement("div",null,l.a.createElement("h3",null,"Skills:"),l.a.createElement("div",null,l.a.createElement("li",null,this.state.pet.skillOne),l.a.createElement("li",null,this.state.pet.skillTwo),l.a.createElement("li",null,this.state.pet.skillThree))),l.a.createElement("div",{className:"mb-5"},l.a.createElement("h3",null,"Likes:"),l.a.createElement("p",{className:"mb-5"},this.state.pet.likes),this.state.liked?l.a.createElement("button",{onClick:this.like.bind(this),className:"btn btn-dark",disabled:!0},"Like this pet"):l.a.createElement("button",{onClick:this.like.bind(this),className:"btn btn-info"},"Like this pet")),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.adopt.bind(this),className:"btn btn-warning"},"Adopt this pet"))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){E.a.get("/api/pets/".concat(a.props.match.params._id)).then(function(e){a.setState({pet:e.data.pet})})},a.change=function(e,t){var n=Object(f.a)({},a.state.pet);n[e]=t.target.value,a.setState({pet:n})},a.update=function(e){e.preventDefault(),E.a.put("/api/pets/".concat(a.state.pet._id),a.state.pet).then(function(e){e.data.errors?a.setState({errors:e.data.errors.errors}):a.props.history.push("/")})},a.state={pet:{name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""},errors:{}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"border border-dark p-3 mb-5 mt-5"},l.a.createElement("form",{onSubmit:this.update},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Pet Name:"),l.a.createElement("input",{type:"text",className:"form-control",onChange:this.change.bind(this,"name"),value:this.state.pet.name}),this.state.errors.name?l.a.createElement("p",null,this.state.errors.name.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Pet Type:"),l.a.createElement("input",{type:"text",className:"form-control",onChange:this.change.bind(this,"type"),value:this.state.pet.type}),this.state.errors.type?l.a.createElement("p",null,this.state.errors.type.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description:"),l.a.createElement("input",{type:"text",className:"form-control",onChange:this.change.bind(this,"description"),value:this.state.pet.description}),this.state.errors.description?l.a.createElement("p",null,this.state.errors.description.message):""),l.a.createElement("div",null,l.a.createElement("label",null,"Skills:"),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Skill 1:"),l.a.createElement("input",{type:"text",onChange:this.change.bind(this,"skillOne"),value:this.state.pet.skillOne})),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Skill 2:"),l.a.createElement("input",{type:"text",onChange:this.change.bind(this,"skillTwo"),value:this.state.pet.skillTwo})),l.a.createElement("div",{className:"form-group"},l.a.createElement("p",null,"Skill 3:"),l.a.createElement("input",{type:"text",onChange:this.change.bind(this,"skillThree"),value:this.state.pet.skillThree}))),l.a.createElement("input",{type:"submit",className:"btn btn-success mr-3"}),l.a.createElement(u.b,{to:"/",className:"btn btn-danger"},"Cancel"))))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(h.a,{exact:!0,path:"/",component:b}),l.a.createElement(h.a,{path:"/new",component:g}),l.a.createElement(h.a,{exact:!0,path:"/pet/:_id",component:v}),l.a.createElement(h.a,{path:"/pet/:_id/edit",component:k})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.3115c70c.chunk.js.map