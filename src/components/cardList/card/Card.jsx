import React from "react";
import styles from "./Card.module.css";

export const Card = ({ monster }) => {
  return (
    <div className={styles.Card}>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  );
};
