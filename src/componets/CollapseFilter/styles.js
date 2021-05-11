import styled from 'styled-components';

export const Collapse = styled.div`
  max-height: ${(props)=>props.maxHeight};
  overflow: hidden;
  transition: 0.4s max-height;
`

export const InnerCollapsed = styled.div`
  background-color: white;
  overflow:auto;
`