import Card from "../components/card";
import Header from "../components/header";

const rules = [
  {
    title: "Rule #0",
    content:
      "When a component renders, it should do so without running into any side effects.",
  },
  {
    title: "Rule #1",
    content:
      " If a side effect is triggered by an event, put that side effect in an event handler.",
  },
  {
    title: "Rule #2",
    content:
      "If a side effect is synchronising your component with some outside system, put that side effect inside useEffect.",
  },
  {
    title: "Rule #3",
    content:
      "If a side effect is synchronising your component with some outside system and that side effect needs to run before the browser paints the screen, put that side effect inside useLayoutEffect.",
  },
  {
    title: "Rule #4",
    content:
      "If a side effect is subscribing to an external store, use the useSyncExternalStore hook.",
  },
];

export default function Rules() {
  return (
    <div>
      <Header title="React Rules" iris="irisRules" />
      <section>
        <div className="gridContainer">
          {rules.map((rule) => {
            return <Card item={rule} />;
          })}
        </div>
      </section>
    </div>
  );
}
