import styled from 'styled-components';
import { Title } from '../Styles/title'

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`

export const MenuItem = styled.div`
  height: 150px;
  padding: 10px;
  font-size: 24px;
  background-image: ${({img}) => `url(${img});`}
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 2px 4px 1px lightgrey;
  filter: contrast(75%);
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.2s;
  margin-top: 3px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 6px 10px 4px lightgrey;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 3px;
  }
`
export const MenuItemLabel = styled(Title)`
  position: absolute;
  padding: 5px;
  background: rgba(255, 255, 255, 0.7);
`
