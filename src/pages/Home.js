import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    
    <Container
    className="gradient-background"
    fluid
    style={{
      background: 'linear-gradient(to bottom,#2096ff,#05ffa3)', 
      minHeight: '100vh', // Adjust this to make the gradient cover the entire viewport
    }}
  >
    {/* Your content goes here */}
    <NavBar/>
  </Container>
  )
}
