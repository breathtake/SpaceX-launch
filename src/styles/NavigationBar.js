import styled from 'styled-components';

const StyledNavButton = styled.button`
  padding: 0.25rem 2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: 0.1rem solid white;
  font-size: 1.25rem;
  color: ${({ isActive }) => (isActive ? '#050525' : 'white')};
  background-color: ${({ isActive }) => (isActive ? 'white' : 'transparent')};
  :nth-child(1) {
    border-radius: 0.3rem 0 0 0.3rem;
    border-right: 0.05rem solid white;
  }
  :nth-last-child(1) {
    border-radius: 0 0.3rem 0.3rem 0;
    border-left: 0.05rem solid white;
  }
`;

const NavigationBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export { NavigationBar, StyledNavButton };
