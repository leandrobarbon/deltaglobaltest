import styled from "styled-components";

export const Navbar = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 56px 0 56px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;

  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: 2rem;

    font-family: "Poppins", sans-serif;
  }

  .nav-links {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 3px solid transparent;
  }
  .fa-code {
    margin-left: 1rem;
  }

  .nav-item {
    line-height: 40px;
    margin-right: 1rem;
  }

  .nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }

  .nav-search {
    position: absolute;
    right: 19%;
  }

  .nav-icon {
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .nav-logo {
      margin-top: -60px;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 80px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
      color: #fff;
    }

    .nav-menu.active {
      background: #094f7c;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #10264e;
    }

    .nav-search {
      display: none;
    }
  }
`;
