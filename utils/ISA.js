module.exports = {
  add: (r1, r2, r3) => {
    r1.value = parseInt(r2.value) + parseInt(r3.value);
  },
  add_now: (r1, r2, constant) => {
    r1.value = parseInt(r2.value) + parseInt(constant);
  },
  load_now: (register, int) => {
    register.value = parseInt(int);
  },
  store: (register, index, memory) => {
    memory[index] = register.value;
  },
};
