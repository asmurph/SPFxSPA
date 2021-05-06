import * as React from 'react';
import styles from '../../components/SinglePageApp.module.scss';

export default class TimeAndAttendance extends React.Component<any> {
    public render(): React.ReactElement<any> {
      return (
        <div className={ styles.singlePageApp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              Welcome to TIme And Attendance
            </div>
          </div>
        </div>
      </div>      
      );
    }
  }
