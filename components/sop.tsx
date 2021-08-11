import styled from 'styled-components'




const Wrapper = styled.div`
width: 100%;
padding: 1rem 3rem;
margin: 0px;

h2{
  font-size: clamp(20px, 5.5vw, 27px);
  margin-bottom: 3px;
  font-weight: 500;
  text-align: center;
}

p{
  font-size: 14px;
}

@media screen and (max-width: 790px){
  padding: 1rem;
}
`

const procedures = () => {
  return (
    <Wrapper>
      <h2>Comprehensive standard operating procedure of a Perkins engine with 350KVA capacity</h2>
      <h3>Steps</h3>
      <ul>
        <li><p>
        Position base which engine is to be mounted on   
      </p></li>
      <li><p>
        Place mounting rubbers of size 45 on the base (three on each sides of the tank to damp vibration of the engine while engine is running)  
      </p></li>
      <li><p>
        Two units of M16 by 40 bolts is used to hold each of the mounting rubbers to the base
      </p></li>
      <li><p>
        The crossbars are placed across on the rubber mountings (The function of the crossbar is to provide clearance between the engine and the base which the engine is mounted on). There are three crossbars in this type of engine assembly.
      </p></li>
      <li><p>
        One unit of M16 by 40 is used hold each crossbar to the mounting rubber   
      </p></li>
      <li><p>
        Hoist and place the prime mover (engine) on the crossbars using M16 by 40 to hold them together
      </p></li>
      <li><p>
        Hoist Alternator and couple both surrounding and inner bolt (M11 by 40 and M12 by 40) of the Alternator to the flywheel of the engine engine. The rotation of crankshaft of the engine is transmitted to the alternator by coupling the inner bolts.<br/><br/>
        The inner bolt is fastened using the torque wrench (a tool used to apply a specific torque to a fastener) which is set to 96Nm<br/><br/>
        The alternator is held on to the Crossbar using M24 by 80 bolt
      </p></li>
      <li><p>
        Hoist and fasten the Radiator to the assemblage using M12 by 40   
      </p></li>
      <li><p>
        Fit pipes for water and air  
      </p></li>
      <li><p>
        Fit radiator net  
      </p></li>
      <li><p>
        Replace neccesary accesories such as the sump bolt which is replaced with a drainage valve  
      </p></li>
      <li><p>
        Add oil of 41 litres  
      </p></li>
      <li><p>
        Fill radiator with coolant   
      </p></li>
      <li><p>
        Carry out neccesary adjustment then properly fasten all bolts holding the engine to the base.   
      </p></li>      
      </ul>
    </Wrapper>
  )
}

export default procedures;
