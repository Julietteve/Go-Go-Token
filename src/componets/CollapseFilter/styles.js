import styled from 'styled-components';

export const Collapse = styled.div`
  overflow: hidden;
  transition: all 0.3s ease-out;
  max-height: ${(props)=>props.maxHeight};
  div{
    overflow:auto;
  }
`