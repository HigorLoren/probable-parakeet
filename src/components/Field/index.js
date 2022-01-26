import { useState, useRef, useEffect, useContext } from 'react';
import { Polygon, Marker, Popup } from 'react-leaflet';
import { area } from '@turf/turf';
import { FieldsAreaContext } from '../../App';

const Field = ({
  name,
  positions = { lat: 0, lng: 0 },
  color = 'blue',
  fillColor = 'blue',
  hide = false,
}) => {
  const polygonRef = useRef();
  const popupRef = useRef();
  const [markerposition, setMarkerposition] = useState({ lat: 0, lng: 0 });
  const { setFieldsArea } = useContext(FieldsAreaContext);

  useEffect(() => {
    if (polygonRef.current) {
      setFieldsArea((prevState) => ({
        ...prevState,
        [name]: area(polygonRef.current.toGeoJSON()),
      }));
      setMarkerposition(polygonRef.current._bounds.getCenter());
      popupRef.current.openPopup();
    }
  }, [name, setFieldsArea]);

  return hide ? null : (
    <>
      <Polygon ref={polygonRef} positions={positions} color={color} fillColor={fillColor} />
      <Marker position={markerposition} riseOnHover>
        <Popup ref={popupRef}>{name}</Popup>
      </Marker>
    </>
  );
};

export default Field;
