import styled from 'styled-components/macro'

export const Brands = styled.div`
align-items: center;
  display: flex;
  flex-direction: row;
  height: 20%;
  justify-content: flex-end;
  width: 50%;
  @media only screen and (max-width: 768px) {
        width:100%;
        justify-content:center;
        align-items:center;
        padding:1rem;
  }
`;

export const Sponsor = styled.img`
    width:20%;
    margin-left: 5%;
    align-self:flex-end;
    filter: grayscale(100%);

    @media only screen and (max-width: 768px) {
        width:20%;
    }
`;

export const Author = styled.div`
    display:flex;
    justify-content: flex-start;
    width:50%;
    align-self:flex-end;
    background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
    font-weight:bolder;

    @media only screen and (max-width: 768px) {
      display:none;
     }
`;

export const Container = styled.div`
    display:flex;
    align-items:center;
    padding: 2%;
    box-sizing:border-box;
    border-top: 1px solid lightgray;

    @media only screen and (max-width: 768px) {
       flex-direction:column
    }
`;