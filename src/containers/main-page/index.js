import React from 'react';
import MainButton from '../../components/mainButton';
import { Link } from 'react-router-dom';

function MainContent(props) {
  return (
    <div className="w100-h100-wrap all-center first-screen">
      <Link to="want">
        <MainButton text="Хотите стать приёмным родителем?"/>
      </Link>

      <Link to="informationAboutChildren">
        <MainButton text="Информация о приёмных детях"/>
      </Link>

      <Link to="youAreParent">
        <MainButton text="Вы являетесь приёмным родителем"/>
      </Link>

      <Link to="specialist">
        <MainButton text="Список специалистов в Бишкеке"/>
      </Link>
    </div>
  )
}

export default MainContent;