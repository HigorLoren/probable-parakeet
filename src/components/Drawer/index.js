import { useContext, useEffect, useRef, useState } from 'react';
import { Div, Text } from 'atomize';
import { DrawPolygonContext, FieldsVisibleContext } from '../../App';
import useClickedOutside from '../../hooks/useClickedOutside';
import Switcher from '../Switcher';
import Modal from '../Modal';

const Drawer = ({ fields = [], open = false, onClose }) => {
  const { drawPolygonOnClick, setDrawPolygonOnClick } = useContext(DrawPolygonContext);
  const { fieldsVisible, setFieldsVisible } = useContext(FieldsVisibleContext);
  const [displayDrawerDelayed, setDisplayDrawer] = useState(open);
  const [widthDelayed, setWidthDelayed] = useState(open);
  const drawerRef = useRef();

  useClickedOutside(drawerRef, () => {
    const _screenWith = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    if (_screenWith < 768) onClose?.(false);
  });

  useEffect(() => {
    if (open) {
      setDisplayDrawer(true);
      setTimeout(() => {
        setWidthDelayed(true);
      }, 100);
    } else {
      setWidthDelayed(false);
      setTimeout(() => {
        setDisplayDrawer(false);
      }, 100);
    }
  }, [open]);

  return (
    <Div
      d={{ xs: displayDrawerDelayed ? 'block' : 'none', md: 'block' }}
      pos={{ xs: 'fixed', md: 'static' }}
      bg={{ xs: open ? 'rgba(0, 0, 0, .5)' : 'none', md: 'none' }}
      top="0"
      left="0"
      w={{ xs: '100%', md: 'auto' }}
      h={{ xs: '100%', md: 'auto' }}
      style={{ zIndex: 9999, transition: 'all 1s ease' }}
    >
      <Div
        ref={drawerRef}
        w={{ xs: widthDelayed ? '350px' : '0', md: '350px' }}
        bg={{ xs: 'white', md: 'none' }}
        overflow="scroll"
        h="100%"
      >
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
    </Div>
  );
};

export default Drawer;
