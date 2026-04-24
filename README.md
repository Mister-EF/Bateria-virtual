# JS Virtual Drum Kit

A JavaScript-focused project that maps keyboard events to high-quality audio samples, featuring real-time visual feedback and CSS animations triggered by DOM manipulation. Hit the keys, feel the beat.

---

## How to Play

Each keyboard key triggers a drum sound and a visual pulse on its corresponding pad. Press fast — audio resets to the start on every hit so rapid inputs never get cut off.

| Key | Sound |
|-----|-------|
| `A` | Bumbo (Kick) |
| `S` | Caixa (Snare) |
| `D` | Tom |
| `F` | Chimbal (Hi-Hat) |
| `G` | Prato (Ride Cymbal) |

---

## Built With

| Technology | Role |
|------------|------|
| HTML5 | Pad layout and audio element binding |
| CSS3 | Dark theme, glow effects, and transition animations |
| JavaScript | Keyboard event mapping, audio playback, and DOM feedback |

---

## Project Structure

```
/
├── index.html        # Drum pad layout and audio source bindings
├── style.css         # Dark UI, pad styling, and .playing animation
└── script.js         # Keydown listener, audio control, and transition cleanup
```

---

## Getting Started

No installs or build tools required. Clone and open.

```bash
git clone https://github.com/Mister-EF/Bateria-virtual.git
cd Bateria-virtual
```

Then open `index.html` in your browser and start playing.

---

## Features

- Keyboard event listener mapped to `data-key` attributes for clean, scalable bindings
- `audio.currentTime = 0` reset on every keypress for rapid, uninterrupted playback
- CSS `.playing` class injected and removed via `transitionend` event for smooth visual feedback
- Glow and scale animation on active pads using `box-shadow` and `transform`
- Minimal, self-contained codebase — no libraries, no dependencies

Thank you for your attention!