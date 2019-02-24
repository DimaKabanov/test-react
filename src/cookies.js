import cookies from 'js-cookie';

export default {
  set: (name, value) => cookies.set(name, value),
  get: name => cookies.get(name),
};
