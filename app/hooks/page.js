import Image from "next/image";
import hooksCat from "hooksCat.png";
import styles from "./styles.module.css";

export default function Hooks() {
  return (
    <div>
      <section className="header">
        <div>
          <h2>React Hooks</h2>
          <h3>view = function(state)</h3>
        </div>

        <Image
          src={hooksCat}
          alt="Cat in space helmet is happy"
          width={350}
          height={350}
        />
      </section>
      <section>
        <div className="gridContainer">
          <div className="gridItem">
            <h4>useContext</h4>
            <p>
              gives you the ability to teleport data anywhere in your component
              tree. It has nothing to do with state. React will re-render
              whenever state changes - if you pass state through Context it will
              re-render when state changes. When we define context at the root,
              whenever state changes, Reafct will re-render the entire tree.
            </p>
          </div>
          <div className="gridItem">
            <h4>useRef</h4>
            <p>
              use it, if you need to preserve state that has nothing to do with
              render. It creates a value that is preserved across re-renders but
              it won&apos;t trigger a re-render when it changes. You can pass an
              initial value. Unlike useState, this initial value is mutalbe.
            </p>
          </div>
          <div className="gridItem">
            <h4>useReducer</h4>
            <p>
              functionally behaves like useState but allows you to manage your
              state using a reducer pattern. Whenever updating one state depends
              on the value of another piece of state, or your initial state is
              going to be an object reach for useReducer. It can also help to
              get rid of dependencies in useEffect
            </p>
          </div>
          <div className="gridItem">
            <h4>useEffectEvent</h4>
            <p>
              Sometimes we need to be able to use a reactive value (like state)
              inside of useEffect, but that reactive value has nothing to do
              with synchronising the component, so it shouldn&apos;t need to be
              included in the dependency array. We can use useEffectEvent to
              abstract those values into their own event handler which we can
              use inside useEffect.
            </p>
          </div>
          <div className="gridItem">
            <h4>useSyncExternalStore</h4>
            <p>
              In scenarios where a piece of non-React state is already being
              managed by some outside system (like navigator) you can use
              useSyncExternalStore to subscribe to that state. You should define
              this hook and its functions outside the component.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.dangerzone}>
          <h3>Danger Zone</h3>
          <p>
            Performance optimization comes never for free.The default behavior
            of React isn&apos;t to memoize components, functions or values
            because the majority of the time it is unnecessary. This applies for
            React.memo, useMemo and useCallback. React treats these like a
            performance hint rather than a guarantee. It may choose to forget...
          </p>
        </div>
        <div className="gridContainer">
          <div className="gridItem">
            <h4>useMemo</h4>
            <p>
              takes two arguments, a function and a dependency array. It returns
              a value that will be computed on the initial render and whenever
              any of the values in the decpendency arrray change.
            </p>
          </div>
          <div className="gridItem">
            <h4>React.memo</h4>
            <p>
              is a higher-order component that let&apos;s you skip re-rendering
              a component if it&apos;s props haven&apos;t changed. React will
              render the component an memorise the result. On re-renders React
              will perform a shallow comparison.
            </p>
          </div>
          <div className="gridItem">
            <h4>useCallback</h4>
            <p>
              Any function you create with useCallback will not be re-created on
              subsequent re-renders. The memoized function will only change if
              one of the values in the dependendy array changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
