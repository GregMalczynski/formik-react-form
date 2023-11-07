import styled from 'styled-components'
import MainForm from './components/MainForm';

const App = () => {

  return(
    <Wrapper>
      <MainForm />
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FDFDFD;
`