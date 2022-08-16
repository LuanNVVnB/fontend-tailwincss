import Header from "./components/header/index";
import {
  Routes,
  Route,
} from "react-router-dom";
import publicRouter from './routes/index';
function App() {
  return (
    <div className="relative w-full">
      <Header />
      <Routes>
        {publicRouter.map((item, index) => {
         return (<Route key={index} path={item.path} element={<item.component />} />)
        })}
      </Routes>

    </div>

  );
}

export default App;
