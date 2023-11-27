import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import { useState } from "react";


function App() {

  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <div>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 &&(

      <div>
        <Perfil nomeUsuario={nomeUsuario}  />
        <ReposList  nomeUsuario={nomeUsuario}  />
      </div>
      )}
      
      {/* {
        formularioVisivel && (
          <Formulario />
        )
      }

      {}

      <button onClick={()=> setFormularioVisivel(!formularioVisivel)}>toggle</button> */}
    </div>
  )
}

export default App
