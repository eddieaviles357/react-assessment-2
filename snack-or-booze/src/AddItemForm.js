import React, { useContext, useState } from "react";
import SnacksDrinksContext from "./SnacksDrinksContext";
import { useHistory } from "react-router-dom"
import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import "./AddItemForm.css"

export default function AddItemForm() {
    // extract addItem function from our context
    const { addItem } = useContext(SnacksDrinksContext);

    const [form, setForm] = useState({
        type: "snacks",
        name: "",
        description: "",
        recipe: "",
        serve: ""
      });
    // used to reroute user to home page / when we add item
    const history = useHistory();

    const handleChange = evt => {
        const { name, value } = evt.target;
        setForm(val => ({
          ...val,
          [name]: value
        }));
      }
    
      const handleSubmit = evt => {
        evt.preventDefault();
        const { type, name, description, recipe, serve } = form;
        // cannot continue if fields are null
        if(!type || !name || !description || !recipe || !serve) {
            alert("Please enter field");
            return;
        }
        // fields are valid lets add the item
        addItem({ type, name, description, recipe, serve });
        // route user to home page
        history.push("/");
      }
    // desctructure fields so we can use on our form values
    const { type, name, description, recipe, serve } = form;
    return (
    <div className="addItemForm">
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="type">
                        Type
                        </Label>
                        <Input 
                            id="type" 
                            name="type"
                            className="mb-3" 
                            type="select"
                            value={type}
                            onChange={handleChange}
                        >
                            <option>drinks</option>
                            <option>snacks</option>
                        </Input>
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>

                </Row>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            value={description}
                            onChange={handleChange}
                        />
                    </FormGroup>
                <Row>

                <Col md={12}>
                    <FormGroup>
                        <Label for="recipe">Recipe</Label>
                        <Input
                            type="textarea"
                            name="recipe"
                            id="recipe"
                            value={recipe}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>

                <Col md={12}>
                    <FormGroup>
                        <Label for="serve">Serve</Label>
                        <Input
                            type="textarea"
                            name="serve"
                            id="serve"
                            value={serve}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
            </Row>

            <Button className="w-100">Add</Button>

        </Form>
    </div>
    )
}