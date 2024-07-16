// AidList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import AidItem from './AidItem';
import { fetchAids } from '../actions/aidsActions';

function AidList() {
    const aids = useSelector(state => state.aids.aids);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAids());
    }, [dispatch]);

    return (
        <Row xs={1} md={2} className="g-4">
            {aids.map((aid, index) => (
                <Col key={index}>
                    <AidItem aid={aid} />
                </Col>
            ))}
        </Row>
    );
}

export default AidList;
