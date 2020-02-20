import React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.scss';
import styles from './indexStory.module.scss';

storiesOf('Welcome', module).add('to <PLACEHOLDER NAME>', () => (
  <div>
    <header className={styles.header}>
      <h1 className={styles.title}>PLACEHOLDER NAME</h1>
    </header>
  </div>
));
