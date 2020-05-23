(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{214:function(e,t,a){e.exports=a(405)},219:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(210),i=a.n(c),l=(a(219),a(17)),o=a(18),s=a(19),u=a(20),m=a(4),d=a(28),p=a(7),h=Object(p.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/create"},"New Blog")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))})),E=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signin"},"Login")))},f=Object(p.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}),null)((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(h,{profile:a}):r.a.createElement(E,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(m.b,{to:"/",className:"brand-logo left"},"MarioBlog"),n))})),b=a(46),g=a.n(b),v=function(e){var t=e.notifications,a=e.auth;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content pink lighten-4 text-darken-3"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},(t=e.userId,n=e.user,a.uid===t?(console.log("match"),r.a.createElement("span",{className:"pink-text"},"You ")):r.a.createElement("span",{className:"pink-text"},n," ")),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"black-text note-date"},g()(e.time.toDate()).fromNow()));var t,n}))))))},N=function(e){var t=e.project,a=e.auth;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content pink lighten-4 black-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),a.uid===t.authorId?r.a.createElement("p",null,"Posted by You"):r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"black-text"},g()(t.createdAt.toDate()).calendar())))},j=function(e){var t=e.projects,a=e.auth;return r.a.createElement("div",{className:"section"},t&&t.map((function(e){return r.a.createElement(m.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(N,{project:e,auth:a}))})))},O=a(22),C=a(10),y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("h6",{className:"pink lighten-4 center"},"Share your story with us !"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(j,{projects:t,auth:a})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(v,{notifications:n,auth:a})))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),k=Object(C.d)(Object(p.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(O.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(y),R=a(29),S=Object(C.d)(Object(p.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth,id:a}}),(function(e){return{deleteProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;(0,n.getFirestore)().collection("projects").doc(e).delete().then((function(){t({type:"DELETE_PROJECT",id:e})})).catch((function(e){t({type:"DELETE_PROJECT_ERROR",err:e})}))}}(t))}}})),Object(O.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project,a=e.auth,n=e.id;if(!a.uid)return r.a.createElement(d.a,{to:"/signin"});return t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content pink lighten-4 text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action pink lighten-3 text-darken-3"},a.uid===t.authorId?r.a.createElement("div",null,"Posted by You"):r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,g()(t.createdAt.toDate()).calendar()))),r.a.createElement(m.b,{to:"/",className:"btn pink lighten-1 z-depth-0"},"Back"),function(){if(a.uid===t.authorId)return console.log("match"),r.a.createElement("div",{className:"right"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0 right ml",onClick:function(){return function(n){a.uid===t.authorId&&window.confirm("Are you sure you want to delete ?")&&(e.deleteProject(n),e.history.push("/"))}(n)}},"Delete"),r.a.createElement(m.b,{to:"/project/"+n+"/edit",className:"btn pink lighten-1 z-depth-0"},"Edit"))}()):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project ..."))})),w=a(26),P=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"pink lighten-4 text-darken-3"},r.a.createElement("h5",{className:"red-text"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"black-text"},r.a.createElement("span",null,"Email: test@mario.com")," ",r.a.createElement("br",null),r.a.createElement("span",null,"Password: 123456")),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login")),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null)))}}]),a}(n.Component),I=Object(p.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(P),x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"pink lighten-4 text-darken-3"},r.a.createElement("h5",{className:"red-text"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign up")),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)))}}]),a}(n.Component),F=Object(p.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(x),T=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"pink lighten-4 text-darken-3"},r.a.createElement("h5",null,"New Blog"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement(m.b,{to:"/",className:"btn pink lighten-1 z-depth-0 mt"},"Back"),r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0 right"},"Create")))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),_=Object(p.b)((function(e,t){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(R.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(T),A=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:"",title:"",content:""},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.props,n=a.auth,r=a.project;n.uid===r.authorId&&(e.props.editProject(e.state),e.props.history.push("/"))},e}return Object(o.a)(a,[{key:"componentWillMount",value:function(){var e=this.props,t=e.id,a=e.project;t&&a&&this.setState({id:t,title:a.title,content:a.content})}},{key:"componentWillReceiveProps",value:function(e){var t=e.id,a=e.project;t&&a&&this.setState({id:t,title:a.title,content:a.content})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.content;return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"cyan lighten-5 text-darken-3"},r.a.createElement("h5",null,"Edit Blog"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title",className:t?"active":null},"Title"),r.a.createElement("input",{type:"text",id:"title",value:t,onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content",className:a?"active":null},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",value:a,onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement(m.b,{to:"/",className:"btn pink lighten-1 z-depth-0 mt"},"Back"),r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0 right"},"Save")))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),L=Object(C.d)(Object(p.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects,r=n?n[a]:null;return{auth:e.firebase.auth,project:r,id:a}}),(function(e){return{editProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;(0,n.getFirestore)().collection("projects").doc(e.id).update(Object(R.a)({},e)).then((function(){t({type:"EDIT_PROJECT",project:e})})).catch((function(e){t({type:"EDIT_PROJECT_ERROR",err:e})}))}}(t))}}})),Object(O.firestoreConnect)([{collection:"projects"}]))(A),D=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:k}),r.a.createElement(d.b,{exact:!0,path:"/project/:id",component:S}),r.a.createElement(d.b,{path:"/signin",component:I}),r.a.createElement(d.b,{path:"/signup",component:F}),r.a.createElement(d.b,{path:"/create",component:_}),r.a.createElement(d.b,{path:"/project/:id/edit",component:L}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z={authError:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(R.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(R.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(R.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(R.a)({},e,{authError:t.err.message});default:return e}},J={},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;case"EDIT_PROJECT":return console.log("edited project",t.project),e;case"EDIT_PROJECT_ERROR":return console.log("edit project error",t.err),e;case"DELETE_PROJECT":return console.log("deleted project",t.id),e;case"DELETE_PROJECT_ERROR":return console.log("deleted project error",t.err),e;default:return e}},G=a(58),W=Object(C.c)({auth:U,project:B,firestore:G.firestoreReducer,firebase:O.firebaseReducer}),M=a(213),Y=a(90),H=a.n(Y);a(400),a(403);H.a.initializeApp({apiKey:"AIzaSyAc1RHb0d9sTy_ntiewPLH7f2k-9EzE84Q",authDomain:"marioplan-66b4a.firebaseapp.com",databaseURL:"https://marioplan-66b4a.firebaseio.com",projectId:"marioplan-66b4a",storageBucket:"marioplan-66b4a.appspot.com",messagingSenderId:"1002390649563",appId:"1:1002390649563:web:d927c93796f8cdf13a2afe",measurementId:"G-NDLKJ6V47C"}),H.a.firestore();var K=H.a,Q=Object(C.e)(W,Object(C.d)(Object(C.a)(M.a.withExtraArgument({getFirebase:O.getFirebase,getFirestore:G.getFirestore})),Object(G.reduxFirestore)(K),Object(O.reactReduxFirebase)(K,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));Q.firebaseAuthIsReady.then((function(){i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:Q},r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}))}},[[214,1,2]]]);
//# sourceMappingURL=main.bdfe38d7.chunk.js.map