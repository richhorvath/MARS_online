import React, { useState, useEffect } from "react";
import ButtonAppBar from "./components/ButtonAppBar.js";
import Instructions from "./components/Instructions.js";
import InstructionTable from "./components/InstructionTable.js";
import RegisterTable from "./components/RegisterTable.js";
import handleOperations from "../utils/handleOperations.js";
import MemoryTable from "./components/MemoryTable.js";
import impregisters from "../utils/registers.js";
import "./styles.css";
export default function App() {
  const [instructions, setInstructions] = useState("");
  const [instList, setInstList] = useState([]);
  const [currentInst, setCurrentInst] = useState(0);
  const [registers, setRegisters] = useState(impregisters);
  let initMem = [];
  for (let i = 0; i < 256; i++) {
    initMem.push(0);
  }
  const [memory, setMemory] = useState(initMem);

  useEffect(() => {
    //TODO: handle instruction edge cases 0 < and current > instList
    if (document.getElementById("inst" + currentInst))
      document.getElementById("inst" + currentInst).style.backgroundColor =
        "yellow";
  }, [currentInst]);

  const onBuild = () => {
    let instr = instructions;
    let arr = instr.split("\n");
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      temp.push({
        id: i,
        memory: i,
        binInst: "to be done",
        source: arr[i],
      });
    }
    setInstList(temp);
  };

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

  const onBack = () => {
    document.getElementById("inst" + currentInst).style.backgroundColor =
      "white";
    handleOperations(
      instList[currentInst + 1].source,
      registers,
      setRegisters,
      memory,
      setMemory
    );
    setCurrentInst(currentInst - 1);
  };

  const onRestart = () => {
    document.getElementById("inst" + currentInst).style.backgroundColor =
      "white";
    setCurrentInst(0);
  };

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
