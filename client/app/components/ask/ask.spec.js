import AskModule from './ask'
import AskController from './ask.controller';
import AskComponent from './ask.component';
import AskTemplate from './ask.html';

describe('Ask', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AskModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AskController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AskTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AskComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AskTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AskController);
      });
  });
});
