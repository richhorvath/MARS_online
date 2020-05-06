import React, { useState, useEffect } from "react";
import ButtonAppBar from "./components/ButtonAppBar.js";
import Instructions from "./components/Instructions.js";
import InstructionTable from "./components/InstructionTable.js";
import RegisterTable from "./components/RegisterTable.js";
import handleOperations from "../utils/handleOperations.js";
import MemoryTable from "./components/MemoryTable.js";
import impregisters from "../utils/registers.js";
import isaMap from "../utils/instructionSetTable.js";
import dec2bin6 from "../utils/dec2Bin6.js";

import "./styles.css";

export default function App() {
  const [instructions, setInstructions] = useState("");
  const [instList, setInstList] = useState([]);
  const [currentInst, setCurrentInst] = useState(0);
  const [registers, setRegisters] = useState(impregisters);
  const initMem = () => {
    let mem = [];
    for (let i = 0; i < 256; i++) {
      mem.push(0);
    }
    return mem;
  };
  const [memory, setMemory] = useState(initMem());

  // updates the highlighted intruction in the instruction table
  useEffect(() => {
    //TODO: handle instruction edge cases 0 < and current > instList
    if (document.getElementById("inst" + currentInst))
      document.getElementById("inst" + currentInst).style.backgroundColor =
        "yellow";
  }, [currentInst]);

  /**
   * click handler for build button, sets the current instruction to 0,
   * splits the input by newline escape and creates an array of instructions,
   * looping through the array to build and initialize an instruction array of instrustion objects
   */
  const onBuild = () => {
    setCurrentInst(0);
    let instr = instructions;
    let arr = instr.split("\n");
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      let tempInst = arr[i].split(" ");
      temp.push({
        id: i,
        memory: i,
        binInst: dec2bin6(isaMap[tempInst[0]]),
        source: arr[i],
      });
    }
    setInstList(temp);
  };

  /**
   * Execute onClick handlers. gets the instruction element by ID and highlights it passes the first
   * instruction to handle operations
   */
  const onExecute = () => {
    //display instructions in stepper
    document.getElementById("inst" + currentInst).style.backgroundColor =
      "yellow";
    handleOperations(
      instList[0].source,
      registers,
      setRegisters,
      memory,
      setMemory
    );
  };

  /**
   * calls next set of operations, changes the highlight for the current operation back
   * increments current instruction
   */
  const onNext = () => {
    //execute current instructions
    document.getElementById("inst" + currentInst).style.backgroundColor =
      "white";
    handleOperations(
      instList[currentInst + 1].source,
      registers,
      setRegisters,
      memory,
      setMemory
    );
    setCurrentInst(currentInst + 1);
  };

  /**
   * performs the opposite of onNext
   */
  const onBack = () => {
    document.getElementById("inst" + currentInst).style.backgroundColor =
      "white";

    handleOperations(
      instList[currentInst - 1].source,
      registers,
      setRegisters,
      memory,
      setMemory
    );
    setCurrentInst(currentInst - 1);
  };

  /**
   * resets all state variables and highlights
   */
  const onRestart = () => {
    document.getElementById("inst" + currentInst).style.backgroundColor =
      "white";
    setCurrentInst(0);
    for (let reg in registers) {
      registers[reg].value = 0;
    }

    setRegisters({ ...registers });
    setMemory(initMem());
    setInstList([]);
    onBuild();
  };

  /**
   * returns all application components passing in state variables and functions as
   * props to components
   */
  return (
    <div className="main-container">
      <ButtonAppBar
        onBuild={onBuild}
        onExecute={onExecute}
        onNext={onNext}
        onBack={onBack}
        onRestart={onRestart}
      />

      <div className="row">
        <Instructions
          instructions={instructions}
          setInstructions={setInstructions}
        />
        <InstructionTable instList={instList} currentInst={currentInst} />
      </div>
      <div className="row">
        <RegisterTable registers={registers} />
        <MemoryTable memoryArr={memory} setMemory={setMemory} />
      </div>
    </div>
  );
}
