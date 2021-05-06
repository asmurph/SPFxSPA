import * as React from 'react';
import styles from '../../components/SinglePageApp.module.scss';

export default class PersonalConduct extends React.Component<any> {
    public render(): React.ReactElement<any> {
      return (
        <div className={ styles.singlePageApp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              Welcome to Personal Conduct 
            </div>
          </div>
        </div>
      </div>      
      );
    }
  }
