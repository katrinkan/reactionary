"use client";

import Image from "next/image";
import customCat from "customCat.png";
import styles from "./styles.module.css";

const hooks = [
  {
    title: "useDocumentTitle",
    src: "https://codepen.io/katrinkanape/embed/yLGrEpx?default-tab=js&theme-id=dark",
  },
];

export default function Custom() {
  return (
    <div>
      <section className="header">
        <div>
          <h2>Custom Hooks</h2>
          <h3>view = function(state)</h3>
        </div>

        <Image
          src={customCat}
          alt="Cat in space helment loves it"
          height={350}
          width={350}
        />
      </section>
      <section>
        <h3> Build search</h3>
        <div className="gridContainer">
          {hooks.map((hook) => {
            return (
              <div className="gridItem" key={hook.idex}>
                <h4>{hook.title}</h4>
                <div className={styles.codeframe}>
                  <iframe
                    height="300"
                    width="400"
                    title={hook.title}
                    src={hook.src}
                    frameborder="no"
                    loading="lazy"
                    allowtransparency="true"
                    className="codeframe"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
