import "./App.css";
import { useState } from "react";
import MainHeader from "./components/MainHeader";
import DetailForm from "./components/DetailForm";
import { useSelector } from "react-redux";
import ModalForm from "./components/ModalForm";



function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formState = useSelector(state=>state)


  return (  
    <div>
      <MainHeader />
      <DetailForm />
      <ModalForm />
    </div>
  );
}

export default App;
