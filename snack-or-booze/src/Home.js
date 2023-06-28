import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnacksDrinksContext from "./SnacksDrinksContext";

// This is what the Home page will display
function Home() {
  const { snacks, drinks } = useContext(SnacksDrinksContext);
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle tag='h3'>
              Welcome to Silicon Valley's premier dive cafe!
          </CardTitle>
          <CardText tag="h5">
            Menu items:
            <div>Snacks: {snacks.length}</div> 
            <div>Drinks: {drinks.length}</div>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
