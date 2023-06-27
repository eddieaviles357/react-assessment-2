import React from "react";
import {
    Row,
    Col,
    Card,
    CardTitle,
    CardText
} from "reactstrap";

export default function Counter({ snackCount, drinkCount }) {
    return (
    <Row className="text-center">
        <Col sm="6">
            <Card body className="border">
            <CardTitle tag="h4">
                Snacks Available
            </CardTitle>
            <CardText tag="h5">
                {snackCount}
            </CardText>
            </Card>
        </Col>
        <Col sm="6">
            <Card body className="border">
            <CardTitle tag="h4">
                Drinks Available
            </CardTitle>
            <CardText tag="h5">
                {drinkCount}
            </CardText>
            </Card>
        </Col>
    </Row>
    )
}