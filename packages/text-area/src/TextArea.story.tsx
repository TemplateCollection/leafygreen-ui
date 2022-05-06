import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { css } from '@leafygreen-ui/emotion';
import { uiColors } from '@leafygreen-ui/palette';
import TextArea, { State } from './TextArea';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import { BaseFontSize } from '@leafygreen-ui/tokens';

storiesOf('Packages/TextArea', module).add('Default', () => {
  const darkMode = boolean('darkMode', false);
  return (
    <LeafyGreenProvider baseFontSize={select('Global font size', [14, 16], 14)}>
      <div
        className={css`
          padding: 30px;
          background-color: ${darkMode ? uiColors.gray.dark3 : 'white'};
        `}
      >
        <TextArea
          baseFontSize={select(
            'Base font size',
            Object.values(BaseFontSize),
            13,
          )}
          label={text('Label', 'Label')}
          description={text(
            'Description',
            'This is a description for the textarea',
          )}
          disabled={boolean('Disabled', false)}
          state={select('State', Object.values(State), State.None)}
          darkMode={darkMode}
          errorMessage={text('Error Message', 'This is an error message')}
        />
      </div>
    </LeafyGreenProvider>
  );
});
