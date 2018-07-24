import React from 'react';
import BookMarker from './Bookmarker/Bookmarker';
import CalorieCounter from './CalorieCounter/CalorieCounter';
import FilterableList from './FilterableList/FilterableList';
import GitHubSearch from './GitHubtSearch/GitHubSearch';
import ImageSlider from './ImageSlider/ImageSlider';

const JS = () => (
  <div>
    <BookMarker />
    <br/>
    <CalorieCounter />
    <br/>
    <FilterableList />
    <br/>
    <GitHubSearch />
    <br/>
    <ImageSlider />
    <br/>
  </div>
);

export default JS;