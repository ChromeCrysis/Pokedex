import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Sprite = styled.img`
  width: 8em;
  heigth: 8em;
  display: none;
  &:hover{
    width: 12em;
    heigth: 12em;
  }
`
export const Card = styled.div`
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;

  #PokeIcon{ 
    max-width: 2em;
  }

`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`