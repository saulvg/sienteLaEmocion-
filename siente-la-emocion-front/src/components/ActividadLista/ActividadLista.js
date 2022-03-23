import './actividadLista.css';
import { Link } from 'react-router-dom';

/**
 * ###########
 * ## Hooks ##
 * ###########
 */
import useActivities from '../../hooks/useActivities';

import CircleHomePage from '../CircleHomePage/CircleHomePage';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import Experience from '../../pages/Experience';

const ActividadLista = () => {
  const { activities, error } = useActivities();

  if (error) return <div>Hubo un error: {error}</div>;

  return activities.length > 0 ? (
    <ul>
      {activities.map((activity) => {
        return (
          <li key={activity.id} id={activity.id}>
            <Link to={`/experiences/${activity.id}`}>
              <section className='actividad'>
                <CircleHomePage
                  id={'idActividad'}
                  clas={'listaActividades'}
                  children={activity.category}
                />

                <div className='socialNetwortEmpty'>
                  <div className='headerActiviti'>
                    <h3>{activity.company}</h3>
                    <Link
                      to={`/editExperiences/${activity.id}`}
                      className='edit'
                    >
                      Lapiz
                    </Link>
                  </div>
                  {/* <SocialNetwork href={'https://www.instagram.com/'} children={'instagram'}/>
                <SocialNetwork href={'https:/es-es.facebook.com/'} children={'facebook'}/> */}

                  <p>{activity.text_1 || 'Sin descripción'}</p>
                  <div className='actividadF_P'>
                    <p>{new Date(activity.date).toLocaleDateString()} </p>
                    <p>{`3 / ${activity.capacity}`}</p>
                  </div>
                </div>
              </section>
            </Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <div>No hay actividades</div>
  );
};
export default ActividadLista;
