import * as React from 'react';
import { DropDownMenu, RaisedButton, MenuItem, TextField, TouchTapEvent } from 'material-ui';
import { Block } from './block';

export interface IControlItem {
    title: string;
    disabled: boolean;
}

export interface IControlBarProps {
    actions: IControlItem[];
    settings?: IControlItem[];
    onActionChange: (value: number) => void;
    onSettingsChange?: (value: number) => void;
    selectedActionValue: number;
    selectedSettingsValue?: number;
}

interface IControlBarState {
}

type onChangeType = (event: TouchTapEvent, index: number, value: number) => void;

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
        this.props.onActionChange(value);
    }

    handleChangeSettingsValue(_event: TouchTapEvent, _index: number, value: number) {
        this.props.onSettingsChange && this.props.onSettingsChange(value);
    }

    createDropDownMenu = (items: IControlItem[], value: number, onChange: onChangeType) => {
        return <Block style={dropDownBlockStyle}>
            <DropDownMenu
                value={value}
                onChange={onChange}
                style={items ? {} : dropDownMenuDefaultStyle}
                disabled={!items}>
                {
                    items && items.map((item, idx) =>
                        <MenuItem
                            key={idx + item.title}
                            value={idx}
                            primaryText={item.title}
                            disabled={item.disabled}
                        />
                    )
                }
            </DropDownMenu>
        </Block>;
    }

    render() {
        return <Block>
            <Block style={dropDownBlocksStyle}>
                {
                    this.createDropDownMenu(
                        this.props.actions,
                        this.props.selectedActionValue,
                        (e, i, v) => this.handleChangeActionValue(e, i, v))
                }
                {
                    (this.props.settings !== undefined && this.props.selectedSettingsValue !== undefined)
                        ? this.createDropDownMenu(
                            this.props.settings,
                            this.props.selectedSettingsValue,
                            (e, i, v) => this.handleChangeSettingsValue(e, i, v)
                        )
                        : undefined
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
