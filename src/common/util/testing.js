/** Call onClick prop on the wrapper's "name" child */
export const click = (wrapper, name) =>
  wrapper
    .find(`[name='${name}']`)
    .props()
    .onClick();
