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




const pdx = (
    <Graphic onClick={()=> console.log('.....????')}>
        <Symbols.SimpleMarkerSymbol
            onClick={()=> console.log('.....????')}
            symbolProperties={{
                color: [226, 119, 40],
                outline: {
                    color: [255, 255, 255],
                    width: 2
                }
            }}
        />
        <Geometry.Point
            onClick={()=> console.log('.....????')}
            geometryProperties={{
                latitude: 45.5231,
                longitude: -122.6765
            }}
        />
    </Graphic>
);




// React Component
export default class Sample extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Get store state
    // Subscribe to the store and update state
    this.state = {
        viewProperties: {
          center: [-122.4443, 45.2529],
        },
        showPopup: false,
    };

    // Its more performate to bind your methods in the constructor
    this.mapClick = this.mapClick.bind(this);
    this.featureLayerClick = this.featureLayerClick.bind(this);
  }

  mapClick() {
    console.log('... you just clicked the map!');
  }
  featureLayerClick(){
    console.log('....feature layer click');
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
            <Layers.GraphicsLayer onClick={this.featureLayerClick}>
                {pdx}
            </Layers.GraphicsLayer>

            <Layers.FeatureLayer
                layerProperties={{
                    url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/OpenBeerDatabase/FeatureServer/0'
                }}
                popupTemplate={{
                  title: "{name}",
                  content: [{
                    type: "fields",
                    fieldInfos: [{
                      fieldName: "name"
                    }, {
                      fieldName: "address1",
                      label: "address"
                    }, {
                      fieldName: "city"
                    }, {
                      fieldName: "state"
                    }, {
                      fieldName: "phone"
                    }, {
                      fieldName: "website"
                    }]
                  }]
                }}
                onClick={this.featureLayerClick}
            />

            <SearchWidget position="top-right" />
            <Locate position="top-left" />
        </MapView>

      </Container>);
  }
}

