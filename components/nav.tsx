import Image from 'next/image'
import styled from 'styled-components'

import logo from '../assets/Mikano.png'
import avatar from '../assets/racheal.png'

const LogoHolder = styled.div`
  height: 50px;
  width: 100px;

  div{
    height: 100%;
  }

  @media screen and (max-width: 790px){
    height: 40px;
    width: 80px;
  }

`

const AvatarWrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  
  div{
    height: 100%;
    border-radius: 100%;
  }

  @media screen and (max-width: 790px){
    height: 40px;
    width: 40px;
  }
`


const NavWrapper = styled.div`
display: flex;
justify-content: space-between;
/* box-shadow: 0.2px 0.2px 0.6px black; */
background: #e7f5eb;
width: 100%;
padding: 1rem 2rem;
margin: 0px;
z-index: 2;

h3{
  color: red;
  font-size: clamp(13px, 5.5vw, 15px);
}

p{
  color: grey;
  font-size: 12px;
}

`

const NavBar = () => {
  return (
    <NavWrapper>
      <LogoHolder>
        <Image src={logo} alt="mikano"/>
      </LogoHolder>
      <div></div>
      <AvatarWrapper>
        <Image src={avatar} alt='racheal'/>
      </AvatarWrapper>
    </NavWrapper>
  )
}

export default NavBar;
