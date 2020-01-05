import React from "react";
import styles from "./CardList.module.css";
import { Card } from "./card/Card";

export const CardList = ({ monsters }) => {
  return (
    <div className={styles.CardList}>
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
