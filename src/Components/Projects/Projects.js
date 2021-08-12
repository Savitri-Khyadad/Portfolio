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

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

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
                <Button className="butn" onClick={() => openInNewTab('https://github.com/Savitri-Khyadad/task-manager')}>Open</Button>
              </CardBody>
            </Card>
          </Item>
          <Item>
            <Card>
              <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/babysworld.jpg`} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h7">Application for Baby Products</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  <div className="tooltip">An Angular Website
                    <span className="tooltiptext">A full stack web application using MEAN stack for baby products.</span>
                  </div>
                </CardSubtitle>
                <Button className="butn" onClick={() => openInNewTab('https://github.com/Savitri-Khyadad/ecomm-baby-products')}>Open</Button>
              </CardBody>
            </Card>
          </Item>
          <Item>
            <Card>
              <CardImg top width="100%" src={`${process.env.PUBLIC_URL}/weather.jpg`} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h7">Current Weather App</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  <div className="tooltip">A React website
                    <span className="tooltiptext">An app that shows the current weather of a city entered.</span>
                  </div>
                </CardSubtitle>
                <Button className="butn" onClick={() => openInNewTab('https://github.com/Savitri-Khyadad/Weather-app')}>Open</Button>
              </CardBody>
            </Card>
          </Item>
          <Item>
            <Card>
              <CardImg top width="93%" src={`${process.env.PUBLIC_URL}/machine_learning.jpeg`} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h7" width="100%">Maize Disease Classification</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  <div className="tooltip">An Android Application
                    <span className="tooltiptext">An android application using Keras that detects and classifies the disease in a maize leaf.</span>
                  </div>
                </CardSubtitle>
                <Button className="butn" onClick={() => openInNewTab('https://github.com/Savitri-Khyadad/Maize-Disease-Classification')}>Open</Button>
              </CardBody>
            </Card>
          </Item>
          <Item>
            <Card>
              <CardImg top width="90%" src={`${process.env.PUBLIC_URL}/burger.jpeg`} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h7">Burger Builder App</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  <div className="tooltip">A react website
                    <span className="tooltiptext">A react app to build and order customized burgers!.</span>
                  </div>
                </CardSubtitle>
                <Button className="butn" onClick={() => openInNewTab('https://github.com/Savitri-Khyadad/Burger-builder-app')}>Open</Button>
              </CardBody>
            </Card>
          </Item>
        </Carousel>
      </div>
    </>
  );
}
export default Carousels;