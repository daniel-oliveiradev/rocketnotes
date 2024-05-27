import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Links, Content } from "./styles";
import { api } from "../../service/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export function Details() {
  const [data, setData] = useState();

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate("/")
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {
      data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" />

            
            <h1>{data.title}</h1>

            <p>{data.description}</p>
            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url}>{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="Voltar" onClick={handleBack}  />
          </Content>
        </main>
      )}
    </Container>
  );
}
