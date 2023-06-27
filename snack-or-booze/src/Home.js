import React, { useContext } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import Counter from "./Counter";
import SnacksDrinksContext from "./SnacksDrinksContext";

function Home() {
  const { snacks, drinks } = useContext(SnacksDrinksContext);
  
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle tag='h3'>
              Welcome to Silicon Valley's premier dive cafe!
          </CardTitle>
        </CardBody>
      </Card>
      <Counter snackCount={snacks.length} drinkCount={drinks.length} />
    </section>
  );
}

export default Home;
