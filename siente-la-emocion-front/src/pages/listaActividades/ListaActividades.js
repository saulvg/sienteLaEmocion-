import './listaActividades.css';
import ActividadLista from '../../components/ActividadLista/ActividadLista';

import Header from '../../components/Header/Header';
import BodyActivitis from '../../components/Header/MainHeader/BodyActivitis';

const ListaActividades = () => {
  return (
    <div id='listaActividades'>
      <Header
        to={'/listaActividades/senderismo/3'}
        button={'Atrevete'}
        body={<BodyActivitis />}
      />
      <span>Filtrar por ↧</span>
      <ActividadLista
        nombreEmpresa={'Montañas Felices'}
        descripcionGeneral={
          'Lorem impoijsdhfdfsdbchsgdcvbdschjgasdchasdgcvhjdsavcgdsgvjhasgjcsagcjsacgsdgvhbscvhgsdvchsdg'
        }
        fecha={'12/06/2023'}
        plazas={'7/12'}
      />
      <ActividadLista
        nombreEmpresa={'Montañas Felices'}
        descripcionGeneral={
          'Lorem impoijsdhfdfsdbchsgdcvbdschjgasdchasdgcvhjdsavcgdsgvjhasgjcsagcjsacgsdgvhbscvhgsdvchsdg'
        }
        fecha={'12/06/2023'}
        plazas={'7/12'}
      />
      <ActividadLista
        nombreEmpresa={'Montañas Felices'}
        descripcionGeneral={
          'Lorem impoijsdhfdfsdbchsgdcvbdschjgasdchasdgcvhjdsavcgdsgvjhasgjcsagcjsacgsdgvhbscvhgsdvchsdg'
        }
        fecha={'12/06/2023'}
        plazas={'7/12'}
      />
      <ActividadLista
        nombreEmpresa={'Montañas Felices'}
        descripcionGeneral={
          'Lorem impoijsdhfdfsdbchsgdcvbdschjgasdchasdgcvhjdsavcgdsgvjhasgjcsagcjsacgsdgvhbscvhgsdvchsdg'
        }
        fecha={'12/06/2023'}
        plazas={'7/12'}
      />
      <ActividadLista
        nombreEmpresa={'Montañas Felices'}
        descripcionGeneral={
          'Lorem impoijsdhfdfsdbchsgdcvbdschjgasdchasdgcvhjdsavcgdsgvjhasgjcsagcjsacgsdgvhbscvhgsdvchsdg'
        }
        fecha={'12/06/2023'}
        plazas={'7/12'}
      />
    </div>
  );
};
export default ListaActividades;
