import Nav from '../components/Navbar.jsx';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Welcome() {

    return (
	    
	<section>
	    <Nav />
	    <h1 class="text-center">
		Welcome to Gym Starter Bulk like a Beast!
	    </h1>

      {['Quote of the Day'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{`${placement}`}</Popover.Header>
              <Popover.Body>
                <strong>This is where the quote of the day will generate.</strong>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">{placement}</Button>
        </OverlayTrigger>
      ))}	    
		</section>
    );
}

export default Welcome;
