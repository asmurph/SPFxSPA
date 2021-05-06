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
                    url: '#/Apps',
                    key: 'key3',
                    isExpanded: true,
                  },
                  {
                    name: 'Employee Volunteering',
                    url: '#/Pages',
                    key: 'key4',
                  },
                  {
                    name: 'Hiring & Employment',
                    url: '#/Pages',
                    key: 'key4',
                  },
                  {
                    name: 'Leave & Disability',
                    url: '#/Pages',
                    key: 'key4',
                  },
                  {
                    name: 'Personal Conduct',
                    url: '#/Pages',
                    key: 'key4',
                  },
                  {
                    name: 'Puerto Rico Polocies',
                    url: '#/Pages',
                    key: 'key4',
                  },
                  {
                    name: 'Time & Attendance',
                    url: '#/Pages',
                    key: 'key4',
                  },
                  {
                    name: 'Workplace Policies',
                    url: '#/Pages',
                    key: 'key4',
                  }
                ]
              }
            ]}
        />
      </div>
    );
  }
}
