import { Container, SliderShow1, SliderShow2, SliderShow3 } from "./styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import Slider3 from "../../assets/slider3.png";

function Slider() {
  return (
    <Container>
      <Carousel showThumbs={false} showStatus={false}>
        <SliderShow1>
          <img src={Slider1} alt="Tomando Café" />
          <div className="testedelta">
            <p>Teste da</p>
            <p className="enfase">Delta</p>
          </div>
          <div className="qualTesteFazerHoje">
            <p className="qual">Qual</p>
            <p className="teste">teste</p>
            <p className="voceQuer">você quer fazer</p>
            <p className="hoje">hoje?</p>
          </div>
        </SliderShow1>

        <SliderShow2>
          <img src={Slider2} alt="Tecnologia" />
          <div className="testedelta">
            <p>Segundo</p>
            <p className="enfase">Slider</p>
          </div>
        </SliderShow2>

        <SliderShow3>
          <img src={Slider3} alt="Guincho" />
          <div className="testedelta">
            <p>Terceiro</p>
            <p className="enfase">Slider</p>
          </div>
        </SliderShow3>
      </Carousel>
    </Container>
  );
}

export default Slider;
