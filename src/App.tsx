// Components
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Board from "./components/board/Board";

// CSS
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Board></Board>
      </main>
      <Footer />
    </div>
  );
}

export default App;
