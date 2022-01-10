import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
            backgroundImg="model-s.jpg"
            title="Model S"
            disc="Order Online For Touchless Delivery"
            lb="CUSTIOM SIZE"
            rb="EXISTING INVENVORY"
            
            />
            <Section
              title="Model Y"
              disc="Order Online For Touchless Delivery"
              lb="CUSTIOM SIZE"
              rb="EXISTING INVENVORY"
               backgroundImg="model-y.jpg"
            />
            <Section
              title="Model 3"
              disc="Order Online For Touchless Delivery"
              lb="CUSTIOM SIZE"
              rb="EXISTING INVENVORY"
               backgroundImg="model-3.jpg"
            />
            <Section
              title="Model X"
              disc="Order Online For Touchless Delivery"
              lb="CUSTIOM SIZE"
              rb="EXISTING INVENVORY"
               backgroundImg="model-x.jpg"
            />
             <Section
              title="Solar Panels"
              disc="Lowest Cost Panels In America"
              lb="ORDER NOW"
              rb="LEARN MORE"
               backgroundImg="solar-panel.jpg"
            />
            <Section
              title="Solar Roof"
              disc="Produce Clean Energy From Your Roof"
              lb="ORDER NOW"
              rb="LEARN MORE"
               backgroundImg="solar-roof.jpg"
            />
            <Section
              title="Accessories"
              lb="Shop Now"
              // rb="EXISTING INVENVORY"
               backgroundImg="accessories.jpg"
            />
        </Container>
    )
}

export default Home
const Container=styled.div`

`