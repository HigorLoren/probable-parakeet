import { createContext, useState } from 'react';
import { Div, Button, Icon } from 'atomize';
import Map from './components/Map';
import Drawer from './components/Drawer';
import { myFields } from './db-mock';

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
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);

  return (
    <DrawPolygonContext.Provider value={{ drawPolygonOnClick, setDrawPolygonOnClick }}>
      <FieldsAreaContext.Provider value={{ fieldsArea, setFieldsArea }}>
        <FieldsVisibleContext.Provider value={{ fieldsVisible, setFieldsVisible }}>
          <Div d="flex" w="100%" h="100%" bg="#f2f2f2">
            <Drawer fields={myFields} open={drawerIsOpen} onClose={setDrawerIsOpen} />
            <Div d="flex" w="100%" h="100%" flexWrap="wrap">
              <Div w="100%" h="8%">
                <Button
                  onClick={() => setDrawerIsOpen(true)}
                  h="1.5rem"
                  p={{ x: '0.4rem', y: '0' }}
                  m={{ x: '0.4rem', y: '0.8rem' }}
                  textSize="body"
                  textColor="info700"
                  hoverTextColor="info900"
                  bg="transparent"
                  d={{ xs: 'flex', md: 'none' }}
                >
                  <Icon name="Menu" size="20px" color="info700" m={{ r: '0.3rem' }} />
                  Menu
                </Button>
              </Div>
              <Map w="100%" h="92%" fields={myFields} />
            </Div>
          </Div>
        </FieldsVisibleContext.Provider>
      </FieldsAreaContext.Provider>
    </DrawPolygonContext.Provider>
  );
};

export default App;
