import { Fragment, useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem';
import MealSummary from './MealSummary';
import classes from './meals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
const Meals = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://new-c93da-default-rtdb.firebaseio.com/meals.json'
      );
      if (!response.ok) {
        throw new Error('Something went Wrong!');
      }
      const responseData = await response.json();
      const loadMeals = [];
      for (const key in responseData) {
        loadMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setData(loadMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <h2> LOADING.....</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.error}>
        <p>{error}</p>
      </section>
    );
  }
  const meals = (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <MealItem
          key={meal.id}
          meal={{
            id: meal.id,
            title: meal.name,
            desc: meal.description,
            price: meal.price,
          }}
        />
      ))}
    </ul>
  );
  return (
    <div>
      <MealSummary />
      <section className={classes.meals}>
        <Card>{meals}</Card>
      </section>
    </div>
  );
};

export default Meals;
