import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import feed from './feed.json';
import AutoCompleteExampleSimple from './AutoCompleteExampleSimple';

/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
class AvatarExampleSimple extends React.Component {
  render() {
    return (
      <List>
          {feed.map((eachFeed) => {
          return (<ListItem
          disabled={true}
          leftAvatar={
            <Avatar src={"imgs/"+eachFeed.avatar} />
          }
        >
        {eachFeed.author}
        <p>{eachFeed.content}</p>
        <hr/>
        <h4>Comments:</h4>
        <AutoCompleteExampleSimple />
          </ListItem>)}
        )}
      </List>
    )
  }
}

export default AvatarExampleSimple;