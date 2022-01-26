import { Div, Text } from 'atomize';
import { useContext } from 'react';
import { DrawPolygonContext, FieldsVisibleContext } from '../../App';
import Switcher from '../Switcher';
import Modal from '../Modal';

const Drawer = ({ fields = [] }) => {
  const { drawPolygonOnClick, setDrawPolygonOnClick } = useContext(DrawPolygonContext);
  const { fieldsVisible, setFieldsVisible } = useContext(FieldsVisibleContext);

  return (
    <Div w="350px" h="100%">
      <Text
        tag="h1"
        textSize="title"
        textColor="#3f3f3f"
        p={{ x: '2rem' }}
        m={{ t: '1rem', b: '1.3rem' }}
      >
        Mapa
      </Text>

      <Div>
        <Text
          tag="h2"
          textSize="subheader"
          textColor="#3f3f3f"
          p={{ x: '2rem' }}
          m={{ b: '0.65rem' }}
        >
          Culturas
        </Text>

        <Div p={{ l: '0.27rem' }}>
          {fields.map((field, key) => (
            <Switcher
              key={key}
              title={`${field.name} (${field.color})`}
              value={fieldsVisible[field.name]}
              onSwitch={(val) => setFieldsVisible({ ...fieldsVisible, [field.name]: val })}
            />
          ))}
        </Div>
      </Div>

      <Div m={{ t: '2rem' }}>
        <Text
          tag="h2"
          textSize="subheader"
          textColor="#3f3f3f"
          p={{ x: '2rem' }}
          m={{ b: '0.65rem' }}
        >
          Ferramentas
        </Text>
        <Switcher
          title="Clique desenha área"
          value={drawPolygonOnClick}
          onSwitch={setDrawPolygonOnClick}
        />
        <Modal />
      </Div>
    </Div>
  );
};

export default Drawer;
