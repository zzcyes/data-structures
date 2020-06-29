export const log = (exampleName: string, example_xxx: string): void => {
  console.log(
    `------------------------------------${exampleName} start------------------------------------`
  );
  console.log(example_xxx);
  console.log(
    `-------------------------------------${exampleName} end ------------------------------------`
  );
};

export const createPreEl = (root: Object) => {
  const el = document.createElement('pre');
  el.textContent = JSON.stringify(root, null, 4);
  document.querySelector('#app').appendChild(el);
};
