import "./App.css";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="page-layout">
        <aside className="examples left">Example 1: sin(30) = 0.5”</aside>
        <div className="app">
          <h1>Scientific Calculator</h1>
          <Calculator />
        </div>
        <aside className="examples right">Example 1: sin(30) = 0.5”</aside>
      </div>
      <Footer />
    </>
  );
}

export default App;
