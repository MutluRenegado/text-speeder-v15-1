import { useEffect, useState } from "react";

import Background from "./layers/layer1-background/Background";
import Overlay from "./layers/layer2-overlay/Overlay";
import Texture from "./layers/layer3-texture/Texture";
import ContentHost from "./layers/layer4-content/ContentHost";
import GlobalUI from "./layers/layer5-global-ui/GlobalUI";
import AccessibilityLayer from "./layers/layer6-accessibility/AccessibilityLayer";

import { getInitialTheme, applyTheme } from "./state/themeState";

export default function App() {
<<<<<<< HEAD
  // intro → welcome → app/test
=======
  // intro → welcome → app/test (local only)
>>>>>>> 8e79745e87badcd7c4e044857485b368390e6414
  const [view, setView] = useState("intro");
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <>
<<<<<<< HEAD
      {/* GLOBAL LAYERS (always present) */}
=======
      {/* GLOBAL LAYERS (always present, fixed order) */}
>>>>>>> 8e79745e87badcd7c4e044857485b368390e6414
      <Background />
      <Overlay />
      <Texture />

<<<<<<< HEAD
      {/* SINGLE CONTENT ORCHESTRATOR */}
      <ContentHost
        view={view}
        onNavigate={setView}
        theme={theme}
      />

      {/* GLOBAL UI */}
=======
      {/* CONTENT HOST owns screens */}
      <ContentHost
        view={view}
        onNavigate={setView}
      />

      {/* GLOBAL UI & ACCESSIBILITY always on top of content */}
>>>>>>> 8e79745e87badcd7c4e044857485b368390e6414
      <GlobalUI theme={theme} setTheme={setTheme} />
      <AccessibilityLayer />
    </>
  );
}
