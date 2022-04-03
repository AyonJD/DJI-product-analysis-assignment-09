import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from './Review'

const ReviewPage = () => {
    const [review] = useReview([])
    return (
        <div className="review-parent grid grid-cols-3 gap-8 px-10 py-20">
            {
                review.map(singleReview => <Review key={singleReview.id} singleReview= {singleReview}></Review>)
            }
        </div>
    );
};

export default ReviewPage;