import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

export default ({ handle }) => {
  return (
    <div>
      <Grid container stackable verticalAlign="top" columns={1} padded="vertically" relaxed>
        <Grid.Row stretched>
          <Grid.Column>
            <Header textAlign="left" attached as="h1" style={{ padding: '2rem' }}>
              Latest tweets from @{handle}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
