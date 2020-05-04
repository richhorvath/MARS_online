module.exports = {
  add: (r1, r2, r3) => {
    console.log("REGISTER 1 ", r1);
    console.log("REGISTER 2 ", r2);
    console.log("REGISTER 3 ", r3);
    r1.value = parseInt(r2.value) + parseInt(r3.value);
  },
  load_now: (register, int) => {
    register.value = parseInt(int);
  },
  store: (register, index, memory) => {
    memory[index] = register.value;
  },
};
