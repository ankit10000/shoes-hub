import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-transparent nav-upper pt-3">
      <Container>
        <div className="d-flex m-auto text-white div-flex">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link className='custom-margin-r nav-custom-css'><Link to={'/'}>Dashboard</Link></Nav.Link>
          </Navbar.Collapse>
          <Navbar.Brand href="/" className='custom-margin-r nav-custom-css brand-nav'>Shoes-Hub</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav.Link href="#link" className='custom-margin-r nav-custom-css '>About</Nav.Link>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggle-nav' />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;