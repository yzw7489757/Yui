import Vue from 'vue'
import Button from './packages/button'
import Input from './packages/input'
import Icon from './packages/icon'
import ButtonGroup from './packages/button-group'
import Row from './packages/row'
import Col from './packages/col'
import '../index.css'
import VForm from './packages/form'
import FormItem from './packages/formItem'
import Message from './packages/message'

Vue.use(Message)

Vue.config.productionTip = false
Vue.component('y-button', Button)
Vue.component('y-icon', Icon)
Vue.component('y-button-group', ButtonGroup)
Vue.component('y-input', Input)
Vue.component('y-row',Row)
Vue.component('y-col',Col)
Vue.component('y-form', VForm)
Vue.component('y-form-item', FormItem)

new Vue({
  el: '#app',
  data(){
    return{
      valuea:'hi'
    }
  },
  created(){
  },
  methods:{
    inputChange(e){
      console.log(this.valuea)
    }
  }
})



// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect;
// //单元测试 

// try {
//   //button断言
//   {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting'
//       }
//     })
//     vm.$mount();
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-setting');
//     vm.$el.remove();
//     vm.$destroy();
//   }

//   //loading断言
//   {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//         loading: true
//       }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use');
//     let href = useElement.getAttribute('xlink:href');
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove();
//     vm.$destroy();
//   }

//   //svg断言
//   {
//     const div = document.createElement('div');
//     document.body.appendChild(div)

//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting'
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg');
//     let { order } = window.getComputedStyle(svg);
//     expect(order).to.eq('1')
//     vm.$el.remove();
//     vm.$destroy();
//   }

//   //svg 断言2
//   {
//     const div = document.createElement('div');
//     document.body.appendChild(div);

//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting',
//         iconPosition: 'right'
//       }
//     })

//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg');
//     let { order } = window.getComputedStyle(svg)
//     expect(order).to.eq('2')

//     vm.$el.remove();
//     vm.$destroy();
//   }

//   //click断言
//   {
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//       propsData: {
//         icon: 'setting'
//       }
//     })
//     vm.$mount()
//     let spy = chai.spy(function () { });

//     vm.$on('click', spy)
//     let button = vm.$el;
//     button.click();
//     expect(spy).to.have.been.called()

//     vm.$el.remove();
//     vm.$destroy();
//   }
// } catch (error) {
//   console.log(error)
// } finally{

// }
