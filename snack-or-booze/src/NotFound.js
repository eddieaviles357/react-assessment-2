import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";

export default function NotFound() {
    return (
        <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            404
          </CardTitle>
          <CardText>
            Page Not Found!
          </CardText>
        </CardBody>
      </Card>
    )
}