import * as React from 'react';
import styles from '../../components/SinglePageApp.module.scss';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';

export default class Navigation extends React.Component<any> {
  public render(): React.ReactElement<any> {
    return (
      <div>
        <Nav
          expandButtonAriaLabel="Expand or collapse"
          ariaLabel="Nav basic example"
          styles={{
            link: {
              background: "#00ACC1",
              color: "#fff",
            },
            root: {
              background: "#00ACC1",
              width: 208,
              height: "auto",
              boxSizing: 'border-box',
              border: '1px solid #eee',
              overflowY: 'auto'
            }

          }}
          groups={
            [
              {
                links: [
                  {
                    iconClassName: styles.button,
                    name: 'Compliance & Ethics',
                    url: '#/',
                    key: 'key2',
                    isExpanded: true,
                  },
                  {
                    name: 'Employee Handbook',
                    url: '#/EmployeeHandbook',
                    key: 'key3',
                    isExpanded: true,
                  },
                  {
                    name: 'Employee Volunteering',
                    url: '#/EmployeeVolunteering',
                    key: 'key4',
                    isExpanded: true,
                  },
                  {
                    name: 'Hiring & Employment',
                    url: '#/HiringAndEmployment',
                    key: 'key5',
                  },
                  {
                    name: 'Leave & Disability',
                    url: '#/LeaveAndDisability',
                    key: 'key6',
                  },
                  {
                    name: 'Personal Conduct',
                    url: '#/PersonalConduct',
                    key: 'key7',
                  },
                  {
                    name: 'Puerto Rico Polocies',
                    url: '#/PuertoRicoPolocies',
                    key: 'key8',
                  },
                  {
                    name: 'Time & Attendance',
                    url: '#/TimeAndAttendance',
                    key: 'key9',
                  },
                  {
                    name: 'Workplace Policies',
                    url: '#/WorkplacePolocies',
                    key: 'key10',
                  }
                ]
              }
            ]}
        />
      </div>
    );
  }
}
