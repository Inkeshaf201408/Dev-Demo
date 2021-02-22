// import { mount } from '@vue/test-utils'
// import FormRegistration from './form-registration.vue';

// describe('Form Registration', () => {
//     test('is a Vue instance', () => {
//         const wrapper = mount(FormRegistration)
//         expect(wrapper.vm).toBeTruthy()
//         console.log('TEST: Success')
//     })  
// })

import { mount } from '@vue/test-utils'
import FormRegistration from './form-registration.vue';

describe('Form Registration', () => {
    const wrapper = mount(FormRegistration)

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
        console.log('TEST: Success')
    })

    // test('Payment Mode of Credit_Approval Selection working fine', () => {

    //     //Selet the Radio button.
    //     const radio = wrapper.findAll('input');
    //     console.log(radio, radio.length)
    //     // await radio.trigger('click');

    //     // const messageDiv = wrapper.find('.alert-warning');
        
    //     // console.log(messageDiv, messageDiv.length);
    //     // expect(wrapper.find('.alert-warning').isVisible()).toBe(true)
    //     // Assertions
    //     expect(true).toBe(true)
    // })
})