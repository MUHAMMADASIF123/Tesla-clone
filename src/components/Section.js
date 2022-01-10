import React from 'react'
// import { StyledProps } from "styled-components";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({ title, disc ,lb ,rb ,backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
       <Fade bottom>
        
      <ItemText>
        <h1>{title}</h1>
        <p>{disc}</p>
      </ItemText>
      </Fade>
      <Buttons>
      <Fade bottom>
  
        <ButtonGroup>
          <LeftButton>{lb}</LeftButton>
          { rb &&
          <RightButton>{rb}</RightButton> 
          }
          
        </ButtonGroup>
        </Fade>
      </Buttons>
      <DownArrow src="/images/down-arrow.svg" />
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center:
width:100vw;
height:100vh;
background-size:cover;
background-repeat:no-repeat;
background-position:center;
// background-image:url('/images/model-s.jpg')
background-image: ${props => `url("/images/${props.bgImage}")`}


`;
const ItemText = styled.div`
padding-top:15vh;
// text-align:center:
line-hieght:10px;
`;
const ButtonGroup = styled.div`
  display: flex;
  // margin-bottom: -20px;
  margin-left:500px;
  margin-left: 417px;
  // margin-top:40px;
  margin-left: 10px;
  margin-top: -20px;
  @media (max-width:700px)
  {
    flex-direction:column;
  }
}
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  // background-color:black;
  hight: 40px;
  width: 256px;
  color: white;
  display: flex;
  jsutify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0, 85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  padding: 12px;
  margin-top: 375px;
  // flex-direction:column;
`
const RightButton = styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
// flex-direction:column;
@media (max-width:700px)
{
  margin-top:10px;
}
`
const DownArrow = styled.img`
// margin-top:10px;
animation:animateDown infinite 1.5s;
height: 40px;
width: 30px;
margin: 0 auto;


`;
const Buttons = styled.div`
// jsutify-content: center;
// align-items: center;
display:flex;
// flex-direction:column;
`;
