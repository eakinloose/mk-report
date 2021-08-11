import Image from 'next/image'
import styled from 'styled-components'
import logo from '../assets/Mikano.png'

const LogoHolder = styled.div`
  height: 65px;
  width: 120px;
  margin: auto;

  div{
    height: 100%;
  }

`
const FooterWrapper = styled.div`
text-align: center;
background: #e7f5eb;
padding: 2rem;
margin: 0px;
width: 100%;

h3{
  color: red;
  font-size: clamp(13px, 5.5vw, 15px);
  font-weight: 500;
}

p{
  font-size: 12px;
}

`

const Footer = () => {
  return (
    <FooterWrapper>
      <LogoHolder>
        <Image src={logo} alt="mikano"/>
      </LogoHolder>
      <h3>This webpage was built as a report extension</h3>
      <h3>using information or sharing this webpage is not allowed</h3>
      <p>&copy; by Akinloose Emmanuel</p>
    </FooterWrapper>
  )
}

export default Footer;
