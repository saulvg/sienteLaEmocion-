import React from 'react';
import { Outlet } from 'react-router-dom';
import { ActivityText1 } from '../components/ActivityText1';
import Header from '../components/Header/Header';
import useActivities from '../hooks/useActivities';
import useCompanies from '../hooks/useCompanies';
import './experience.css';
import BodyExperience from '../components/Header/MainHeader/BodyExperience';

const Experience = () => {
  const { activities, error } = useActivities();
  return (
    <ul>
      {activities.map((activity) => {
        return (
          <li>
            <Header
              to={'/booking'}
              button={'Reserva'}
              body={<BodyExperience />}
            />
            <div className='container experiencia'>
              <div className='company-div'>
                <h2>{activity.company}</h2>
              </div>
              <ActivityText1
                question={'¿En qué consiste este deporte?'}
                answer={activity.text_1}
              ></ActivityText1>
              <ActivityText1
                question={
                  '¿Qué niveles de dificultad hay? ¿Y si no tengo experiencia?'
                }
                answer={activity.text_1}
              ></ActivityText1>
              <ActivityText1
                question={'Si ya tienes experiencia...'}
                answer={activity.text_1}
              ></ActivityText1>
              <Outlet />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Experience;
