const ISA = require("./ISA.js");
/**
 *
 * @param {*} operation
 * @param {*} registers
 * @param {*} setRegisters
 * @param {*} memory
 * @param {*} setMemory
 * Splits the input line by an empty array and uses switch statement to
 * call the correct opcode
 */
export default function handleOperations(
  operation,
  registers,
  setRegisters,
  memory,
  setMemory
) {
  let opArray = operation.split(" ");
  switch (opArray[0]) {
    case "add":
      ISA.add(
        registers[opArray[1]],
        registers[opArray[2]],
        registers[opArray[3]]
      );
      setRegisters({
        ...registers,
      });
      break;
    case "load_now":
      ISA.load_now(registers[opArray[1]], opArray[2]);
      setRegisters({
        ...registers,
      });
      break;
    case "store":
      ISA.store(registers[opArray[1]], opArray[2], memory);
      setMemory([...memory]);
      break;
    case "add_now":
      ISA.add_now(registers[opArray[1]], registers[opArray[2]], opArray[3]);
      break;
  }
}
