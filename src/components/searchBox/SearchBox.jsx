import React from "react";
import styles from "./SearchBox.module.css";

export const SearchBox = ({ placeholder, changeHandler }) => {
  return (
    <input
      className={styles.Search}
      type="search"
      placeholder={placeholder}
      onChange={changeHandler}
    />
  );
};
