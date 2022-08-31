import React from "react";
import styles from "./Space.module.css";
function Css() {
  return (
    <div className={styles.body}>
      <main className={styles.hero}>
        <h1 className={styles.pageTitle}>
          My Expiernce
        </h1>
      </main>
      <div className={styles.ex}>
        <section>
          <h1>Skips Smokehouse Barbecue, Guadalajara</h1>
          <p>
            Working in a family-owned restaurant and catering business, I had the
            opportunity to become a real "jack of all trades." I prepared meat, smoked
            meat, served meat, and ate meat. Sadly, it closed down when the pandemic
            hit.
          </p>
        </section>
        <section>
          <h1>Owner at Luke's Kombucha, Guadalajara</h1>
          <p>
            I started my own kombucha business when I was fifteen years old. Starting
            with a small investment, I learned how to make and bottle kombucha,
            found a bottle provider, hired a designer, and worked with restaurants to
            sell my product. I was able to keep going through most of the pandemic
            with the sales I made to friends and acquaintances.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Css;