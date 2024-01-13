import styled, { keyframes } from 'styled-components'

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 87px solid black;
  `

const Text = styled.h1`
color: ${props => props.theme.textColor}
  `
const CenterWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background-color:${props => props.theme.backgroundColor};

${Triangle}:hover {
  background-color:blue;
}
${Text}:hover {
  color: white;
}
`
const animation = keyframes`
  from {
    color: tomato;
    background-color:tomato;
  };
  to {
    color: teal;
  };
`

const Square = styled.div`
height: 100px;
width: 100px;
background-color: ${(props) => props.bgColor};
animation: ${animation} 0.5s infinite;
`
const Circle = styled(Square)`
border-radius:100px;
&:hover {
  background-color: white;
}
`


const Login = styled.input``
const Button = styled.div`
animation: ${animation} 0.5s infinite;`

const Button2 = styled.button`
animation: ${animation} 0.5s infinite;`
const Input = styled.input.attrs({ required: true, maxLength: 10 })`
background-color: ${(props) => props.bgColor};
color: white;
`


function App() {
  return (
    <>
      <CenterWrapper>
        <Text>Hello world</Text>
        <Circle bgColor="yellow"></Circle>
        <Triangle bgColor="blue"></Triangle>
        {<Square bgColor="red"></Square>}
        <Login></Login>
        <Button as="a" href='/'>확인</Button>
        <Button2>색깔</Button2>
        <Input bgColor="blue"></Input>
        <Input bgColor="purple"></Input>
        <Input bgColor="orange"></Input>
      </CenterWrapper>
    </>
  );
}

export default App;