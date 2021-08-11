import Image from 'next/image'
import styled from 'styled-components'

import metric from '../assets/metric.png'
import torque from '../assets/torque.png'
import Procedures from './sop'

const MetricHolder = styled.div`

@media screen and (max-width: 790px){
  margin: auto;
  width: 100%;
  text-align: center;
}
`

const TorqueHolder = styled.div`
@media screen and (max-width: 790px){
  margin: auto;
  width: 100%;
  text-align: center;
}
`

const MainWrapper = styled.div`
padding: 1.5rem 3rem;
position: relative;

h2{
  font-size: clamp(20px, 5.5vw, 27px);
  margin-bottom: 3px;
  font-weight: 500;
  color: #303531;
}

p{
  color: grey;
  font-size: 14px;
}

@media screen and (max-width: 790px){
  padding: 1rem;
}
`

const MetricWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 2rem;

@media screen and (max-width: 790px){
  display: block;
  justify-self: center;
}
`

const TorqueWrapper = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 790px){
  display: block;
  justify-self: center;
}

`
const MetricContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 55%;

@media screen and (max-width: 790px){
  width: 100%;
}

`

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 45%;

@media screen and (max-width: 790px){
  width: 100%;
}
`

const MainSection = () => {
  return (
    <>
      <Procedures/>
      <MainWrapper>
        <MetricWrapper>
          <MetricContent>
            <h2>Common Bolt and Spanner Size Table</h2>
            <p>
            here’s a handy table for bolts and nuts with basic dimensions and spanner sizes etc, it covers ISO standard metric fasteners, spanner sizes may be slightly different for other standards such as DIN.
            </p>
          </MetricContent>
          <MetricHolder>
            <Image src={metric} alt="metric"/>
          </MetricHolder>
        </MetricWrapper>
        <TorqueWrapper>
          <Content>
            <h2>Bolt Torque Specifications</h2>
            <p>
             here’s a handy table for torque values with respect to the size of bolt used  for fastening.
            </p>
          </Content>
          <TorqueHolder>
            <Image src={torque} alt='torque'/>
          </TorqueHolder>
        </TorqueWrapper>
      </MainWrapper>

    </>
  )
}

export default MainSection;
