import { useContext, useState } from 'react';
import { InputElement } from '../../components/InputElement';
import BlueButton from '../../pages/BlueButton';
import { Navigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import decode from 'jwt-decode';

const Review = () => {
  const [vote, setVote] = useState('');
  const [review, setReview] = useState('');
  const { token } = useUser();
  const reviews = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND}/${decoded.experiences.id}`,
        {
          method: 'POST',
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ vote, review }),
        }
      );

      const body = await res.json();
      if (res.ok) {
        console.log(body);
      } else {
        console.error('Error', body.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const decoded = decode(token);
  return (
    <>
      {decoded.id ? (
        <form onSubmit={reviews}>
          <div className='form-elements'>
            <InputElement
              labelName='Review'
              type='text'
              id='review'
              name='review'
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
            <InputElement
              labelName='voto'
              type='number'
              value={vote}
              onChange={(e) => {
                setVote(e.target.value);
              }}
            />
          </div>

          <BlueButton name='hacer review' />
          {console.log('review')}
        </form>
      ) : (
        <div>mu mal</div>
      )}
    </>
  );
};

export default Review;