// AidPage.js
import React, { useEffect } from 'react';
import AidForm from '../components/AidForm';
import AidList from '../components/AidList';
import Statistics from '../components/Statistics';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAids } from '../actions/aidsActions';

function AidPage() {
    const aids = useSelector(state => state.aids.aids);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAids());
    }, [dispatch]);

    return (
        <Container className="mt-5">
            <Row className="mb-4">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h1>Data Bantuan Bencana</h1>
                        <AidForm />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <AidList aids={aids} />
                </Col>
                <Col md={4}>
                    <Statistics aids={aids} />
                </Col>
            </Row>
        </Container>
    );
}

export default AidPage;
