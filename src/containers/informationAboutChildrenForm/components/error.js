import React from 'react';
import { Link } from 'react-router-dom';

export default function Error(props) {
  return (
    <div className="all-center w100-h100-wrap error-form">
      <h4>Произшла ошибка</h4>
        <p>Вероятно вы уже зарегистрировались или попробуйте позже</p>  
          <Link to="/">
            <button>На главную</button>
        </Link>
    </div>
  )
}