"use client";

import Image from "next/image";
import customCat from "customCat.png";
import styles from "./styles.module.css";

const hooks = [
  {
    title: "useDocumentTitle",
    src: "https://codepen.io/katrinkanape/embed/yLGrEpx?default-tab=js&theme-id=dark",
    tags: ["title", "document"],
  },
  {
    title: "useDefault",
    src: "https://codepen.io/katrinkanape/embed/OJdNGoL?default-tab=js&theme-id=dark",
    tags: ["default", "default state"],
  },
  {
    title: "useToggle",
    src: "https://codepen.io/katrinkanape/embed/WNPwWVG?default-tab=js&theme-id=dark",
    tags: ["toggle", "boolean"],
  },
  {
    title: "usePrevious",
    src: "https://codepen.io/katrinkanape/embed/BaMKeao?default-tab=js&theme-id=dark",
    tags: ["previous", "state"],
  },
  {
    title: "usePreferredLanguage",
    src: "https://codepen.io/katrinkanape/embed/poGymvw?default-tab=js&theme-id=dark",
    tags: ["language", "preferred"],
  },
  {
    title: "useFavicon",
    src: "https://codepen.io/katrinkanape/embed/OJdNYyy?default-tab=js&theme-id=dark",
    tags: ["favicon", "document"],
  },
  {
    title: "useCopyToClipboard",
    src: "https://codepen.io/katrinkanape/embed/xxMVNZy?default-tab=js&theme-id=dark",
    tags: ["copy", "clipboard"],
  },
  {
    title: "useInterval",
    src: "https://codepen.io/katrinkanape/embed/abXNrNa?default-tab=js&theme-id=dark",
    tags: ["interval", "setinterval"],
  },
  {
    title: "useCounter",
    src: "https://codepen.io/katrinkanape/embed/ZEwWNpr?default-tab=js&theme-id=dark",
    tags: ["counter", "increment", "decrement"],
  },
  {
    title: "useLockBodyScroll",
    src: "https://codepen.io/katrinkanape/embed/KKJzLNv?default-tab=js&theme-id=dark",
    tags: ["lock", "scroll", "srolling", "modal"],
  },
  {
    title: "useQueue",
    src: "https://codepen.io/katrinkanape/embed/RwvampN?default-tab=js&theme-id=dark",
    tags: ["queue"],
  },
  {
    title: "useTimeout",
    src: "https://codepen.io/katrinkanape/embed/GRzZaGq?default-tab=js&theme-id=dark",
    tags: ["timeout", "settimeout"],
  },
  {
    title: "useWindowSize",
    src: "https://codepen.io/katrinkanape/embed/RwvamBr?default-tab=js&theme-id=dark",
    tags: ["windowsize", "window", "resize", "width", "height"],
  },
  {
    title: "useVisibilityChange",
    src: "https://codepen.io/katrinkanape/embed/NWoNVLa?default-tab=js&theme-id=dark",
    tags: ["visibility", "visible"],
  },
  {
    title: "useList",
    src: "https://codepen.io/katrinkanape/embed/wvNGbYe?default-tab=js&theme-id=dark",
    tags: ["list", "items", "push", "remove", "insert", "update"],
  },
  {
    title: "useObjectState",
    src: "https://codepen.io/katrinkanape/embed/YzBqbRy?default-tab=js&theme-id=dark",
    tags: ["object", "state", "merge"],
  },
  {
    title: "useDebounce",
    src: "https://codepen.io/katrinkanape/embed/LYqNoqY?default-tab=js&theme-id=dark",
    tags: ["debounce", "delay", "input", "request"],
  },
  {
    title: "useContinuousRetry",
    src: "https://codepen.io/katrinkanape/embed/jOdqoJz?default-tab=js&theme-id=dark",
    tags: ["retry", "repeat", "success", "async"],
  },
  {
    title: "useHistoryState",
    src: "https://codepen.io/katrinkanape/embed/yLZOWrx?default-tab=js&theme-id=dark",
    tags: ["history", "state", "undo", "redo", "previous"],
  },
  {
    title: "useEventListener",
    src: "https://codepen.io/katrinkanape/embed/KKJzLLe?default-tab=js&theme-id=dark",
    tags: ["event", "listener", "eventlistener"],
  },
  {
    title: "useRandomInterval",
    src: "https://codepen.io/katrinkanape/embed/NWoNVZX?default-tab=js&theme-id=dark",
    tags: ["interval", "random", "range"],
  },
  {
    title: "useMediaQuery",
    src: "https://codepen.io/katrinkanape/embed/Rwvazbo?default-tab=js&theme-id=dark",
    tags: ["media", "query", "dimensions", "screen", "resize"],
  },
  {
    title: "useIntervalWhen",
    src: "https://codepen.io/katrinkanape/embed/Rwvazwo?default-tab=js&theme-id=dark",
    tags: ["interval", "condition", "conditional"],
  },
  {
    title: "useMouse",
    src: "https://codepen.io/katrinkanape/embed/YzBqoPG?default-tab=js&theme-id=dark",
    tags: ["mouse", "track", "position", "mousemove"],
  },
  {
    title: "useClickAway",
    src: "https://codepen.io/katrinkanape/embed/RwvazPK?default-tab=js&theme-id=dark",
    tags: ["click", "away", "outside", "modal"],
  },
  {
    title: "useWindowScroll",
    src: "https://codepen.io/katrinkanape/embed/PoVNrPK?default-tab=js&theme-id=dark",
    tags: ["window", "scroll", "track", "position"],
  },
  {
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
    title: "useOrientation",
    src: "https://codepen.io/katrinkanape/embed/ExrKByY?default-tab=js&theme-id=dark",
    tags: ["orientation", "screen", "window", "landscape", "portrait"],
  },
  {
    title: "useBattery",
    src: "https://codepen.io/katrinkanape/embed/rNPeELE?default-tab=js&theme-id=dark",
    tags: ["battery", "charging"],
  },
  {
    title: "usePageLeave",
    src: "https://codepen.io/katrinkanape/embed/yLZOdaZ?default-tab=js&theme-id=dark",
    tags: ["leave", "away", "page", "mouseout"],
  },
  {
    title: "useKeyPress",
    src: "https://codepen.io/katrinkanape/embed/BaMKgpY?default-tab=js&theme-id=dark",
    tags: ["key", "press", "keydown"],
  },
  {
    title: "useThrottle",
    src: "https://codepen.io/katrinkanape/embed/gOqrNmX?default-tab=js&theme-id=dark",
    tags: ["throttle", "interval"],
  },
  {
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
    title: "useFetch",
    src: "https://codepen.io/katrinkanape/embed/rNPeEGB?default-tab=js&theme-id=dark",
    tags: ["fetch", "data", "url", "cache"],
  },
  {
    title: "useCountdown",
    src: "https://codepen.io/katrinkanape/embed/xxMVoPZ?default-tab=js&theme-id=dark",
    tags: ["countdown", "timer", "interval"],
  },
  {
    title: "useGeolocation",
    src: "https://codepen.io/katrinkanape/embed/NWoNZyO?default-tab=js&theme-id=dark",
    tags: ["geolocation", "location", "position"],
  },
  {
    title: "useLocalStorage",
    src: "https://codepen.io/katrinkanape/embed/yLZOdKW?default-tab=js&theme-id=dark",
    tags: ["local", "storage", "data", "store", "retrieve"],
  },
  {
    title: "useSessionStorage",
    src: "https://codepen.io/katrinkanape/embed/KKJzjRY?default-tab=js&theme-id=dark",
    tags: ["session", "storage", "cart"],
  },
  {
    title: "useIsClient",
    src: "https://codepen.io/katrinkanape/embed/qBgZzyq?default-tab=js&theme-id=dark",
    tags: ["client", "clientside", "server", "serverside"],
  },
  {
    title: "useNetworkState",
    src: "https://codepen.io/katrinkanape/embed/wvNGLEY?default-tab=js&theme-id=dark",
    tags: ["network", "status", "online", "offline", "connection"],
  },
  {
    title: "useLongPress",
    src: "https://codepen.io/katrinkanape/embed/vYbGqVW?default-tab=js&theme-id=dark",
    tags: ["longpress", "button", "touch", "mousedown"],
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
          className="image"
        />
      </section>
      <section>
        <h3> Build search</h3>
        <div className="gridContainer">
          {hooks.map((hook) => {
            return (
              <div className="gridItem" key={hook.idex}>
                <h4>{hook.title}</h4>
                <div>
                  <iframe
                    title={hook.title}
                    src={hook.src}
                    frameborder="no"
                    loading="lazy"
                    allowtransparency="true"
                    className={styles.codeframe}
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
