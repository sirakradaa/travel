import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const TitleBarImageListComponent = () => {
  return (
    <ImageList cols={3} sx={{ width: '100%'}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default TitleBarImageListComponent;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1883&q=80',
    title: 'Rialto Bridge, Venezia, Italy',
    author: 'Photo by Damiano Baschiera on Unsplash',
  },
  {
    img: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Cathédrale Notre-Dame de Paris, Paris, France',
    author: 'Photo by Ilnur Kalimullin on Unsplash',
  },
  {
    img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Oia, Greece',
    author: 'Photo by Ryan Spencer on Unsplash',
  },
  {
    img: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
    title: 'Sultanahmet, Turkey',
    author: 'Photo by Fatih Yürür on Unsplash',
  },
  {
    img: 'https://images.unsplash.com/photo-1518471152222-d42e38ce6873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Matthias Church, Budapest, Hungary',
    author: 'Photo by Florian van Duyn on Unsplash',
  },
  {
    img: 'https://images.unsplash.com/photo-1616321741705-e9a4073af35c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80',
    title: 'Groningen, Netherlands',
    author: 'Photo by Alexei Maridashvili on Unsplash',
  },

];