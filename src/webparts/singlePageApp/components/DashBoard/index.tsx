import * as React from 'react';
import styles from '../../components/SinglePageApp.module.scss';
import {IDashBoardProps} from './IDashBoardProps';
import { IDashBoardNavState } from './IDashBoardNavState';
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


export default class HomePage extends React.Component<IDashBoardProps, IDashBoardNavState> {

  constructor(props: IDashBoardProps) {
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
    public render(): React.ReactElement<any> {
      return (
        <div className={ styles.singlePageApp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              Welcome to Complaince & Ethics
            </div>
          </div>
        </div>
      </div>      
      );
    }
  }
