import * as React from 'react';
import { DropDownMenu, RaisedButton, MenuItem, TextField, TouchTapEvent } from 'material-ui';
import { Block } from './block';

export interface IControlBarProps {
    actions: string[];
    parameters?: string[];
    disableContent: boolean;
    onActionChange: (value: string) => void;
    onParameterChange?: (value: string) => void;
    onExecute: (content?: string) => void;
    selectedActionValue: string;
    selectedParameterValue?: string;
}

const styles = {
    blocksWrapper: {
        position: 'relative'
    },
    blocks: {
        position: 'absolute',
        marginTop: -48,
        width: '100%'
    },
    blockPaddings: {
        paddingLeft: 20,
        paddingRight: 20
    },
    inlineBlock: {
        display: 'inline-block'
    },
    button: {
        paddingTop: 5
    },
    dropDownMenu: {
        width: 170
    },
    textfield: {
        float: 'left',
        width: 80
    }
};

type onChangeType = (event: TouchTapEvent, index: number, value: string) => void;

function createDropDownMenu(items: string[], value: string, onChange: onChangeType): React.ReactChild {
    return <Block style={styles.inlineBlock}>
        <DropDownMenu
            value={value}
            onChange={onChange}
            style={styles.dropDownMenu}>
            {items && items.map((item, idx) => <MenuItem key={idx + item} value={item} primaryText={item} />)}
        </DropDownMenu>
    </Block>;
}

export interface IControlBarState {
    content: string;
}

export class ControlBar extends React.Component<IControlBarProps, IControlBarState> {
    constructor() {
        super();
        this.state = {
            content: ''
        };
    }
    render() {
        return <Block>
            <Block style={styles.inlineBlock}>
                {
                    createDropDownMenu(
                        this.props.actions,
                        this.props.selectedActionValue,
                        (_e: TouchTapEvent, _i: number, v: string) => this.props.onActionChange(v))
                }
                {
                    (this.props.parameters !== undefined && this.props.selectedParameterValue !== undefined)
                        ? createDropDownMenu(
                            this.props.parameters,
                            this.props.selectedParameterValue,
                            (_e: TouchTapEvent, _i: number, v: string) =>
                                this.props.onParameterChange && this.props.onParameterChange(v)
                        )
                        : undefined
                }
            </Block>
            <Block style={Object.assign({}, styles.blocksWrapper, styles.inlineBlock)}>
                <Block style={styles.blocks}>
                    <Block style={Object.assign({}, styles.blockPaddings, styles.inlineBlock, styles.textfield)}>
                        <TextField
                            hintText='content'
                            value={this.state.content}
                            fullWidth={true}
                            disabled={this.props.disableContent}
                            onChange={(_e, value) => {
                                if (value.length > 3) return;
                                this.setState({ content: value });
                            }} />
                    </Block>
                    <Block style={Object.assign({}, styles.blockPaddings, styles.inlineBlock, styles.button)}>
                        <RaisedButton
                            label='execute'
                            onClick={() => this.props.onExecute && this.props.onExecute(this.state.content)}
                        />
                    </Block>
                </Block>
            </Block>
        </Block>;
    }
}
