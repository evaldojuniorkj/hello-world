import "./App.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Post tittle="Meu Primeiro Post" readingTime={1}>
          <p>Introdução</p>
          <p>Desenvolvimento da idéia</p>
          <p>Conclusão</p>
        </Post>

        <Post tittle="Meu Segundo Post" readingTime={5}>

        </Post>
      </main>
    </div>
  );
}

export default App;
