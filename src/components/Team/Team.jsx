import TeamBets from '../TeamBets/TeamBets';
import { useState } from 'react';
import React from 'react';

export default function Team({ name, logo, bets }) {
  return (
    <ul>
      <li>{name}</li>
      <li><img src={logo} alt={name} /></li>
      <li><TeamBets name={name} bets={bets} /></li>
    </ul>
  );
}
