import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link , useNavigate  } from 'react-router-dom';

import { useState } from 'react';

import { api } from "../../services/api";

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Form, Background } from "./styles";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const navigate = useNavigate();
  
    function handleSignUp() {
      if (!name || !email || !password) {
        return alert("Preencha todos os campos!");
      }
  
      setLoading(true);
  
      api
        .post("/users", { name, email, password })
        .then(() => {
          alert("Usuário cadastrado com sucesso!");
          navigate(-1);
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert("Não foi possível cadastrar");
          }
        })
        .finally(() => setLoading(false));
    }

    return(
        <Container>
            <Form>                
                <h1>Rocket Films</h1>
                <p>Aplicação para salver e gerenciar seus links úteis</p>

                <h2> Crie sua Conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={ FiUser }
                    onChange={(e) => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={ FiMail }
                    onChange={(e) => setName(e.target.value)}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={ FiLock }
                    onChange={(e) => setName(e.target.value)}
                />


                <Button title= "Cadastrar" 
                        onClick={handleSignUp} 
                        loading={loading} 
                />
                                
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o Login
                </Link>
            </Form>
            
            <Background />
        </Container>
    );
}