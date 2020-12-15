import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('render del componente', () => {
    expect(footer.length).toEqual(1);
  });

  test('render del título', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
