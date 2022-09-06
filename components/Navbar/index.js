import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width={32} height={32}></Image>
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>7365052973</div>
        </div>
      </div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
};

export default Navbar;
