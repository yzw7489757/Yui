const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/packages/input'


Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('input', () => {
  it('input存在', () => {
    expect(Input).to.exist;
  })

  describe('props', () => {
    let Constructor = Vue.extend(Input);
    let vm
    beforeEach(function () {

    })
    afterEach(function () {
      vm.$destroy();
    })

    it('拿到value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).to.equal('1234')
    })
    it('input disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.equal(true)
    })

    it('input readOnly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.readOnly).to.equal(true)
    })

    it('input error', () => {
      vm = new Constructor({
        propsData: {
          error: '报错',
          inputColor: true
        }
      }).$mount()
      const useSvg = vm.$el.querySelector('use');
      expect(useSvg.getAttribute('xlink:href')).to.equal('#i-error')
      const inputElement = vm.$el.querySelector('.error_message');
      expect(inputElement.innerText).to.equal('报错')
      const inputBorder = vm.$el.querySelector('.error_input');
      expect(inputBorder.getAttribute('class')).to.equal('error_input')
    })

    it('input info', () => {
      vm = new Constructor({
        propsData: {
          info: '通过',
          inputColor: true
        }
      }).$mount()
      const useSvg = vm.$el.querySelector('use');
      expect(useSvg.getAttribute('xlink:href')).to.equal('#i-info')
      const inputElement = vm.$el.querySelector('.info_message');
      expect(inputElement.innerText).to.equal('通过')
      const inputBorder = vm.$el.querySelector('.info_input');
      expect(inputBorder.getAttribute('class')).to.equal('info_input')
    })

    it('input title', () => {
      vm = new Constructor({
        propsData: {
          title: '提示',
          inputColor: true
        }
      }).$mount()
      const useSvg = vm.$el.querySelector('use');
      expect(useSvg.getAttribute('xlink:href')).to.equal('#i-tips')
      const inputElement = vm.$el.querySelector('.title_message');
      expect(inputElement.innerText).to.equal('提示')
      const inputBorder = vm.$el.querySelector('.title_input');
      expect(inputBorder.getAttribute('class')).to.equal('title_input')
    })
  })

  describe('event', () => { //describe和it都属于mocha。 而expect断言语句属于chai
    const Constructor = Vue.extend(Input);
    let vm
    let callback
    beforeEach(function () {
      vm = new Constructor({}).$mount();
      callback = sinon.fake();
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'focus', 'input', 'blur', 'click']
      .forEach((eventName) => {
        vm = new Constructor({}).$mount()
          const callback = sinon.fake();
          vm.$on(eventName, callback)
          //触发input的change 事件
          let event = new Event(eventName);
          Object.defineProperty(
            event, 'target', {
              value: {value: 'hi'}, enumerable: true
            }
          )
        let inputElement = vm.$el.querySelector('input');
        
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith('hi'); //对回调函数返回的参数做校验
      });
    })
    
    afterEach(function () {
      vm.$destroy();
    })

    // it('change', () => {
    //   vm.$on('change', callback); //绑定
    //   let event = new Event('change'); //手动触发事件
    //   let inputElement = vm.$el.querySelector('input');
    //   Object.defineProperty(event, 'target', {
    //     value: {
    //       value: 'hi'
    //     },
    //     enumerable: true
    //   })
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event)
    // })
    // it('focus', () => {
    //   vm.$on('focus', callback);
    //   let event = new Event('focus');
    //   let inputElement = vm.$el.querySelector('input');
    //   Object.defineProperty(event, 'target', {
    //     value: {
    //       value: 'hi'
    //     },
    //     enumerable: true
    //   })
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event)
    // })

    // it('change', () => {
    //   vm.$on('change', callback);

    //   let event = new Event('change');
    //   let inputElement = vm.$el.querySelector('input');
    //   Object.defineProperty(event, 'target', {
    //     value: {
    //       value: 'hi'
    //     },
    //     enumerable: true
    //   })
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event)
    // })
    // it('input', () => {
    //   vm.$on('input', callback);

    //   let event = new Event('input');
    //   let inputElement = vm.$el.querySelector('input');
    //   Object.defineProperty(event, 'target', {
    //     value: {
    //       value: 'hi'
    //     },
    //     enumerable: true
    //   })
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event)
    // })
    // it('blur', () => {
    //   vm.$on('blur', callback);

    //   let event = new Event('blur');
    //   let inputElement = vm.$el.querySelector('input');
    //   Object.defineProperty(event, 'target', {
    //     value: {
    //       value: 'hi'
    //     },
    //     enumerable: true
    //   })
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event)
    // })

    // it('click', () => {
    //   vm.$on('click', callback);

    //   let event = new Event('click');
    //   let inputElement = vm.$el.querySelector('input');
    //   Object.defineProperty(event, 'target', {
    //     value: {
    //       value: 'hi'
    //     },
    //     enumerable: true
    //   })
    //   inputElement.dispatchEvent(event);
    //   expect(callback).to.have.been.calledWith(event)
    // })
  })
})
