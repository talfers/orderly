import styled from 'styled-components';
import { Title } from '../Styles/title'

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`

export const MenuItem = styled(Title)`
  height: 150px;
  padding: 10px;
  font-size: 24px;
  background-image: ${({img}) => `url(${img});`}
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 2px 10px 4px lightgrey;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
export const MenuLabel = styled.div`
  position: absolute;
  padding: 5px;
  background: rgba(255, 255, 255, 0.7);
`
