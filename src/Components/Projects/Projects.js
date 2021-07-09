import React from "react";
import Carousel from "react-elastic-carousel";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Item from "./Item";
import { Button } from 'reactstrap';
import "./Projects.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function Carousels() {

  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1> */}
      <div className="Caro">
        <Carousel breakPoints={breakPoints}>
          <Item >
            <Card>
              <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/images_todo.png`} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h7">Task Manager</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  <div className="tooltip">A React Website
                    <span className="tooltiptext">A react app that lets you maintain all tasks at one place.</span>
                  </div>
                </CardSubtitle>
                <Button className="butn"><a href="https://github.com/Savitri-Khyadad/task-manager">Open</a></Button>
              </CardBody>
            </Card>
          </Item>
          <Item>
            <Card>
              <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/babysworld.jpg`} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h7">Application for Baby Products</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  <div class="tooltip">An Angular Website
                    <span class="tooltiptext">A full stack web application using MEAN stack for baby products.</span>
                  </div>
                </CardSubtitle>
                <Button className="butn"><a href="https://github.com/Savitri-Khyadad/ecomm-baby-products">Open</a></Button>
              </CardBody>
            </Card>
          </Item>
          <Item>
            <Card>
              <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/weather.jpg`} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h7">Current Weather App</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  <div class="tooltip">A React website
                    <span class="tooltiptext">An app that shows the current weather of a city entered.</span>
                  </div>
                </CardSubtitle>
                <Button className="butn">Open</Button>
              </CardBody>
            </Card>
          </Item>
          <Item>
            <Card>
              <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/images_todo.png`} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h6">Project 4</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  <div class="tooltip">A react website
                    <span class="tooltiptext">Tooltip text</span>
                  </div>
                </CardSubtitle>
                <Button className="butn">Open</Button>
              </CardBody>
            </Card>
          </Item>
          <Item>
            <Card>
              <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/images_todo.png`} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h6">Project 5</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  <div class="tooltip">A react website
                    <span class="tooltiptext">Tooltip text</span>
                  </div>
                </CardSubtitle>
                <Button className="butn">Open</Button>
              </CardBody>
            </Card>
          </Item>
        </Carousel>
      </div>
    </>
  );
}
export default Carousels;