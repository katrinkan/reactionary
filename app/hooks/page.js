import Header from "../components/header";
import Card from "../components/card";
import styles from "./styles.module.css";

const hooks = [
  {
    title: "useContext",
    content:
      "gives you the ability to teleport data anywhere in your component tree. It has nothing to do with state. React will re-render whenever state changes - if you pass state through Context it will re-render when state changes. When we define context at the root, whenever state changes, Reafct will re-render the entire tree.",
  },
  {
    title: "useRef",
    content:
      "use it, if you need to preserve state that has nothing to do with render. It creates a value that is preserved across re-renders but it won&apos;t trigger a re-render when it changes. You can pass an initial value. Unlike useState, this initial value is mutalbe.",
  },
  {
    title: "useReducer",
    content:
      "functionally behaves like useState but allows you to manage your state using a reducer pattern. Whenever updating one state depends on the value of another piece of state, or your initial state is going to be an object reach for useReducer. It can also help to get rid of dependencies in useEffect.",
  },
  {
    title: "useEffectEvent",
    content:
      "Sometimes we need to be able to use a reactive value (like state) inside of useEffect, but that reactive value has nothing to do with synchronising the component, so it shouldn&apos;t need to be included in the dependency array. We can use useEffectEvent to abstract those values into their own event handler which we can use inside useEffect.",
  },
  {
    title: "useSyncExternalStore",
    content:
      "In scenarios where a piece of non-React state is already being managed by some outside system (like navigator) you can use useSyncExternalStore to subscribe to that state. You should define this hook and its functions outside the component.",
  },
];

const memoizingHooks = [
  {
    title: "useMemo",
    content:
      "takes two arguments, a function and a dependency array. It returns a value that will be computed on the initial render and whenever any of the values in the decpendency arrray change.",
  },
  {
    title: "React.memo",
    content:
      "is a higher-order component that let&apos;s you skip re-rendering a component if it&apos;s props haven&apos;t changed. React will render the component an memorise the result. On re-renders React will perform a shallow comparison.",
  },
  {
    title: "useCallback",
    content:
      "Any function you create with useCallback will not be re-created on subsequent re-renders. The memoized function will only change if one of the values in the dependendy array changes.",
  },
];

export default function Hooks() {
  return (
    <div>
      <Header title="React Hooks" iris="irisHooks" />

      <section>
        <div className="gridContainer">
          {hooks.map((hook) => {
            return <Card item={hook} />;
          })}
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
          {memoizingHooks.map((hook) => {
            return <Card item={hook} />;
          })}
        </div>
      </section>
    </div>
  );
}
