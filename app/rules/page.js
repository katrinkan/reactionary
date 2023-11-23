import Card from "../components/card";
import Header from "../components/header";

const rules = [
  {
    id: 1,
    title: "Rule #0",
    content:
      "When a component renders, it should do so without running into any side effects.",
  },
  {
    id: 2,
    title: "Rule #1",
    content:
      " If a side effect is triggered by an event, put that side effect in an event handler.",
  },
  {
    id: 3,
    title: "Rule #2",
    content:
      "If a side effect is synchronising your component with some outside system, put that side effect inside useEffect.",
  },
  {
    id: 4,
    title: "Rule #3",
    content:
      "If a side effect is synchronising your component with some outside system and that side effect needs to run before the browser paints the screen, put that side effect inside useLayoutEffect.",
  },
  {
    id: 5,
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
            return <Card item={rule} key={rule.id} />;
          })}
        </div>
      </section>
    </div>
  );
}
