const expect = chai.expect;
import Vue from 'vue';
import Col from '../src/col';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

  it('存在.', () => {
    expect(Col).to.exist
  })
  it('span', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('offset', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 1
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('offset-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('xl', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        xl: {span: 1, offset: 2}
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-xl-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-xl-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('lg', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        lg: {span: 1, offset: 2}
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-lg-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-lg-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('md', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        md: {span: 1, offset: 2}
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-md-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-md-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('xm', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        xm: {span: 1, offset: 2}
      }
    }).$mount(div)
    const element = vm.$el
    expect(vm.$el.classList.contains('col-xm-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-xm-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

})