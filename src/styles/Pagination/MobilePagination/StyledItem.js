import styled from 'styled-components';

const StyledItem = styled.div`
  padding: 0.5rem;
  text-align: center;
  width: 2.5rem;
  user-select: none;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;

  ${({ isSelected }) =>
    isSelected &&
    `
    border-radius: 0.5rem;
		background-color: #f27;
		outline: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
  `}
`;

export default StyledItem;
