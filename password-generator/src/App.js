import "./App.css";
import { PasswordGenerator } from "./components/PasswordGenerator";
function App() {
  return (
    <main>
      <div className="container">
        <h1 className="app-tittle">Gerador de Senhas</h1>
        <PasswordGenerator/>
      </div>
    </main>
  );
}

export default App;
