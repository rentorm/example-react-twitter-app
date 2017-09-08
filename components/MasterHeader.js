import { Grid, Header } from 'semantic-ui-react';

export default ({ handle }) => (
    <div>
        <Header textAlign="center" attached as="h1">
          Latest tweets from @{handle}
        </Header>
    </div>
)
