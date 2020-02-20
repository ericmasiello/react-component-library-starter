import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.scss';
import styles from './indexStory.module.scss';

storiesOf('Welcome', module).add('to Merchandising UI', () => (
  <div>
    <header className={styles.header}>
      <h1 className={styles.title}>Merchandising UI</h1>
    </header>
  </div>
));
