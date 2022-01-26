import { createContext, useState } from 'react';
import { Div } from 'atomize';
import Map from './components/Map';
import Drawer from './components/Drawer';
import { myFields } from './db-mock';
import Modal from './components/Modal';

// Just to develop fast
// TODO: Change it
export const DrawPolygonContext = createContext();
export const FieldsVisibleContext = createContext();
export const FieldsAreaContext = createContext();

const App = () => {
  const [drawPolygonOnClick, setDrawPolygonOnClick] = useState(false);
  const [fieldsVisible, setFieldsVisible] = useState(
    myFields.reduce((newObject, currField) => ({ ...newObject, [currField.name]: true }), {})
  );
  const [fieldsArea, setFieldsArea] = useState({});

  return (
    <DrawPolygonContext.Provider value={{ drawPolygonOnClick, setDrawPolygonOnClick }}>
      <FieldsAreaContext.Provider value={{ fieldsArea, setFieldsArea }}>
        <FieldsVisibleContext.Provider value={{ fieldsVisible, setFieldsVisible }}>
          <Div d="flex" w="100%" h="100%" bg="#f2f2f2">
            <Drawer fields={myFields} />
            <Div d="flex" w="100%" h="100%" flexWrap="wrap">
              <Div w="100%" h="5%"></Div>
              <Map w="100%" h="95%" fields={myFields} />
            </Div>
          </Div>
          <Modal />
        </FieldsVisibleContext.Provider>
      </FieldsAreaContext.Provider>
    </DrawPolygonContext.Provider>
  );
};

export default App;
