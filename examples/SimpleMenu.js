import React, { Component } from 'react';

import ContextMenu from 'src/ContextMenu';

const MENU_ID = 'simple_context_menu';

export default class SimpleMenu extends Component {
    constructor(props) {
        super(props);

        this.state = { logs: [] };
        this.menuItems = [
            {
                itemId: 'duplicate',
                itemText: 'Duplicate',
                props: {
                    onClick: (e, rightClickedElem, data) => {
                        this.handleClick(e, rightClickedElem, data.itemId);
                    }
                }
            },
            {
                itemId: 'delete',
                itemText: 'Delete',
                props: {
                    onClick: (e, rightClickedElem, data) => {
                        this.handleClick(e, rightClickedElem, data.itemId);
                    }
                }
            }
        ];
    };

    handleClick = (e, rightClickedElem, name) => {
        this.setState(({logs}) => ({
            logs: [`Clicked on menu ${name}, right clicked element id is ${rightClickedElem.id}`, ...logs]
        }));
    };

    render() {
        return (
            <div>
                <h3>Simple Menu</h3>
                <p>This demo simple usage of a context menu.</p>
                <div className='well' id="well-id">right click to see the menu</div>
                <div>
                    {this.state.logs.map((log, i) => (<p key={i}>{log}</p>))}
                </div>
                <ContextMenu
                    menuItems={ this.menuItems } menuId ={ MENU_ID }
                    stickToClass="well"/>
            </div>
        );
    };
}
