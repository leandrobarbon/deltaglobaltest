import { Container, Image, Card } from "./styles";

import artigos from "./data";

function Cards() {
  return (
    <Container>
      {artigos.map((listArtigo) => {
        return (
          <Card key={listArtigo.id}>
            <Image src={listArtigo.image} />
            <strong>
              Lorem ipsum dolor sit amet,
              <br />
              consetetur sadipscing elitr,
              <br />
              sed diam
            </strong>
            <section>
              <img src={listArtigo.photo} alt="Image Github"/>
              <p>
                {listArtigo.escritor} <br /> <span>{listArtigo.data}</span>
              </p>
            </section>
          </Card>
        );
      })}
    </Container>
  );
}

export default Cards;
