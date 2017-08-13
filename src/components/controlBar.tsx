import * as React from 'react';
import { DropDownMenu, RaisedButton, MenuItem, TextField, TouchTapEvent } from 'material-ui';
import { Block } from './block';

export interface IControlBarProps {
    actions: string[];
    additionalSettings?: string[];
}

interface IControlBarState {
    actionValue: number;
    settingsValue: number;
}

type onChangeType = (_event: TouchTapEvent, _index: number, value: number) => void;

const blockStyle = {
    paddingLeft: 20,
    paddingRight: 20,
    display: 'inline-block'
};

const dropDownBlockStyle = {
    display: 'inline-block'
};
const dropDownBlocksStyle = {
    display: 'inline-block'
};

const dropDownMenuDefaultStyle = {
    width: 100
};

const blocksWrapperStyle = {
    display: 'inline-block',
    position: 'relative'
};

const blocksStyle = {
    position: 'absolute',
    display: 'inline-block',
    marginTop: -48,
    width: '100%'
};

const textfieldStyle = {
    float: 'left'
};

const buttonStyle = {
    paddingTop: 5
};

export class ControlBar extends React.Component<IControlBarProps, IControlBarState> {
    constructor(props: IControlBarProps) {
        super(props);
        this.state = {
            actionValue: 0,
            settingsValue: 0
        };
    }

    handleChangeActionValue(_event: TouchTapEvent, _index: number, value: number) {
        this.setState({ actionValue: value });
    }

    handleChangeSettingsValue(_event: TouchTapEvent, _index: number, value: number) {
        this.setState({ settingsValue: value });
    }

    createDropDownMenu = (items: string[] | undefined, value: number, onChange: onChangeType) =>
        <Block style={dropDownBlockStyle}>
            <DropDownMenu
                value={value}
                onChange={onChange}
                style={items ? {} : dropDownMenuDefaultStyle}
                disabled={!items}>
                {
                    items && items.map((item, idx) =>
                        <MenuItem key={idx + item} value={idx} primaryText={item} />
                    )
                }
            </DropDownMenu>
        </Block>;

    render() {
        return <Block>
            <Block style={Object.assign({}, dropDownBlocksStyle)}>
                {
                    this.createDropDownMenu(this.props.actions, this.state.actionValue,
                        (e, i, v) => this.handleChangeActionValue(e, i, v))
                }
                {
                    this.createDropDownMenu(
                        this.props.additionalSettings,
                        this.state.settingsValue,
                        (e, i, v) => this.handleChangeSettingsValue(e, i, v)
                    )
                }
            </Block>
            <Block style={blocksWrapperStyle}>
                <Block style={blocksStyle}>
                    <Block style={Object.assign({}, blockStyle, textfieldStyle)}>
                        <TextField hintText='content' />
                    </Block>
                    <Block style={Object.assign({}, blockStyle, buttonStyle)}>
                        <RaisedButton label='execute' />
                    </Block>
                </Block>
            </Block>
        </Block>;
    }
}
