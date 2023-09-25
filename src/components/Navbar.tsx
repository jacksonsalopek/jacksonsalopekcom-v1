import { styled } from "solid-styled-components"
import { Font } from '@/util'
import type { IconTypes } from "solid-icons"

export const NavbarContainer = styled("nav")`
  ${Font.regular()}
  height: 64px;
`

export const NavbarLeft = styled("div")`
  display: flex;
  align-items: center;
`

export const NavbarRight = styled("div")`
  display: flex;
  align-items: center;
`

export const NavbarTitle = styled("span")`
  ${Font.semibold({ size: "36px" })}
`

export const NavbarLink = styled("a")`
  ${Font.medium({ size: "24px" })}
  color: #000;
  text-decoration: none;
  margin-right: 16px;
  &:hover {
    text-decoration: underline;
  }
`

export const NavbarIconLink = styled("a")`
  color: #fff;
  background: #000;
  text-decoration: none;
  margin-right: 16px;
  &:hover {
    background: #333;
  }
`

export interface INavbarItem {
  text?: string
  icon?: IconTypes
  link: string
}

export interface INavbarProps {
  title: string
  items: INavbarItem[]
}

export default function Navbar({ title, items }: INavbarProps) {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <NavbarTitle>{title}</NavbarTitle>
      </NavbarLeft>
      <NavbarRight>
        {items.filter(item => item.text).map((item) => (
          <NavbarLink href={item.link}>
            {item.text}
          </NavbarLink>
        ))}
        {items.filter(item => item.icon).map((item) => (
          <NavbarIconLink>
            {item.icon?.({ size: 24 })}
          </NavbarIconLink>
        ))}
      </NavbarRight>
    </NavbarContainer>
  )
}
