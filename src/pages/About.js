import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <Card>
      <div className="about">
        <h1>This is About page</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          autem? Illum, error aperiam distinctio illo sit recusandae culpa
          facilis corporis!
        </p>

        <Link to="/">Home</Link>
      </div>
    </Card>
  );
}
