import React from "react";
import styles from "./index.module.scss";

interface InputeTaskProps {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}
export const InputTask: React.FC<InputeTaskProps> = ({
  id,
  title,
  onDone,
  onEdited,
  onRemoved,
}) => {
  return <div className={styles.inputTask}></div>;
};
