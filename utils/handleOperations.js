const ISA = require("./ISA.js");
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
      console.log("Operation Array", opArray);
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
  }
}
