import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap"; // Import required components from Reactstrap
import DropDown from "./DropDown";
import Drop from "./Drop";
const countries = ["United States", "India", "Canada", "Australia", "Germany"];
const cities = ["New York", "Mumbai", "Toronto", "Sydney", "Berlin"];
const states = [
  "New York",
  "Maharashtra",
  "Ontario",
  "New South Wales",
  "Berlin State",
];

function SignUp() {
  return (
    <div className=" w-[80%] m-auto pt-10 ">
      <h1>Fill The Details</h1>
      <Form className="mt-3">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">
                Full Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your Full Name"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phno">
                Mobile No. <span className="text-red-600">*</span>
              </Label>
              <div className="flex">
                <DropDown />
                <Input
                  id="phno"
                  name="text"
                  placeholder="Enter your Mobile Number"
                  type="text"
                />
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleAddress">
                Address Line 1<span className="text-red-600">*</span>
              </Label>
              <Input
                id="exampleAddress"
                name="address"
                placeholder="Enter your Address Line 1"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleAddress2">
                Address Line 2<span className="text-red-600">*</span>
              </Label>
              <Input
                id="exampleAddress2"
                name="address2"
                placeholder="Enter your Address Line 2"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="pin">
                Pincode <span className="text-red-600">*</span>
              </Label>
              <Input id="pin" name="pin" placeholder="Enter your PinCode" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <Label for="pin">
              Countries <span className="text-red-600">*</span>
            </Label>
            <Drop namesVal={countries} labelVal={"Country"} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Label for="pin">
              State <span className="text-red-600">*</span>
            </Label>
            <Drop namesVal={states} labelVal={"State"} />
          </Col>
          <Col md={6}>
            <Label for="pin">
              City <span className="text-red-600">*</span>
            </Label>
            <Drop namesVal={cities} labelVal={"City"} />
          </Col>
        </Row>
        <Row>
          <div className="h-16 w-full flex justify-between items-center ">
            
              <button  className="rounded-3xl h-14 w-[100px] bg-blue-700 text-white text-lg">Save</button>
              <button  className="rounded-3xl h-14 w-[100px] bg-white text-blue-700 border-2 border-blue-700 text-lg">Next</button>
           
          </div>
        </Row>
      </Form>
    </div>
  );
}

export default SignUp;
