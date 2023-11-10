import styled from 'styled-components';

function getHeight({ axis, size }) {
  return axis === 'horizontal' ? "1px" : size;
}

function getWidth({ axis, size }) {
  return axis === 'vertical' ? "1px" : size;
}

const Spacer = styled.span`
  display: block;
  width: ${getWidth};
  min-width: ${getWidth};
  height: ${getHeight};
  min-height: ${getHeight};
`;

export default Spacer;
