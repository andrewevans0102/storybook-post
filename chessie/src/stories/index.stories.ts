import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { AppComponent } from 'src/app/app.component';
import { ChessieComponent } from 'src/app/chessie/chessie.component';

storiesOf('AppComponent', module).add('to Storybook', () => ({
  component: AppComponent,
  props: {},
}));

storiesOf('Chessie', module).add('to Storybook', () => ({
  component: ChessieComponent,
  props: {
    sound: 'Purrrrrrr'
  },
}));
