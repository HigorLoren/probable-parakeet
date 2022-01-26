import { Button, Modal as AtomizeModal, Icon } from 'atomize';
import { useState, useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FieldsAreaContext } from '../../App';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Área por cultura',
    },
  },
};

const Modal = ({ p }) => {
  const [showModal, setShowModal] = useState(false);
  const { fieldsArea } = useContext(FieldsAreaContext);

  const data = {
    labels: Object.keys(fieldsArea).map((key) => key),
    datasets: [
      {
        label: 'Cultura',
        data: Object.keys(fieldsArea).map((key) => fieldsArea[key]),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <Button
        bg="info700"
        hoverBg="info600"
        m={{ x: '2rem', y: '1rem' }}
        onClick={() => setShowModal(!showModal)}
        suffix={<Icon name="LongRight" size="20px" color="white" m={{ l: '1rem' }} />}
        cursor="pointer"
        rounded="md"
      >
        Área por Cultura
      </Button>
      <AtomizeModal
        isOpen={showModal}
        onClose={() => setShowModal(!showModal)}
        align="center"
        rounded="md"
      >
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={() => setShowModal(!showModal)}
          cursor="pointer"
        />
        <Bar data={data} options={options} />
      </AtomizeModal>
    </>
  );
};

export default Modal;
