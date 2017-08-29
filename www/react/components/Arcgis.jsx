import React from 'react';
import styled from 'styled-components';
import { Map, Widgets, Layers, Graphic, Symbols, Geometry, Popup  } from 'react-arcgis';

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


// Widgets
const SearchWidget = Widgets.Search;
const BasemapGallery = Widgets.BasemapGallery;
const Locate = Widgets.Locate;


// React Component
export default class Sample extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Get store state
    // Subscribe to the store and update state
    this.state = {
        viewProperties: {
          center: [-122.4443, 45.2529],
        }
    };

    // Its more performate to bind your methods in the constructor
    this.mapClick = this.mapClick.bind(this);
  }

  mapClick() {
    console.log('... you just clicked the map!');
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
            viewProperties={this.state.viewProperties}
            onLoad={this.handleMapLoad}
            onDrag={(e) => { 
              console.log('...map dragged');
            }}
            onMouseWheel={(e) => { 
              e.stopPropagation(); // disable mouse wheel
            }}
            onClick={this.mapClick}
        >
            <SearchWidget position="top-right" />
            <Locate position="top-left" />
        </MapView>

      </Container>);
  }
}

