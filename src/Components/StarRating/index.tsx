import React from 'react';

interface StarRatingProps {
  name: string;
  register: any;
}

const StarRating: React.FC<StarRatingProps> = ({ name, register }) => (
  <div>
    {[1, 2, 3, 4, 5].map((number) => (
      <React.Fragment key={number}>
        <input
          className="mr-2 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          type="radio"
          id={`${name}-star${number}`}
          name={name}
          value={number.toString()}
          {...register(name)}
        />
        <label htmlFor={`${name}-star${number}`} className="mr-2">
          {number}
        </label>
      </React.Fragment>
    ))}
  </div>
);

export default StarRating;
