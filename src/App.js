import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white',
  },
  title: {
    fontSize: '1.5em'
  },
  intro: {
    fontSize: 'large',
  },
  red: {
    color: 'red',
    ':hover': {
      color: 'green',
    },
  }
});

const AppClass = css(styles.app);
const HeaderClass = css(styles.header);
const TitleClass = css(styles.title);
const IntroClass = css(styles.intro);
const RedIntroClass = css(styles.intro, styles.red);

class App extends Component {
  render() {
    return (
      <div className={AppClass}>
        <header className={HeaderClass}>
          <h1 className={TitleClass}>Welcome to React</h1>
        </header>
        <p className={IntroClass}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className={RedIntroClass}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
