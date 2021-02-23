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
    })

    test('Payment Mode of Credit_Approval Selection working fine', async() => {

        //Selet the Second Radio button.
        const radio = wrapper.findAll('input[type="radio"]').at(1);

        //Click the Button.
        await radio.trigger('click');

        //Find the "warning alert" in the wrapper
        const messageDiv = wrapper.findAll('.alert-warning').at(0)

        //Expect that warning div is visible
        expect(wrapper.find('.alert-warning').isVisible()).toBe(true)
    })
})