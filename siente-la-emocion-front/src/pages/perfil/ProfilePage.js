//import './style.css';
import useUser from '../../hooks/useUser';
//import './perfil.css';
//import UserPerfil from '../../components/EditProfile/UserPerfil';
import { Navigate, useParams } from 'react-router';
import EditProfile from '../../components/EditProfile/EditProfile';
import useActivities from '../../hooks/useActivities';
import { Modal } from '../../components/Modal/Modal';
import Review from '../../components/Review/Review';
import Header from '../../components/Header/Header';
import DeleteAccount from '../../components/Forms/DeleteAccount';
import UserExperiences from '../../components/UserExperiences/UserExperiences';
import decode from 'jwt-decode';
import useUserProfile from '../../hooks/useUserProfile';

const ProfilePage = () => {
  let decod = 'normal';
  const { token, user } = useUser();
  const { activities } = useActivities();
  const { idUser } = useParams();
  const usuario = Number(idUser);
  const decoded = decode(token);
  //const { users } = useUserProfile();
  //decoded.id === usuario && user ?
  try {
    if (token) {
      decod = decode(token);
    }
  } catch (error) {
    console.error(error);
  }
  return decod.role === 'admin' ? (
    <>
      {' '}
      <Header className='headerPerfil' to={'/perfil'} body='aaaaa' />
      <div>perfil admin</div>
    </>
  ) : (
    <>
      <header className='cabecera'>
        <Header className='headerPerfil' to={'/perfil'} body='aaaaa' />
      </header>
      <div className='container-profile'>
        <div className='sections'>
          <section className='u-profile'>
            <h2 className='title-profile'>Mi perfil </h2>
            <EditProfile />
          </section>
          <section className='u-experiences'>
            <h2 className='title-experiences'>Mis experiencias </h2>
            <UserExperiences />
          </section>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;