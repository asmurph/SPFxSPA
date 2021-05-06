import * as React from 'react';
import styles from '../../components/SinglePageApp.module.scss';

export default class WorkplacePolicies extends React.Component<any> {
    public render(): React.ReactElement<any> {
      return (
        <div className={ styles.singlePageApp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              Welcome to Work Place Policies 
            </div>
          </div>
        </div>
      </div>      
      );
    }
  }
