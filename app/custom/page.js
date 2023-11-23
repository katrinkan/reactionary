"use client";

import Card from "../components/Card/card";
import Hero from "../components/Hero/hero";
import styles from "./styles.module.css";
import { useMemo, useState } from "react";

const hooks = [
  {
    id: 1,
    title: "useDocumentTitle",
    src: "https://codepen.io/katrinkanape/embed/yLGrEpx?default-tab=js&theme-id=dark",
    tags: ["title", "document"],
  },
  {
    id: 2,
    title: "useDefault",
    src: "https://codepen.io/katrinkanape/embed/OJdNGoL?default-tab=js&theme-id=dark",
    tags: ["default", "default state"],
  },
  {
    id: 3,
    title: "useToggle",
    src: "https://codepen.io/katrinkanape/embed/WNPwWVG?default-tab=js&theme-id=dark",
    tags: ["toggle", "boolean"],
  },
  {
    id: 4,
    title: "usePrevious",
    src: "https://codepen.io/katrinkanape/embed/BaMKeao?default-tab=js&theme-id=dark",
    tags: ["previous", "state"],
  },
  {
    id: 5,
    title: "usePreferredLanguage",
    src: "https://codepen.io/katrinkanape/embed/poGymvw?default-tab=js&theme-id=dark",
    tags: ["language", "preferred"],
  },
  {
    id: 6,
    title: "useFavicon",
    src: "https://codepen.io/katrinkanape/embed/OJdNYyy?default-tab=js&theme-id=dark",
    tags: ["favicon", "document"],
  },
  {
    id: 7,
    title: "useCopyToClipboard",
    src: "https://codepen.io/katrinkanape/embed/xxMVNZy?default-tab=js&theme-id=dark",
    tags: ["copy", "clipboard"],
  },
  {
    id: 8,
    title: "useInterval",
    src: "https://codepen.io/katrinkanape/embed/abXNrNa?default-tab=js&theme-id=dark",
    tags: ["interval", "setinterval"],
  },
  {
    id: 9,
    title: "useCounter",
    src: "https://codepen.io/katrinkanape/embed/ZEwWNpr?default-tab=js&theme-id=dark",
    tags: ["counter", "increment", "decrement"],
  },
  {
    id: 10,
    title: "useLockBodyScroll",
    src: "https://codepen.io/katrinkanape/embed/KKJzLNv?default-tab=js&theme-id=dark",
    tags: ["lock", "scroll", "srolling", "modal"],
  },
  {
    id: 11,
    title: "useQueue",
    src: "https://codepen.io/katrinkanape/embed/RwvampN?default-tab=js&theme-id=dark",
    tags: ["queue"],
  },
  {
    id: 12,
    title: "useTimeout",
    src: "https://codepen.io/katrinkanape/embed/GRzZaGq?default-tab=js&theme-id=dark",
    tags: ["timeout", "settimeout"],
  },
  {
    id: 13,
    title: "useWindowSize",
    src: "https://codepen.io/katrinkanape/embed/RwvamBr?default-tab=js&theme-id=dark",
    tags: ["windowsize", "window", "resize", "width", "height"],
  },
  {
    id: 14,
    title: "useVisibilityChange",
    src: "https://codepen.io/katrinkanape/embed/NWoNVLa?default-tab=js&theme-id=dark",
    tags: ["visibility", "visible"],
  },
  {
    id: 15,
    title: "useList",
    src: "https://codepen.io/katrinkanape/embed/wvNGbYe?default-tab=js&theme-id=dark",
    tags: ["list", "items", "push", "remove", "insert", "update"],
  },
  {
    id: 16,
    title: "useObjectState",
    src: "https://codepen.io/katrinkanape/embed/YzBqbRy?default-tab=js&theme-id=dark",
    tags: ["object", "state", "merge"],
  },
  {
    id: 17,
    title: "useDebounce",
    src: "https://codepen.io/katrinkanape/embed/LYqNoqY?default-tab=js&theme-id=dark",
    tags: ["debounce", "delay", "input", "request"],
  },
  {
    id: 18,
    title: "useContinuousRetry",
    src: "https://codepen.io/katrinkanape/embed/jOdqoJz?default-tab=js&theme-id=dark",
    tags: ["retry", "repeat", "success", "async"],
  },
  {
    id: 19,
    title: "useHistoryState",
    src: "https://codepen.io/katrinkanape/embed/yLZOWrx?default-tab=js&theme-id=dark",
    tags: ["history", "state", "undo", "redo", "previous"],
  },
  {
    id: 20,
    title: "useEventListener",
    src: "https://codepen.io/katrinkanape/embed/KKJzLLe?default-tab=js&theme-id=dark",
    tags: ["event", "listener", "eventlistener"],
  },
  {
    id: 21,
    title: "useRandomInterval",
    src: "https://codepen.io/katrinkanape/embed/NWoNVZX?default-tab=js&theme-id=dark",
    tags: ["interval", "random", "range"],
  },
  {
    id: 22,
    title: "useMediaQuery",
    src: "https://codepen.io/katrinkanape/embed/Rwvazbo?default-tab=js&theme-id=dark",
    tags: ["media", "query", "dimensions", "screen", "resize"],
  },
  {
    id: 23,
    title: "useIntervalWhen",
    src: "https://codepen.io/katrinkanape/embed/Rwvazwo?default-tab=js&theme-id=dark",
    tags: ["interval", "condition", "conditional"],
  },
  {
    id: 24,
    title: "useMouse",
    src: "https://codepen.io/katrinkanape/embed/YzBqoPG?default-tab=js&theme-id=dark",
    tags: ["mouse", "track", "position", "mousemove"],
  },
  {
    id: 25,
    title: "useClickAway",
    src: "https://codepen.io/katrinkanape/embed/RwvazPK?default-tab=js&theme-id=dark",
    tags: ["click", "away", "outside", "modal"],
  },
  {
    id: 26,
    title: "useWindowScroll",
    src: "https://codepen.io/katrinkanape/embed/PoVNrPK?default-tab=js&theme-id=dark",
    tags: ["window", "scroll", "track", "position"],
  },
  {
    id: 27,
    title: "useLogger",
    src: "https://codepen.io/katrinkanape/embed/WNPwqry?default-tab=js&theme-id=dark",
    tags: [
      "logger",
      "log",
      "console",
      "render",
      "rerender",
      "mounted",
      "unmounted",
    ],
  },
  {
    id: 28,
    title: "useOrientation",
    src: "https://codepen.io/katrinkanape/embed/ExrKByY?default-tab=js&theme-id=dark",
    tags: ["orientation", "screen", "window", "landscape", "portrait"],
  },
  {
    id: 29,
    title: "useBattery",
    src: "https://codepen.io/katrinkanape/embed/rNPeELE?default-tab=js&theme-id=dark",
    tags: ["battery", "charging"],
  },
  {
    id: 30,
    title: "usePageLeave",
    src: "https://codepen.io/katrinkanape/embed/yLZOdaZ?default-tab=js&theme-id=dark",
    tags: ["leave", "away", "page", "mouseout"],
  },
  {
    id: 31,
    title: "useKeyPress",
    src: "https://codepen.io/katrinkanape/embed/BaMKgpY?default-tab=js&theme-id=dark",
    tags: ["key", "press", "keydown"],
  },
  {
    id: 32,
    title: "useThrottle",
    src: "https://codepen.io/katrinkanape/embed/gOqrNmX?default-tab=js&theme-id=dark",
    tags: ["throttle", "interval"],
  },
  {
    id: 33,
    title: "useIdle",
    src: "https://codepen.io/katrinkanape/embed/VwgaJWP?default-tab=js&theme-id=dark",
    tags: [
      "idle",
      "inactive",
      "user",
      "mousemove",
      "mousedown",
      "resize",
      "keydown",
      "touchstart",
      "wheel",
      "visibilitychange",
    ],
  },
  {
    id: 34,
    title: "useFetch",
    src: "https://codepen.io/katrinkanape/embed/rNPeEGB?default-tab=js&theme-id=dark",
    tags: ["fetch", "data", "url", "cache"],
  },
  {
    id: 35,
    title: "useCountdown",
    src: "https://codepen.io/katrinkanape/embed/xxMVoPZ?default-tab=js&theme-id=dark",
    tags: ["countdown", "timer", "interval"],
  },
  {
    id: 36,
    title: "useGeolocation",
    src: "https://codepen.io/katrinkanape/embed/NWoNZyO?default-tab=js&theme-id=dark",
    tags: ["geolocation", "location", "position"],
  },
  {
    id: 37,
    title: "useLocalStorage",
    src: "https://codepen.io/katrinkanape/embed/yLZOdKW?default-tab=js&theme-id=dark",
    tags: ["local", "storage", "data", "store", "retrieve"],
  },
  {
    id: 38,
    title: "useSessionStorage",
    src: "https://codepen.io/katrinkanape/embed/KKJzjRY?default-tab=js&theme-id=dark",
    tags: ["session", "storage", "cart"],
  },
  {
    id: 39,
    title: "useIsClient",
    src: "https://codepen.io/katrinkanape/embed/qBgZzyq?default-tab=js&theme-id=dark",
    tags: ["client", "clientside", "server", "serverside"],
  },
  {
    id: 40,
    title: "useNetworkState",
    src: "https://codepen.io/katrinkanape/embed/wvNGLEY?default-tab=js&theme-id=dark",
    tags: ["network", "status", "online", "offline", "connection"],
  },
  {
    id: 41,
    title: "useLongPress",
    src: "https://codepen.io/katrinkanape/embed/vYbGqVW?default-tab=js&theme-id=dark",
    tags: ["longpress", "button", "touch", "mousedown"],
  },
];

export default function Custom() {
  const [query, setQuery] = useState("");

  const filteredHooks = useMemo(() => {
    if (!query) {
      return hooks;
    } else {
      return hooks.filter((hook) => hook.tags.includes(query.toLowerCase()));
    }
  }, [query]);

  return (
    <div>
      <Hero title="Custom Hooks" iris="irisCustom" />

      <section>
        <div className={styles.searchWrapper}>
          <input
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="Search"
            className={styles.search}
          />
        </div>

        {filteredHooks.length > 0 ? (
          <div className="gridContainer">
            {filteredHooks.map((hook) => {
              return <Card item={hook} key={hook.id} />;
            })}
          </div>
        ) : (
          <div className={styles.noHooks}>
            <p>Sorry, no Hooks found. Please try again!</p>
          </div>
        )}
      </section>
    </div>
  );
}
