import Stack from 'react-bootstrap/Stack';
import { Row, Col, Card } from 'react-bootstrap';
import test_img from '../images/pixelman_still.png';

function AboutUs() {
    return (
        <div className="container">
            <Stack gap={3} className="mx-5 border border-danger p-4">
                <Row className="mb-4">
                    <Col>
                        <h1 className="display-4">Our Goal</h1>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={6}>
                        <p className="lead">
                            Here at Bulk-Like-A-Beast, we encourage all to start their fitness journey. Whether you
                            are just getting started or already in the fitness game, our mission is to assist you in
                            achieving your dream physique.
                        </p>
                    </Col>
                    <Col md={6}>
                        {/* Add your content for the founders here */}
                    </Col>
                </Row>
            </Stack>
        </div>
    );
}

export default AboutUs;
