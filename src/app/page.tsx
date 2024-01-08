import NavBar from "./components/layout/app-bar";
import ProjectList from "./components/project-list";
import { CartWrapper } from "./context/cart";

const App: React.FC = () => {
  return (
    <CartWrapper>
      <NavBar />
      <main>
        <ProjectList />
      </main>
    </CartWrapper>
  );
};

export default App;
