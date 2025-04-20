// import Main from "./components/Main";
import { Toaster } from "sonner";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/pages/Home";

function App() {
  return (
    <DefaultLayout>
      <Home />
      <Toaster richColors />
    </DefaultLayout>
  );
}

export default App;
