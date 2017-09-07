import { Grid } from 'semantic-ui-react';

export default (props) => (
  <Grid container stackable verticalAlign="top" columns={2} padded="vertically" relaxed>
    <Grid.Row stretched>
      <Grid.Column>
        tweets col 1
      </Grid.Column>
      <Grid.Column>
        tweets col 2
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
