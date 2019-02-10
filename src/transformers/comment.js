export default () => ({
  delimiter: {
    start: /{{\!/,
    end: /}}/,
  },
  transform: () =>
    () => '', 
})