import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  height: 423px;
  display: flex;

  .testedelta {
    position: absolute;
    top: 30%;
    left: 10%;
    color: #fff;

    p {
      text-align: left;
      margin-bottom: -30px;

      font-size: 24px;
      font-family: "Poppins", sans-serif;
    }

    .enfase {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 88px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    width: 76px;
    margin-bottom: -80px;

    .testedelta {
      position: absolute;
      top: 20%;
      left: 10%;
      color: #fff;

      p {
        text-align: left;
        margin-bottom: -10px;

        font-size: 12px;
        font-family: "Poppins", sans-serif;
      }

      .enfase {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 36px;
      }
    }
  }
`;

export const SliderShow1 = styled.div`
  width: 1200px;

  background-color: #094f7c;

  border-radius: 10px;

  img {
    width: 1200px;
    height: 423px;

    opacity: 0.4;
  }

  .qualTesteFazerHoje {
    position: absolute;
    top: 30%;
    right: 10%;
    color: #fff;

    .qual {
      margin-bottom: -20px;

      font-family: "Poppins", sans-serif;
      text-align: left;
      font-size: 32px;
    }

    .teste {
      margin-bottom: -20px;

      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-size: 56px;
    }

    .voceQuer {
      margin-bottom: -20px;

      font-family: "Poppins", sans-serif;
      text-align: left;
      font-size: 32px;
    }

    .hoje {
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      text-align: right;
      font-size: 56px;
    }
  }

  @media (max-width: 768px) {
    width: 360px;
    height: 300px;

    background-color: #094f7c;

    border-radius: 10px;

    img {
      border-radius: 10px;

      width: 360px;
      height: 300px;

      opacity: 0.4;
    }

    .qualTesteFazerHoje {
      position: absolute;
      top: 50%;
      right: 10%;
      color: #fff;

      .qual {
        margin-bottom: -10px;

        font-family: "Poppins", sans-serif;
        text-align: left;
        font-size: 12px;
      }

      .teste {
        margin-bottom: -10px;

        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 24px;
      }

      .voceQuer {
        margin-bottom: -10px;

        font-family: "Poppins", sans-serif;
        text-align: left;
        font-size: 12px;
      }

      .hoje {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        text-align: right;
        font-size: 24px;
      }
    }
  }
`;

export const SliderShow2 = styled.div`
  background-color: #edefbec2;

  border-radius: 10px;

  img {
    width: 1200px;
    height: 423px;

    opacity: 0.4;
  }

  @media (max-width: 768px) {
    background-color: #edefbec2;

    border-radius: 10px;

    img {
      width: 360px;
      height: 300px;

      opacity: 0.4;
    }
  }
`;

export const SliderShow3 = styled.div`
  background-color: #aa0202c2;

  border-radius: 10px;

  img {
    width: 1200px;
    height: 423px;

    opacity: 0.4;
  }

  @media (max-width: 768px) {
    background-color: #aa0202c2;

    border-radius: 10px;

    img {
      width: 360px;
      height: 300px;

      opacity: 0.4;
    }
  }
`;
