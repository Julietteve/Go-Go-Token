import styled from "styled-components/macro";

export const CardBox = styled.div`
  width:100%;
  display: flex;
  flex-direction: 'row';
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
  padding-bottom:2%;
`;

export const PaginationContainer = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    padding: 2%;
  }
  ul li {
    margin: 2%;
    list-style: none;
    display: inline;
  }
  a {
    font-size: 1.2em;
    text-decoration: none;
    color: #282723;
    font-family: "Old Standard TT", serif;
    padding: 2%;
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    transform: scale(1.2);
    color: #7a786a;
  }
`;