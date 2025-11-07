import React, { useState, useEffect } from "react";

export default function TextSpeederLayout({ children, onToggleTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);

  // keyboard shortcut
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.shiftKey && e.code === "KeyC") {
        setGridVisible((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --accent: #0078ff;
          --bg: #f9f9f9;
          --text: #222;
          --footer: #f6b659;
          --turquoise: #27d0c6;
        }
        body { margin:0;background:var(--bg);color:var(--text);font-family:"Segoe UI",Roboto,sans-serif;}
        .app-root{display:flex;flex-direction:column;min-height:100vh;max-width:1280px;margin:0 auto;}
        header{background:var(--turquoise);color:#fff;padding:1rem;display:flex;justify-content:space-between;align-items:center;}
        .top-controls{display:flex;align-items:center;gap:.5rem;}
        button{cursor:pointer;}
        .menu-toggle,.theme-toggle{background:var(--accent);color:#fff;border:none;padding:.5rem .8rem;border-radius:6px;transition:background .2s;}
        .menu-toggle:hover,.theme-toggle:hover{background:#005fcc;}
        aside.sidebar{position:fixed;top:0;left:0;width:250px;height:100%;background:#020617;color:#fff;border-right:2px solid #0b1120;transform:translateX(-100%);transition:transform .3s ease;z-index:999;padding:1rem;}
        aside.sidebar.open{transform:translateX(0);}
        .sidebar-content button{display:block;width:100%;background:none;border:none;color:#fff;text-align:left;padding:.5rem 0;font-size:1rem;}
        .sidebar-content button:hover{color:var(--turquoise);}
        main{flex:1;padding:1.5rem;}
        footer{background:var(--footer);padding:.8rem;text-align:center;font-size:.9rem;}

        /* === Grid Panel === */
        .grid-layer{
          position:fixed;
          bottom:0;
          left:0;
          right:0;
          background:rgba(255,255,255,0.95);
          backdrop-filter:blur(6px);
          border-top:1px solid #ddd;
          padding:1rem 2rem;
          box-shadow:0 -2px 10px rgba(0,0,0,0.2);
          transform:translateY(100%);
          opacity:0;
          transition:transform .3s ease,opacity .3s ease;
          z-index:1000;
        }
        .grid-layer.visible{transform:translateY(0);opacity:1;}
        .grid-content{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:1rem;
          align-items:center;
        }
        .grid-content label{font-weight:500;}
        .grid-content input,.grid-content select{
          width:100%;
          padding:.4rem .6rem;
          border:1px solid #ccc;
          border-radius:6px;
        }
      `}</style>

      <div className="app-root">
        <header>
          <div className="logo">TEXTSPEEDER</div>
          <div className="top-controls">
            <button className="theme-toggle" onClick={onToggleTheme}>
              dark/light
            </button>
            <button className="menu-toggle" onClick={() => setSidebarOpen((p) => !p)}>
              ☰ Menu
            </button>
            <button
              className="menu-toggle"
              onClick={() => setGridVisible((p) => !p)}
            >
              ⚙ Controls
            </button>
          </div>
        </header>

        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-content">
            <button onClick={() => setSidebarOpen(false)}>🏠 Home</button>
            <button onClick={() => setSidebarOpen(false)}>📚 Reading</button>
            <button onClick={() => setSidebarOpen(false)}>👤 Profile</button>
            <button onClick={() => setSidebarOpen(false)}>✖ Close</button>
          </div>
        </aside>

        <main>{children}</main>

        {/* Footer */}
        <footer>TextSpeeder © 2025 — All Rights Reserved</footer>

        {/* Toggleable Grid Layer */}
        <section className={`grid-layer ${gridVisible ? "visible" : ""}`}>
          <div className="grid-content">
            <div>
              <label>Mode</label>
              <select>
                <option>Flow</option>
                <option>RSVP</option>
              </select>
            </div>
            <div>
              <label>Speed (WPM)</label>
              <input type="number" defaultValue="300" />
            </div>
            <div>
              <label>Highlight</label>
              <input type="checkbox" defaultChecked />
            </div>
            <div>
              <button>Pause</button>
              <button>Restart</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
