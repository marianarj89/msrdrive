import  { useCallback, useEffect } from "react";
import Quill from "quill";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "quill/dist/quill.snow.css";
import "./EditorTexto.module.css";
import io from "socket.io-client";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false]}],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" ,}],
  ["bold", "italic", "underline"],
  [{ color: [] }, {background: [] }],
  [{ script: "sub" }, {script: "super"}],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
]


function EditorTexto() {

  useEffect(() => {
    const socket = io("http://localhost:3001");
    return () => {
      socket.disconnect();
    };
  }, []);



    const wrapperRef = useCallback((wrapper) => {
      if (wrapper == null) return;
      wrapper.innerHTML = "";
      const editor = document.createElement("div");
      wrapper.append(editor);
      new Quill(editor, {
        theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS },
      });
  


    }, []);
  
    return (
      <div>
        <Header />
        <div id="container" className="container" ref={wrapperRef}></div>
        <Footer />
      </div>
    );
  }
  
  export default EditorTexto;