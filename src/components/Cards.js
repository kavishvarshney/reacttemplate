import React from 'react';
import SingleCard from './SingleCard';

const Cards = () => {
  return (
    <section className="contact bg-success">
      <div className="container">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <SingleCard
            cardTitle="orange"
            cardDesc="A fruit rich with vitamin C. Contains citric acid."
            btnText="Read More"
          />
          <SingleCard
            cardTitle="Apple"
            cardDesc="An apple a day keeps the doctor away."
            btnText="Read More"
          />
          <SingleCard
            cardTitle="Mango"
            cardDesc="We can call it as king of fruits. its a seasonal fruit and is very tasty and everyone likes it."
            btnText="Read More"
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;
