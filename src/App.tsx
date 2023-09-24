import "./App.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/siderbar";

function App() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Sidebar />
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
