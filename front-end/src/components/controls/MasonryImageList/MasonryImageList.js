import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiImageListItemBar-root':{
          display:'none',
  },
  '& .MuiImageListItem-root' :
  {
    '&:hover':{
      '& .MuiImageListItemBar-root':{
        display:'flex',
      }
    }
  }
  
}

});

export default function MasonryImageList(props) {

    const classes = useStyles();

  return (
    <Box className={classes.root} sx={{ width: '90vw', height: '90vh', overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {props.imageList.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.download_url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.download_url}`}
              alt={item.id}
              loading="lazy"
            />
            <ImageListItemBar
            title={item.id}
            actionIcon={
              <IconButton
                onClick={() => {props.handleInfoButton(item.id)}}
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.id}`}
              >
                <InfoIcon />
              </IconButton>
            }
            
          />
          </ImageListItem>
          
        ))}
      </ImageList>
    </Box>
  );
}
