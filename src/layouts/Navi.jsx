import { Container, Menu, Segment ,Button} from 'semantic-ui-react';
import SignedIn from './SignedIn';

const  Navi=()=> {
  return (

    <Segment inverted>
      <Container>
        <Menu inverted secondary >
        <Container>
        <Menu.Item
            name='home'

          />
          <Menu.Item
            name='messages'

          />
          <Menu.Item
            name='friends'

          />
        </Container>
          <Menu.Item>
          <Button primary style={{marginRight:10}}>Giriş Yap</Button>
          <Button primary>Kayıt Ol</Button>
          </Menu.Item>
          <SignedIn></SignedIn>

        </Menu>

      </Container>

    </Segment>
  )
}
export default Navi;
