import React from 'react';
import clgImg from '../utils/images/college_01.jpg';
import {
  addClassNameNearestPlace,
  addClassNameOfferText
} from '../utils/helpers';
import { Markup } from 'interweave';

function Card({ college }) {
  const {
    college_name,
    promoted,
    discount,
    original_fees,
    discounted_fees,
    fees_cycle,
    image,
    ranking,
    tags,
    amenties,
    rating,
    rating_remarks,
    famous_nearest_places,
    nearest_place,
    offertext
  } = college;

  return (
    <div className='col-2'>
      <div className='card'>
        <div className='card__img'>
          <img src={clgImg} alt='clg' />
          <div className='image-overlay'></div>
          {promoted ? (
            <div className='promoted-flag'>
              <p className='promoted'>PROMOTED</p>
            </div>
          ) : null}

          <div className='rating-remarks-box'>
            <p className='rating-remarks-box--rating'>
              <span>{rating}</span> / 5
            </p>
            <p className='rating-remarks--text'>{rating_remarks}</p>
          </div>

          <div className='tags-card'>
            <div className='bg-white'>
              <p className='tag'>{tags[0]}</p>
            </div>
            <div className='bg-white'>
              <p className='tag'>{tags[1]}</p>
            </div>
          </div>
          <div className='ranking-box'>
            <p className='ranking'>#{ranking}</p>
          </div>
        </div>
        <div className='card__content'>
          <div className='card__content--left'>
            <div className='college-name--box rating--box'>
              <p className='clg-name d-inline'>{college_name}</p>
              <div className='rating d-inline'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='far fa-star'></i>
              </div>
            </div>

            <div className='nearest-place--box '>
              <p className='nearest-place--a d-inline font-normal'>
                {nearest_place[0]}
              </p>{' '}
              |{' '}
              <p className='nearest-place--b d-inline font-light'>
                {nearest_place[1]}
              </p>
            </div>

            <div className='famous-nearest-place--box'>
              <p className='match d-inline font-green'>93% Match : </p>

              <p className='famous-nearest-place--text d-inline font-light'>
                <Markup
                  content={addClassNameNearestPlace(
                    famous_nearest_places,
                    'text-bold'
                  )}
                />
              </p>
            </div>

            <div className='offer-text--box'>
              <p className='offer-text font-bold'>
                <Markup
                  content={addClassNameOfferText(offertext)}
                />
              </p>
            </div>
          </div>

          <div className='card__content--right'>
            <div className='original-fees--box discount-fees--box'>
              <p className='original-fees d-inline font-small'>
                <del>&#x20B9; {original_fees}</del>
              </p>{' '}
              <p className='discount d-inline font-small'>
                <span className='bullet'>&#9679;</span>

                {discount}
              </p>
            </div>

            <div className='dicounted-fees--box'>
              <p className='discounted-fees'>&#x20B9;{discounted_fees}</p>
              <p className='fees-cycle'>{fees_cycle}</p>
            </div>

            <div className='amenties-box'>
              <p className='amenties--a d-inline font-green'>
                {amenties[0]}
                <span className='font-green'> &#9679; </span>
              </p>
              <p className='amenties--b d-inline font-green'>{amenties[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
