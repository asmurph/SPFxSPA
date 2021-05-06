import * as React from 'react';
import styles from '../SinglePageApp.module.scss';

export default class Pages extends React.Component<any> {
  public render(): React.ReactElement<any> {
    return (
      <div className={ styles.singlePageApp }>
      <div className={ styles.container }>
        <div className={ styles.row }>
          <div className={ styles.column }>
            Welcome to your Pages
          </div>
        </div>
      </div>
    </div>  
    );
  }
}
