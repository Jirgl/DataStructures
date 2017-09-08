import * as React from 'react';
import { DropDownMenu, RaisedButton, MenuItem, TextField, TouchTapEvent } from 'material-ui';
import { Block } from './block';

export interface IAction {
    title: string;
}

export interface IParameter {
    title: string;
    disabled: boolean;
}

export interface IControlBarProps {
    actions: IAction[];
    parameters?: IParameter[];
    onActionChange: (value: number) => void;
    onParameterChange?: (value: number) => void;
    onExecute: (content?: string) => void;
    selectedActionValue: number;
    selectedParameterValue?: number;
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
        float: 'left'
    }
};

type onChangeType = (event: TouchTapEvent, index: number, value: number) => void;

function createDropDownMenu(items: (IAction | IParameter)[], value: number, onChange: onChangeType): React.ReactChild {
    return <Block style={styles.inlineBlock}>
        <DropDownMenu
            value={value}
            onChange={onChange}
            style={styles.dropDownMenu}>
            {
                items && items.map((item, idx) => {
                    let disabled = false;
                    const parameter = item as IParameter;
                    if (parameter.disabled) disabled = parameter.disabled;

                    return (<MenuItem
                        key={idx + item.title}
                        value={idx}
                        primaryText={item.title}
                        disabled={disabled}
                    />);
                })
            }
        </DropDownMenu>
    </Block>;
}

export interface IControlBarState {
    content: string;
}

export class ControlBar extends React.Component<IControlBarProps, IControlBarState> {
    render() {
        return <Block>
            <Block style={styles.inlineBlock}>
                {
                    createDropDownMenu(
                        this.props.actions,
                        this.props.selectedActionValue,
                        (_e: TouchTapEvent, _i: number, v: number) => this.props.onActionChange(v))
                }
                {
                    (this.props.parameters !== undefined && this.props.selectedParameterValue !== undefined)
                        ? createDropDownMenu(
                            this.props.parameters,
                            this.props.selectedParameterValue,
                            (_e: TouchTapEvent, _i: number, v: number) =>
                                this.props.onParameterChange && this.props.onParameterChange(v)
                        )
                        : undefined
                }
            </Block>
            <Block style={Object.assign({}, styles.blocksWrapper, styles.inlineBlock)}>
                <Block style={styles.blocks}>
                    <Block style={Object.assign({}, styles.blockPaddings, styles.inlineBlock, styles.textfield)}>
                        <TextField hintText='content' onChange={(_e, value) => this.setState({ content: value })} />
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
