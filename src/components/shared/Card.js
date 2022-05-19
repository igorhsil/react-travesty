import React from 'react';

export default function Card({ children, reverse }) {
  return (
    <div className={`${reverse ? 'reverse card' : 'card'}`}>{children}</div>
  );
}
