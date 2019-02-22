import { render } from 'enzyme';
import Hello from '../src/components/Hello';

test('render component Hello', () => {
  const wrapper = render(<Hello />);
  expect(wrapper.text()).toContain('Hello World');
});
