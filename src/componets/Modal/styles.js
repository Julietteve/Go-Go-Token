import styled from 'styled-components/macro';

export const ModalMain = styled.div`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

export const CloseButton = styled.button`

`;

export const ModalDisplay = styled.div`
  position: fixed;
  display: ${(props)=>props.display};
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;