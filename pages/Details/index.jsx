import {Container, Links, Content} from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {

  return (
   <Container>
    <Header />

    <main>
      <Content>

       <ButtonText title="excluir nota"/>

        <h1> 
          Introdução ao React.JS
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Nulla possimus qui eaque fuga, ullam sapiente eligendi laborum beatae
           nam dolore magnam. Quidem quas, quasi sint eius saepe officiis quos deserunt!
        </p>
       

        <Section title="Links úteis">
          <Links>
            <li><a href="#"> https://www.rocketseat.com.br/</a></li>
            <li><a href="#"> https://github.com/GuiCoralli</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
          <Tag title="express"/>
          <Tag title="nodejs"/>
        </Section>

       <Button title = "Voltar"/>

      </Content>
    </main>
  </Container>
 )
}