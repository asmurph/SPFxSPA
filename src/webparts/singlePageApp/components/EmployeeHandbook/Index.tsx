import * as React from 'react';
import styles from '../../components/SinglePageApp.module.scss';
import {ISinglePageAppProps} from '../ISinglePageAppProps';
import { IEmployeeHandbookNavState } from './IEmployeeHandbookNavState';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};


export default class EmployeeHandbook extends React.Component<ISinglePageAppProps, IEmployeeHandbookNavState> {

  constructor(props: ISinglePageAppProps) {
    super(props);
    sp.setup({
      spfxContext: this.props.context
    });
    this.state = {
      links: []
    };
    this._getLinks();
  }
  private async _getLinks() {
    const allItems: any[] = await sp.web.lists.getByTitle("Policies").items.getAll();
    const linkgroupcol: INavLinkGroup[] = [{ links: [] }];
    let linkcol: INavLink[] = linkgroupcol[0].links;
    allItems.forEach(function (v, i) {
      if (v["ParentId"] == null) {
        linkcol.push({ name: v["Title"], url: v["Link"], links: [], key: v.Id + '', isExpanded: true, target: '_blank' });
      }
      else {
        const link: INavLink = { key: v.Id + '', name: v["Title"], url: v["Link"], links: [], target: '_blank' };
        var treecol: INavLink[] = linkcol.filter(function (value) { return value.key == v["ParentId"]; });
        if (treecol.length != 0) {
          treecol[0].links.push(link);
        }
      }
    });
    console.log(linkgroupcol);
    this.setState({ links: linkgroupcol });
  }

  public render(): React.ReactElement<ISinglePageAppProps> {
    return (
      <div className={styles.singlePageApp}>
        <Nav onLinkClick={this._onLinkClick}
          selectedKey="5"
          ariaLabel="Nav basic example"
          styles={navStyles}
          groups={this.state.links} />
      </div>
    );
  }
  private _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
    if (item && item.name === 'SharePoint') {
      console.log('SharePoint link clicked');
    }
  }
}
