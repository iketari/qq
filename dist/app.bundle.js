webpackJsonp([0],{0:function(t,exports,e){e(1),t.exports=e(298)},298:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=e(299),a=n(i),s=e(301),u=n(s),r=e(307),o=n(r),l=e(309),c=n(l),d=e(310),f=n(d),v=e(392),h=n(v),p=e(434),b=n(p);e(438);var m={apiKey:"AIzaSyBS3NgOJoNZ9NhYrq4WG7xLZM4RyeKn66w",authDomain:"qinq-9d53f.firebaseapp.com",databaseURL:"https://qinq-9d53f.firebaseio.com",storageBucket:"qinq-9d53f.appspot.com",messagingSenderId:"475423633554"};u.default.initializeApp(m),a.default.module("app",[c.default,o.default,f.default,h.default]).config(["$locationProvider",function(t){"ngInject";t.html5Mode(!0).hashPrefix("!")}]).component("app",b.default)},310:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(299),a=n(i),s=e(311),u=n(s),r=e(320),o=n(r),l=a.default.module("app.common",[u.default,o.default]).name;exports.default=l},311:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(299),a=n(i),s=e(309),u=n(s),r=e(312),o=n(r),l=a.default.module("navbar",[u.default]).component("navbar",o.default).name;exports.default=l},312:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(313),a=n(i),s=e(314),u=n(s);e(316);var r={restrict:"E",bindings:{active:"<",user:"<"},template:a.default,controller:u.default};exports.default=r},313:function(t,exports){t.exports='<nav class="navbar">\n\t<div class="nav-wrapper teal darken-1">\n      <a ui-sref="home" class="brand-logo left">Questions in Queue</a>\n\n      \t<div ng-show="$ctrl.user.displayName" class="chip right hide-on-med-and-down">\n\t\t\t<img ng-show="$ctrl.user.photoURL" src="{{ $ctrl.user.photoURL }}" alt="Contact Person">\n\t\t\t{{ $ctrl.user.displayName }}\n\t\t</div>\n    </div>\n</nav>\n<ul class="tabs tabs-transparent teal darken-2">\n\t<li class="tab">\n\t\t<a ui-sref-active="active" ui-sref="home">Вопросы</a>\n\t</li>\n\t<li class="tab">\n\t\t<a ui-sref-active="active" ui-sref="ask">Спросить</a>\n\t</li>\n\t<li class="tab">\n\t\t<a ui-sref-active="active" ui-sref="queue">Очередь</a>\n\t</li>\n</ul>'},314:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(315),a=n(i),s=function t(e,n,i){"ngInject";var s=this;(0,a.default)(this,t),this.name="navbar",this.user=i.getUser(),i.onChangeAuth(function(t){s.user=t,e.$apply()})};s.$inject=["$scope","$firebaseArray","userService"],exports.default=s},316:function(t,exports,e){var n=e(317);"string"==typeof n&&(n=[[t.id,n,""]]);e(319)(n,{});n.locals&&(t.exports=n.locals)},317:function(t,exports,e){exports=t.exports=e(318)(),exports.push([t.id,"body{height:100%;font:62.5% Roboto,sans-serif}.navbar .tabs{width:auto}.navbar .chip{position:absolute;right:0;top:13px}",""])},320:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(299),a=n(i),s=e(301),u=n(s),r=e(309),o=n(r),l=e(321),c=n(l),d=e(326),f=n(d);window.firebase=u.default;var v=a.default.module("user",[o.default]).component("user",c.default).service("userService",f.default).name;exports.default=v},321:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(322),a=n(i),s=e(323),u=n(s);e(324);var r={restrict:"E",bindings:{},template:a.default,controller:u.default};exports.default=r},322:function(t,exports){t.exports="<div>\n  <h1>{{ $ctrl.name }}</h1>\n</div>\n"},323:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(315),a=n(i),s=function t(){(0,a.default)(this,t),this.name="user"};exports.default=s},324:function(t,exports,e){var n=e(325);"string"==typeof n&&(n=[[t.id,n,""]]);e(319)(n,{});n.locals&&(t.exports=n.locals)},325:function(t,exports,e){exports=t.exports=e(318)(),exports.push([t.id,".user{color:red}",""])},326:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(327),a=n(i);exports.default=["$firebaseAuth",function(t){"ngInject";var e=this,n=["7BQgSlXJ4HNVUmRAulgXjqJ4LuD2","8AMg7AGBmjWEZGNbsSLHdQilycI3","D7RFkKdcrFeyWpXmEm9ZXk5LWoG3"];this.authObj=t(u.default.auth()),this._callbacks=[],this.authObj.$onAuthStateChanged(function(t){console.log(t),t?e.user=t:e.user=null,e._callbacks.forEach(function(e){return e(t)})}),this.isAdmin=function(){return this.user&&n.includes(this.user.uid)},this.onChangeAuth=function(t){this._callbacks.push(t)},this.auth=function(){this.authObj.$signInWithRedirect("google").then(function(){}).catch(function(t){console.error("Authentication failed:",t)})},this.logOut=function(){this.authObj.$signOut()},this.getUser=function(){return this.user},this.getUserId=function(){var t=this;return new a.default(function(e,n){var i=t.authObj.$getAuth();return i?void e(i.uid):t.authObj.$signInAnonymously().then(function(t){return e(t.uid)},n)})}}];var s=e(301),u=n(s)},392:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(299),a=n(i),s=e(393),u=n(s),r=e(416),o=n(r),l=e(422),c=n(l),d=e(428),f=n(d),v=a.default.module("app.components",[u.default,o.default,c.default,f.default]).name;exports.default=v},393:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(299),a=n(i),s=e(309),u=n(s),r=e(394),o=n(r),l=a.default.module("home",[u.default]).config(["$stateProvider","$urlRouterProvider",function(t,e){"ngInject";e.otherwise("/"),t.state("home",{url:"/",component:"home"})}]).component("home",o.default).name;exports.default=l},394:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(395),a=n(i),s=e(396),u=n(s);e(414);var r={restrict:"E",bindings:{questions:"="},template:a.default,controller:u.default};exports.default=r},395:function(t,exports){t.exports='<div class="home">\n\n    <navbar active="\'home\'"></navbar>\n\n    <div>\n        <h4 class="center-align white-text">Список вопросов</h4>\n    </div>\n\n    <div class="row">\n\n        <div ng-repeat="question in $ctrl.questions | orderBy:\'-like\' | filter: $ctrl.blocked" class="col s12 m12 l12">\n          <div class="card blue-grey darken-1">\n            <div class="card-content white-text">\n              <span class="new badge" ng-class="{red: question.like < 0, blue: question.like >= 0}" data-badge-caption="rating">{{ question.like }}</span>\n              <span class="card-title">{{ question.first_name }}</span>\n              <span class="right">{{question.email}}</span>\n              <p class="flow-text">{{ question.question }}</p>\n            </div>\n            <div class="card-action">\n                <div ng-show="$ctrl.isAdmin()">\n                    <a ng-show="!question.approved" ng-click="$ctrl.approve(question)" class="green waves-effect waves-light btn">\n                        <i class="material-icons left">visibility</i>Аппрув\n                    </a>\n                    <a ng-click="$ctrl.delete(question)" class="red waves-effect waves-light btn">\n                        <i class="material-icons left">delete</i>Удалить\n                    </a>\n                </div>\n\n                <a ng-disabled="question.mine" ng-click="$ctrl.up(question)" class="waves-effect waves-light btn">\n                    <i class="material-icons left">thumb_up</i>Интересно\n                </a>\n                <a ng-click="$ctrl.down(question)" class="waves-effect waves-light btn">\n                    <i class="material-icons left">thumb_down</i>Не очень\n                </a>\n            </div>\n          </div>\n        </div>\n\n    </div>\n</div>'},396:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(397),a=n(i),s=e(403),u=n(s),r=e(327),o=n(r),l=e(315),c=n(l),d=e(410),f=n(d),v=e(301),h=n(v),p=void 0,b=function(){function t(e,n,i){"ngInject";var a=this;(0,c.default)(this,t);var s=h.default.database().ref();this.$questions=n(s.child("questions")),this.userService=i,p=i,o.default.all([i.getUserId(),this.$questions.$loaded()]).then(function(t){var n=(0,u.default)(t,2),i=n[0],s=n[1];a.questions=a._setMine(s,i),e.$apply()}),this.name="home"}return t.$inject=["$scope","$firebaseArray","userService"],(0,f.default)(t,[{key:"blocked",value:function(t){return p&&p.isAdmin()?!t.removed:!t.removed&&t.approved}},{key:"isAdmin",value:function(){return this.userService.isAdmin()}},{key:"up",value:function(t){this._process(t,{like:void 0!==t.like?t.like+1:1})}},{key:"down",value:function(t){this._process(t,{like:void 0!==t.like?t.like-1:0})}},{key:"delete",value:function(t){this._process(t,{removed:!0,inprogress:!1})}},{key:"approve",value:function(t){this._process(t,{approved:!0,inprogress:!1})}},{key:"_setMine",value:function(t,e){return t.map(function(t){return t.mine=t.uid===e,t})}},{key:"_process",value:function(t,e){(0,a.default)(t,e),this.$questions.$save(t)}}]),t}();exports.default=b},414:function(t,exports,e){var n=e(415);"string"==typeof n&&(n=[[t.id,n,""]]);e(319)(n,{});n.locals&&(t.exports=n.locals)},415:function(t,exports,e){exports=t.exports=e(318)(),exports.push([t.id,".home{min-height:100vh}.home .btn{margin:5px 0}",""])},416:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(299),a=n(i),s=e(309),u=n(s),r=e(417),o=n(r),l=a.default.module("about",[u.default]).config(["$stateProvider",function(t){"ngInject";t.state("about",{url:"/about",component:"about"})}]).component("about",o.default).name;exports.default=l},417:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(418),a=n(i),s=e(419),u=n(s);e(420);var r={restrict:"E",bindings:{},template:a.default,controller:u.default};exports.default=r},418:function(t,exports){t.exports="<navbar></navbar>\n<h1>{{ $ctrl.name }}</h1>\n<section>\n  About us.\n</section>\n"},419:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(315),a=n(i),s=function t(){(0,a.default)(this,t),this.name="about"};exports.default=s},420:function(t,exports,e){var n=e(421);"string"==typeof n&&(n=[[t.id,n,""]]);e(319)(n,{});n.locals&&(t.exports=n.locals)},421:function(t,exports,e){exports=t.exports=e(318)(),exports.push([t.id,".about{color:red}",""])},422:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(299),a=n(i),s=e(309),u=n(s),r=e(423),o=n(r),l=a.default.module("ask",[u.default]).component("ask",o.default).config(["$stateProvider","$urlRouterProvider",function(t,e){"ngInject";e.otherwise("/"),t.state("ask",{url:"/ask",component:"ask"})}]).name;exports.default=l},423:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(424),a=n(i),s=e(425),u=n(s);e(426);var r={restrict:"E",bindings:{qData:"=",user:"<",disabled:"<",invalid:"<"},template:a.default,controller:u.default};exports.default=r},424:function(t,exports){t.exports='<div class="ask">\n\t<navbar active="\'ask\'"></navbar>\n\n\t<div>\n\t\t<h4 class="center-align white-text">Задать вопрос</h4>\n\t</div>\n\n\t<div class="row">\n\t\t<h5 class="center red-text" ng-show="$ctrl.invalid">\n\t\t\tВы уже отправили свой вопрос!<br> Пожалуйста дождитесь его проверки!\n\t\t</h5>\n\t\t<form autocomplete="off" ng-submit="$ctrl.save()" class="col s12">\n\t\t\t<div class="row">\n\t\t\t\t<div class="input-field col s6">\n\t\t\t\t\t<input autocomplete="off" required maxlength="50" ng-disabled="$ctrl.disabled" id="first_name" ng-model="$ctrl.qData.first_name" type="text" class="white-text validate">\n\t\t\t\t\t<label for="first_name">Имя</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="input-field col s6">\n\t\t\t\t\t<input autocomplete="off" maxlength="150" ng-disabled="$ctrl.disabled" id="email" ng-model="$ctrl.qData.email" type="text" class="white-text validate">\n\t\t\t\t\t<label for="email">Электронная почта</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="row">\n\t\t\t\t<div class="input-field col s12">\n\t\t\t\t\t<textarea autocomplete="off" maxlength="950" ng-disabled="$ctrl.disabled" id="question" ng-model="$ctrl.qData.question" class="materialize-textarea white-text"></textarea>\n\t\t\t\t\t<label for="question">Ваш вопрос</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="row">\n\t\t\t\t<div class="input-field col s12">\n\t\t\t\t\t<button ng-disabled="$ctrl.disabled" class="btn waves-effect waves-light" type="submit" name="action">Отправить\n\t\t\t\t\t\t<i class="material-icons right">send</i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n'},425:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(327),a=n(i),s=e(315),u=n(s),r=e(410),o=n(r),l=e(301),c=n(l),d=function(){function t(e,n,i,a,s){"ngInject";var r=this;(0,u.default)(this,t),this.name="ask",this.userService=s,this.disabled=!1;var o=c.default.database().ref();this.ref=o,this.question=i(o.child("questions").push()),this.qData={},this.$firebaseObject=i,this.$firebaseArray=a,this.$scope=e,this.$state=n,s.onChangeAuth(function(t){t&&(r.user=t)})}return t.$inject=["$scope","$state","$firebaseObject","$firebaseArray","userService"],(0,o.default)(t,[{key:"save",value:function(){var t=this;this.disabled=!0,this.invalid=!1,this.userService.getUserId().then(function(e){return t._checkUid(e).catch(t._invalidUid.bind(t))}).then(this._saveToDb.bind(this),this._invalidUid.bind(this))}},{key:"_checkUid",value:function(t){var e=this;return new a.default(function(n,i){var a=e.$firebaseArray(e.ref.child("questions").orderByChild("uid").equalTo(t));a.$loaded(function(e){var a=e.find(function(t){return t.inprogress});a?i():n(t)},i)})}},{key:"_invalidUid",value:function(){this.disabled=!1,this.invalid=!0}},{key:"_saveToDb",value:function(t){var e=this;this.qData.uid=t,this.qData.inprogress=!0,this.question.$value=this.qData,this.question.$save().then(function(){e.qData={},e.$state.go("queue",{from_ask:!0}),e.disabled=!1})}}]),t}();exports.default=d},426:function(t,exports,e){var n=e(427);"string"==typeof n&&(n=[[t.id,n,""]]);e(319)(n,{});n.locals&&(t.exports=n.locals)},427:function(t,exports,e){exports=t.exports=e(318)(),exports.push([t.id,".ask{min-height:100vh}",""])},428:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(299),a=n(i),s=e(309),u=n(s),r=e(429),o=n(r),l=a.default.module("queue",[u.default]).component("queue",o.default).config(["$stateProvider","$urlRouterProvider",function(t,e){"ngInject";e.otherwise("/"),t.state("queue",{url:"/queue",params:{from_ask:!1},component:"queue"})}]).name;exports.default=l},429:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(430),a=n(i),s=e(431),u=n(s);e(432);var r={restrict:"E",bindings:{user:"<",questions:"<",$stateParams:"<"},template:a.default,controller:u.default};exports.default=r},430:function(t,exports){t.exports='<div class="queue">\n\n\t<navbar active="\'queue\'"></navbar>\n\n\n\t<div class="center-align">\n\t\t<h4 ng-show="$ctrl.user" class="white-text">Привет! <span>{{ $ctrl.user.displayName || \'Аноним\' }}!</span></h4>\n\n\t\t<h5 ng-show="$ctrl.$stateParams.from_ask" class="white-text">Спасибо за вопрос! Вы увидите его <a ui-sref="home">в списке</a> сразу же после проверки модератором! <br>А пока что можете проголосовать за другие вопросы!</h5>\n\n\t\t<h1 class="white-text">Вопросов в очереди: {{ $ctrl.getLength() }}</h1>\n\n\t\t<a ui-sref="home" class="waves-effect waves-light btn">\n\t\t\t<i class="material-icons left">toc</i>К списку\n\t\t</a>\n\n\t\t<a ng-click="$ctrl.auth()" ng-show="!$ctrl.user || $ctrl.user.isAnonymous" class="waves-effect waves-light btn">\n\t\t\t<i class="material-icons left">lock_open</i>Войти с помощью Google\n\t\t</a>\n\n\t\t<a ng-click="$ctrl.logout()" ng-show="$ctrl.user && !$ctrl.user.isAnonymous" class="waves-effect waves-light btn">\n\t\t\t<i class="material-icons left">lock_close</i>Выйти\n\t\t</a>\n\t</div>\n</div>'},431:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(315),a=n(i),s=e(410),u=n(s),r=e(301),o=n(r);window.firebase=o.default;var l=function(){function t(e,n,i,s,u){"ngInject";var r=this;(0,a.default)(this,t);var l=o.default.database().ref();this.name="queue",this.userService=u,this.$stateParams=i,this.$questions=s(l.child("questions")),this.$questions.$loaded().then(function(t){r.questions=t}),this.user=u.getUser(),u.onChangeAuth(function(t){r.user=t,e.$apply()})}return t.$inject=["$scope","$state","$stateParams","$firebaseArray","userService"],(0,u.default)(t,[{key:"getLength",value:function(){return this.questions&&this.questions.filter(function(t){return t.approved&&!t.removed}).length}},{key:"auth",value:function(){this.userService.auth()}},{key:"logout",value:function(){this.userService.logOut()}}]),t}();exports.default=l},432:function(t,exports,e){var n=e(433);"string"==typeof n&&(n=[[t.id,n,""]]);e(319)(n,{});n.locals&&(t.exports=n.locals)},433:function(t,exports,e){exports=t.exports=e(318)(),exports.push([t.id,".queue{min-height:100vh}",""])},434:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var i=e(435),a=n(i);e(436);var s={template:a.default,restrict:"E"};exports.default=s},435:function(t,exports){t.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\n<div class="app">\n  <div ui-view></div>\n</div>\n'},436:function(t,exports,e){var n=e(437);"string"==typeof n&&(n=[[t.id,n,""]]);e(319)(n,{});n.locals&&(t.exports=n.locals)},437:function(t,exports,e){exports=t.exports=e(318)(),exports.push([t.id,"body{font:62.5% Roboto,sans-serif}.app,body{height:100%}.app{background-color:#37474f}",""])}});
//# sourceMappingURL=app.bundle.js.map