import { useState, useContext } from 'react';
import { useMapEvents, Polygon } from 'react-leaflet';
import { DrawPolygonContext } from '../../App';

const LocationMarker = () => {
  const [positions, setPositions] = useState([]);
  const { drawPolygonOnClick } = useContext(DrawPolygonContext);

  useMapEvents({
    click(e) {
      if (drawPolygonOnClick) {
        setPositions([...positions, e.latlng]);
      }
    },
  });

  return positions.length === 0 ? null : (
    <Polygon pathOptions={{ fillColor: 'black' }} positions={positions} />
  );
};

export default LocationMarker;
