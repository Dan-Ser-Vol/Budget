import React from 'react';

import Counter from './Counter';


export default {
    title: 'Counter',
    component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Income = Template.bind({});
Income.args = {};

