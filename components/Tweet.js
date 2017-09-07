import { Card, Image } from 'semantic-ui-react';

export default ({ tweet }) => {
  let tweetImage
  if(tweet.entities.media) {
    // tweetImage = <Image src={tweet.entities.media[0].media_url} />
    tweetImage = ''
  } else {
    tweetImage = ''
  }
  return (
    <Card fluid href={tweet.entities.urls[0] ? tweet.entities.urls[0].url : ''} target='_blank'>
      {tweetImage}
      <Card.Content style={{ fontSize: '16px' }}>
        <Card.Description>{tweet.text}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Image floated="left" size="mini" src={tweet.user.profile_image_url} />
        <Card.Header>{tweet.user.name}</Card.Header>
        <Card.Meta>@{tweet.user.screen_name}</Card.Meta>
      </Card.Content>
    </Card>
  )
}

// <Card fluid href={tweet.entities.urls.length ? tweet.entities.urls[0].url : false} color="red">
//         <Card.Content>
//             <Image floated="right" size="mini" src={tweet.user.profile_image_url} />
//             <Card.Header>{tweet.user.name}</Card.Header>
//             <Card.Description>{tweet.text}</Card.Description>
//         </Card.Content>
//     </Card>
