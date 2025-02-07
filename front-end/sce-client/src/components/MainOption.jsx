import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MainOption({ title, image, description, page}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${page}`)
    }

    return (
        <Card
            style={{
                width: '28.5rem',
                alignItems: 'center',
                border: '0px',
                margin: 'auto'
            }}
            onClick={handleClick}>
            <Card.Img src={image} alt={description} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default MainOption;