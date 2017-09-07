import { Grid } from 'semantic-ui-react';

import Tweet from './Tweet';

export default ({ tweets }) => (
  <Grid container stackable verticalAlign="top" columns={2} padded="vertically" relaxed>
    <Grid.Row stretched>
      <Grid.Column>
        {tweets.filter((t, i) => i < 5).map(t => <Tweet key={t.id_str} tweet={t} />)}
      </Grid.Column>
      <Grid.Column>
        {tweets.filter((t, i) => i >= 5).map(t => <Tweet key={t.id_str} tweet={t} />)}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
