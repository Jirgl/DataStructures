import * as b from 'bobril';
import * as m from 'bobril-m';
import { create as header, HeaderType } from '../components/header';
import { create as textfield } from '../components/textfield';
import { create as controlPanel } from '../compositions/controlPanel';

export interface IDataStructureCompositionData {
    title: string;
    content: b.IBobrilNode;
    actions: string[];
    onActionChange: (number) => number;
    options?: string[];
    onOptionChange?: (number) => number;
    isValueDisabled: boolean;
    onValueChange: (string) => void;
    onExecuteClick: () => void;
}

function getLine(): b.IBobrilNode {
    return {
        tag: 'div',
        style: {
            height: 1,
            backgroundImage: '-webkit-gradient(linear, 0 0, 80% 0, from(' + m.primary1Color() + '), to(' + m.transparent + '))',
        }
    }
}

function createLayout(data: IDataStructureCompositionData): b.IBobrilNode[] {
    return [
        header({ content: data.title, type: HeaderType.TopicHeader }),
        getLine(),
        controlPanel({
            actions: data.actions && m.RadioButtonGroup({ value: data.onActionChange, unselectedValue: -1 },
                data.actions.map((action, index) => { return m.RadioButton({ value: index }, action); })
            ),
            options: data.options && m.RadioButtonGroup({ value: data.onOptionChange, unselectedValue: -1 },
                data.options.map((option, index) => { return m.RadioButton({ value: index }, option); })
            ),
            valueBox: textfield({
                isDisabled: data.isValueDisabled,
                onChange: data.onValueChange,
                maxLength: 5
            }),
            submitButton: m.Button({
                type: m.ButtonType.Raised,
                feature: m.Feature.Secondary,
                children: 'execute',
                action: data.onExecuteClick
            })
        }),
        data.content
    ]
}

export function create(data: IDataStructureCompositionData): b.IBobrilNode {
    return {
        tag: 'div',
        style: { paddingLeft: 4, marginBottom: 50 },
        children: createLayout(data)
    };
}
