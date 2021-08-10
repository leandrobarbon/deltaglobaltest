import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 56px 0 55px;
`;

export const LogoMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 168.9px;
  height: 56.12px;
`;

export const Menu = styled.ul`
  display: flex;

  a {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;

    margin-left: 50px;
  }
`;

export const Icon = styled.p`
  display: flex;
  right: 116px;
`;
