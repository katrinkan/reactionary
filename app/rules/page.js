import Image from "next/image";
import rulesCat from "rulesCat.png";

export default function Rules() {
  return (
    <div>
      <section className="header">
        <div>
          <h2>React Rules</h2>
          <h3>view = function(state)</h3>
        </div>

        <Image
          src={rulesCat}
          alt="Cat in space helmet saying Hi"
          width={350}
          height={350}
          className="image"
        />
      </section>
      <section>
        <div className="gridContainer">
          <div className="gridItem">
            <h4>Rule #0</h4>
            <p>
              When a component renders, it should do so without running into any
              side effects.
            </p>
          </div>
          <div className="gridItem">
            <h4>Rule #1</h4>
            <p>
              If a side effect is triggered by an event, put that side effect in
              an event handler.
            </p>
          </div>
          <div className="gridItem">
            <h4>Rule #2</h4>
            <p>
              If a side effect is synchronising your component with some outside
              system, put that side effect inside useEffect.
            </p>
          </div>
          <div className="gridItem">
            <h4>Rule #3</h4>
            <p>
              If a side effect is synchronising your component with some outside
              system and that side effect needs to run before the browser paints
              the screen, put that side effect inside useLayoutEffect.
            </p>
          </div>
          <div className="gridItem">
            <h4>Rule #4</h4>
            <p>
              If a side effect is subscribing to an external store, use the
              useSyncExternalStore hook.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
