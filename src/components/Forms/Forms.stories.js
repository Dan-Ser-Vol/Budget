import React from 'react';

import Forms from './Forms';


export default {
    title: 'Forms',
    component: Forms,
};

const Template = (args) => <Forms {...args} />;

export const Form = Template.bind({});
Form.args = {
    onChange: ()=>{}
};

