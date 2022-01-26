import { useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { FieldsVisibleContext } from '../../App';
import { mapboxApi } from '../../configs';
import LocationMarker from '../LocationMarker';
import Field from '../Field';

const Map = ({ w, h, fields }) => {
  const { fieldsVisible } = useContext(FieldsVisibleContext);

  return (
    <MapContainer
      center={[-23.18981, -47.1851]}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: h, width: w, borderRadius: '7px 0 0 0' }}
    >
      <TileLayer
        attribution="&copy; Mapbox"
        url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=${mapboxApi}`}
        id="mapbox/satellite-v9"
      />
      <LocationMarker />
      {fields.map((field, key) => (
        <Field
          key={key}
          name={field.name}
          positions={field.positions}
          color={field.color}
          fillColor={field.fillColor}
          hide={!fieldsVisible[field.name]}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
