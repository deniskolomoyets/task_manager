import React from "react";
import styles from "./index.module.scss";

interface InputePlusProps {
  onAdd: (title: string) => void;
}
export const InputPlus: React.FC<InputePlusProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = React.useState("");

  const addTask = React.useCallback(() => {
    onAdd(inputValue);
    setInputValue("");
  }, [inputValue, onAdd]); //usecallback is used so that a new function is not created during re-rendering

  return (
    <div className={styles.inputPlus}>
      <input
        type="text"
        className={styles.inputPlusValue}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
        placeholder="Type"
      />
      <button
        onClick={addTask}
        aria-label="Add"
        className={styles.inputPlusButton}
      />
    </div>
  );
};
