import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
    background-color: #d11507;
    border-top: solid 10px #fff;
    border-bottom: solid 10px #000;
`

export const NavBrand = styled.img`
    max-width: 7em;
    &:hover{
        opacity: 0.70;
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