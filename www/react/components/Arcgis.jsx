import React from 'react';
import styled from 'styled-components';
import { Map } from 'react-arcgis';

// Styles
const Container = styled.div`
    height: 400px;
    width: 100%;
    margin: 0px;
    padding: 0px;
    background-color: rgb(236, 236, 236);
    display: inline-block;
`;
const MapView = styled(Map)`
  width: 100%;
  height: 400px;
`;

// React Component
export default class Sample extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Its more performate to bind your methods in the constructor
    this.myCustomMethod = this.myCustomMethod.bind(this);

    // Get store state
    // Subscribe to the store and update state
  }

/*
  // React Methods
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
*/


  // Custom method
  myCustomMethod() {
    console.log('. you clicked me');
    // store.dispatch({
    //   type: 'UPDATE_SOMETHING',
    //   payload: Date(),
    // });
  }

  render() {
    return (
      <Container>
       <MapView 
          mapProperties={{ basemap: 'satellite' }}
          viewProperties={{
            center: [-122.4443, 45.2529],
            zoom: 6
          }}
       />
      </Container>);
  }
}

