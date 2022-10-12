import { blue } from '@mui/material/colors';
import { Container, Menu, Segment ,Button} from 'semantic-ui-react';
import SignedIn from './SignedIn';

const  Navi=()=> {
  return (

    <Segment inverted style={{backgroundColor:"White",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      <Container>
        <Menu inverted secondary >
        <Container>
        <Menu.Item style={{color:"black",fontWeight:"bold"}}
            name='home'

          />
          <Menu.Item style={{color:"black",fontWeight:"bold"}}
            name='messages'

          />
          <Menu.Item style={{color:"black",fontWeight:"bold"}}
            name='friends'

          />
        </Container>
          <Menu.Item>
          <Button primary style={{backgroundColor:"#00A9C1",color:"white",marginRight:10}}>Giriş Yap</Button>
          <Button primary style={{backgroundColor:"#00A9C1",color:"white"}}>Kayıt Ol</Button>
          </Menu.Item>
          <SignedIn></SignedIn>

        </Menu>

      </Container>

    </Segment>
  
  )
}
export default Navi;
