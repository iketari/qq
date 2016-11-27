webpackJsonp([0],{0:function(t,exports,e){e(1),t.exports=e(298)},298:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var a=e(299),i=n(a),s=e(301),u=n(s),o=e(307),l=n(o),r=e(309),c=n(r),d=e(310),f=n(d),v=e(339),h=n(v),p=e(364),b=n(p);e(368);var m={apiKey:"AIzaSyBS3NgOJoNZ9NhYrq4WG7xLZM4RyeKn66w",authDomain:"qinq-9d53f.firebaseapp.com",databaseURL:"https://qinq-9d53f.firebaseio.com",storageBucket:"qinq-9d53f.appspot.com",messagingSenderId:"475423633554"};u.default.initializeApp(m),i.default.module("app",[c.default,l.default,f.default,h.default]).config(["$locationProvider",function(t){"ngInject";t.html5Mode(!0).hashPrefix("!")}]).component("app",b.default)},310:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(299),i=n(a),s=e(311),u=n(s),o=i.default.module("app.common",[u.default]).name;exports.default=o},311:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(299),i=n(a),s=e(309),u=n(s),o=e(312),l=n(o),r=i.default.module("navbar",[u.default]).component("navbar",l.default).name;exports.default=r},312:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(313),i=n(a),s=e(314),u=n(s);e(335);var o={restrict:"E",bindings:{active:"<",user:"<"},template:i.default,controller:u.default};exports.default=o},313:function(t,exports){t.exports='<nav class="navbar">\n\t<div class="nav-wrapper teal darken-1">\n\t  <a href="#" class="brand-logo left">Questions in Queue</a>\n\n\t<div ng-show="$ctrl.user" class="chip">\n\t\t<img src="{{ $ctrl.user.photoURL }}" alt="Contact Person">\n\t\t{{ $ctrl.user.displayName }}\n\t</div>\n\n\t</div>\n</nav>\n<ul class="tabs tabs-transparent teal darken-2">\n\t<li class="tab">\n\t\t<a ng-class="{active: $ctrl.active === \'home\'}" ui-sref="home">Вопросы</a>\n\t</li>\n\t<li class="tab">\n\t\t<a ng-class="{active: $ctrl.active === \'ask\'}" ui-sref="ask">Спросить</a>\n\t</li>\n\t<li class="tab">\n\t\t<a ng-class="{active: $ctrl.active === \'queue\'}" ui-sref="queue">Очередь</a>\n\t</li>\n</ul>'},314:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(315),i=n(a),s=e(316),u=n(s),o=function(){function t(e,n,a){"ngInject";var s=this;(0,i.default)(this,t),this.name="navbar",this.authObj=a(firebase.auth()),this.authObj.$onAuthStateChanged(function(t){console.log(t),t?s.user=t:s.user=null})}return t.$inject=["$scope","$firebaseArray","$firebaseAuth"],(0,u.default)(t,[{key:"auth",value:function(){this.authObj.$signInWithRedirect("google").then(function(){}).catch(function(t){console.error("Authentication failed:",t)})}}]),t}();exports.default=o},335:function(t,exports,e){var n=e(336);"string"==typeof n&&(n=[[t.id,n,""]]);e(338)(n,{});n.locals&&(t.exports=n.locals)},336:function(t,exports,e){exports=t.exports=e(337)(),exports.push([t.id,"body{height:100%;font:62.5% Roboto,sans-serif}.navbar .tabs{width:auto}.navbar .chip{position:absolute;right:0;top:13px}",""])},339:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(299),i=n(a),s=e(340),u=n(s),o=e(346),l=n(o),r=e(352),c=n(r),d=e(358),f=n(d),v=i.default.module("app.components",[u.default,l.default,c.default,f.default]).name;exports.default=v},340:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(299),i=n(a),s=e(309),u=n(s),o=e(341),l=n(o),r=i.default.module("home",[u.default]).config(["$stateProvider","$urlRouterProvider",function(t,e){"ngInject";e.otherwise("/"),t.state("home",{url:"/",component:"home"})}]).component("home",l.default).name;exports.default=r},341:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(342),i=n(a),s=e(343),u=n(s);e(344);var o={restrict:"E",bindings:{questions:"="},template:i.default,controller:u.default};exports.default=o},342:function(t,exports){t.exports='<div class="home">\n\n    <navbar active="\'home\'"></navbar>\n\n    <div>\n        <h4 class="center-align white-text">Список вопросов</h4>\n    </div>\n\n    <div class="row">\n\n        <div ng-repeat="question in $ctrl.questions | orderBy:\'-like\'" class="col s12 m6 l4">\n          <div class="card blue-grey darken-1">\n            <div class="card-content white-text">\n              <span class="new badge" ng-class="{red: question.like < 0, blue: question.like >= 0}" data-badge-caption="rating">{{ question.like }}</span>\n              <span class="card-title">{{ question.first_name + \' \' + question.last_name }}</span>\n              <p class="flow-text">{{ question.question }}</p>\n            </div>\n            <div class="card-action">\n                <a ng-click="$ctrl.up(question)" class="waves-effect waves-light btn">\n                    <i class="material-icons left">thumb_up</i>Интересно\n                </a>\n                <a ng-click="$ctrl.down(question)" class="waves-effect waves-light btn">\n                    <i class="material-icons left">thumb_down</i>Не очень\n                </a>\n            </div>\n          </div>\n        </div>\n\n    </div>\n</div>'},343:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(315),i=n(a),s=e(316),u=n(s),o=e(301),l=n(o),r=function(){function t(e,n){"ngInject";var a=this;(0,i.default)(this,t);var s=l.default.database().ref();this.$questions=n(s.child("questions")),this.$questions.$loaded().then(function(t){a.questions=t}),this.name="home"}return t.$inject=["$scope","$firebaseArray"],(0,u.default)(t,[{key:"up",value:function(t){t.like=void 0!==t.like?t.like+1:1,this.$questions.$save(t)}},{key:"down",value:function(t){t.like=void 0!==t.like?t.like-1:0,this.$questions.$save(t)}}]),t}();exports.default=r},344:function(t,exports,e){var n=e(345);"string"==typeof n&&(n=[[t.id,n,""]]);e(338)(n,{});n.locals&&(t.exports=n.locals)},345:function(t,exports,e){exports=t.exports=e(337)(),exports.push([t.id,".home{min-height:100vh}",""])},346:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(299),i=n(a),s=e(309),u=n(s),o=e(347),l=n(o),r=i.default.module("about",[u.default]).config(["$stateProvider",function(t){"ngInject";t.state("about",{url:"/about",component:"about"})}]).component("about",l.default).name;exports.default=r},347:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(348),i=n(a),s=e(349),u=n(s);e(350);var o={restrict:"E",bindings:{},template:i.default,controller:u.default};exports.default=o},348:function(t,exports){t.exports="<navbar></navbar>\n<h1>{{ $ctrl.name }}</h1>\n<section>\n  About us.\n</section>\n"},349:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(315),i=n(a),s=function t(){(0,i.default)(this,t),this.name="about"};exports.default=s},350:function(t,exports,e){var n=e(351);"string"==typeof n&&(n=[[t.id,n,""]]);e(338)(n,{});n.locals&&(t.exports=n.locals)},351:function(t,exports,e){exports=t.exports=e(337)(),exports.push([t.id,".about{color:red}",""])},352:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(299),i=n(a),s=e(309),u=n(s),o=e(353),l=n(o),r=i.default.module("ask",[u.default]).component("ask",l.default).config(["$stateProvider","$urlRouterProvider",function(t,e){"ngInject";e.otherwise("/"),t.state("ask",{url:"/ask",component:"ask"})}]).name;exports.default=r},353:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(354),i=n(a),s=e(355),u=n(s);e(356);var o={restrict:"E",bindings:{qData:"="},template:i.default,controller:u.default};exports.default=o},354:function(t,exports){t.exports='<div class="ask">\n\t<navbar active="\'ask\'"></navbar>\n\n\t<div>\n\t\t<h4 class="center-align white-text">Задать вопрос</h4>\n\t</div>\n\n\t<div class="row">\n\t\t<form autocomplete="off" ng-submit="$ctrl.save()" class="col s12">\n\t\t\t<div class="row">\n\t\t\t\t<div class="input-field col s6">\n\t\t\t\t\t<input id="first_name" ng-model="$ctrl.qData.first_name" type="text" class="white-text validate">\n\t\t\t\t\t<label for="first_name">Имя</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="input-field col s6">\n\t\t\t\t\t<input id="last_name" ng-model="$ctrl.qData.last_name" type="text" class="white-text validate">\n\t\t\t\t\t<label for="last_name">Фамилия</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="row">\n\t\t\t\t<div class="input-field col s12">\n\t\t\t\t\t<textarea id="question" ng-model="$ctrl.qData.question" class="materialize-textarea white-text"></textarea>\n\t\t\t\t\t<label for="question">Ваш вопрос</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="row">\n\t\t\t\t<div class="input-field col s12">\n\t\t\t\t\t<button class="btn waves-effect waves-light" type="submit" name="action">Отправить\n\t\t\t\t\t\t<i class="material-icons right">send</i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n'},355:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(315),i=n(a),s=e(316),u=n(s),o=e(301),l=n(o),r=function(){function t(e,n){"ngInject";(0,i.default)(this,t);var a=l.default.database().ref();this.question=n(a.child("questions").push()),this.name="ask",this.qData={}}return t.$inject=["$scope","$firebaseObject"],(0,u.default)(t,[{key:"save",value:function(){var t=this;this.question.$value=this.qData,this.question.$save().then(function(){t.qData={}})}}]),t}();exports.default=r},356:function(t,exports,e){var n=e(357);"string"==typeof n&&(n=[[t.id,n,""]]);e(338)(n,{});n.locals&&(t.exports=n.locals)},357:function(t,exports,e){exports=t.exports=e(337)(),exports.push([t.id,".ask{min-height:100vh}",""])},358:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(299),i=n(a),s=e(309),u=n(s),o=e(359),l=n(o),r=i.default.module("queue",[u.default]).component("queue",l.default).config(["$stateProvider","$urlRouterProvider",function(t,e){"ngInject";e.otherwise("/"),t.state("queue",{url:"/queue",component:"queue"})}]).name;exports.default=r},359:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(360),i=n(a),s=e(361),u=n(s);e(362);var o={restrict:"E",bindings:{user:"<"},template:i.default,controller:u.default};exports.default=o},360:function(t,exports){t.exports='<div class="queue">\n\n\t<navbar active="\'queue\'"></navbar>\n\n\n\t<div class="center-align">\n\t\t<h4 class="white-text"><span ng-show="$ctrl.user" >{{ $ctrl.user.displayName }}, </span>перед тобой</h4>\n\n\t\t<h1 class="white-text">42 вопроса</h1>\n\n\t\t<a ui-sref="home" class="waves-effect waves-light btn">\n\t\t\t<i class="material-icons left">toc</i>К списку\n\t\t</a>\n\n\t\t<a ng-click="$ctrl.auth()" ng-show="!$ctrl.user" class="waves-effect waves-light btn">\n\t\t\t<i class="material-icons left">lock_open</i>Войти с помощью Google\n\t\t</a>\n\n\t\t<a ng-click="$ctrl.logout()" ng-show="$ctrl.user" class="waves-effect waves-light btn">\n\t\t\t<i class="material-icons left">lock_close</i>Выйти\n\t\t</a>\n\t</div>\n</div>'},361:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(315),i=n(a),s=e(316),u=n(s),o=e(301),l=n(o);window.firebase=l.default;var r=function(){function t(e,n,a){"ngInject";var s=this;(0,i.default)(this,t),this.name="queue",this.authObj=a(l.default.auth()),this.authObj.$onAuthStateChanged(function(t){console.log(t),t?s.user=t:s.user=null})}return t.$inject=["$scope","$firebaseArray","$firebaseAuth"],(0,u.default)(t,[{key:"auth",value:function(){this.authObj.$signInWithRedirect("google").then(function(){}).catch(function(t){console.error("Authentication failed:",t)})}},{key:"logout",value:function(){this.authObj.$signOut()}}]),t}();exports.default=r},362:function(t,exports,e){var n=e(363);"string"==typeof n&&(n=[[t.id,n,""]]);e(338)(n,{});n.locals&&(t.exports=n.locals)},363:function(t,exports,e){exports=t.exports=e(337)(),exports.push([t.id,".queue{min-height:100vh}",""])},364:function(t,exports,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(365),i=n(a);e(366);var s={template:i.default,restrict:"E"};exports.default=s},365:function(t,exports){t.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\n<div class="app">\n  <div ui-view></div>\n</div>\n'},366:function(t,exports,e){var n=e(367);"string"==typeof n&&(n=[[t.id,n,""]]);e(338)(n,{});n.locals&&(t.exports=n.locals)},367:function(t,exports,e){exports=t.exports=e(337)(),exports.push([t.id,"body{font:62.5% Roboto,sans-serif}.app,body{height:100%}.app{background-color:#37474f}",""])}});
//# sourceMappingURL=app.bundle.js.map