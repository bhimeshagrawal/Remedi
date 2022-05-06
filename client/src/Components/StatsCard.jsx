import React from 'react'
import { Card } from 'react-bootstrap'
import "../Styles/StatsCard.css"

export default function (props) {
    return (<>
        <div className="StatsCardcontainer ">
            <Card style={{ width: '15rem', height: '15rem' }}>
                <Card.Body className='statsCardbody p-5'>
                    <Card.Title className='statsCardTitle text-center'>{props.statsData.jnf}</Card.Title>
                    <hr style={{ color: 'black' }} />
                    <Card.Subtitle className="mb-2 text-muted text-center statsCardText">JNF Filled</Card.Subtitle>

                </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height: '15rem' }}>
                <Card.Body className='statsCardbody p-5'>
                    <Card.Title className='statsCardTitle text-center'>{props.statsData.inf}</Card.Title>
                    <hr style={{ color: 'black' }} />
                    <Card.Subtitle className="mb-2 text-muted text-center statsCardText">INF Filled</Card.Subtitle>

                </Card.Body>
            </Card>
            <Card style={{ width: '15rem', height: '15rem' }}>
                <Card.Body className='statsCardbody p-5'>
                    <Card.Title className='statsCardTitle text-center'>15 LPA</Card.Title>
                    <hr style={{ color: 'black' }} />
                    <Card.Subtitle className="mb-2 text-muted text-center statsCardText">Max ctc</Card.Subtitle>

                </Card.Body>
            </Card>
        </div>
    </>
    )
}
