
import './App.css';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
import QusnAndAns from './Component/QusnAndAns/QusnAndAns';

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Main></Main>
      <QusnAndAns></QusnAndAns>
      <Footer></Footer>
    </div>
  );
}

export default App;
