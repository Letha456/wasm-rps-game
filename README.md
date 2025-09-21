# Rock Paper Scissors (WASM Demo)

This is a simple **Rock-Paper-Scissors game** built with **C++ and WebAssembly (WASM)**.  
It demonstrates how to:  
- Write basic C++ game logic.  
- Compile C++ to WebAssembly using **Emscripten**.  
- Connect the compiled WASM module to a web page using **JavaScript**.  

---

## 📂 Project Structure

- **`rps.cpp`** → C++ game logic (decides who wins).  
- **`index.html`** → The web page (buttons + results area).  
- **`script.js`** → JavaScript bridge between HTML and WASM.  
- **`rps.js`** → Auto-generated Emscripten glue code.  
- **`rps.wasm`** → Compiled WebAssembly binary.  

---

## ▶️ How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/Letha456/wasm-rps-game.git
   cd wasm-rps-game
2.**Clone the repository**
 ```bash
   python -m http.server 8000
head to http://localhost:8000/
