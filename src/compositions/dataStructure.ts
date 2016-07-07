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
    parameters?: { title: string; index: number }[];
    onParameterChange?: (number) => number;
    isValueDisabled: boolean;
    onValueChange: (string) => void;
    onExecuteClick: () => void;
}

function getLine(): b.IBobrilNode {
    return b.styledDiv(undefined, {
        height: 1,
        backgroundImage: '-webkit-gradient(linear, 0 0, 80% 0, from(' + m.primary1Color() + '), to(' + m.transparent + '))',
    });
}

function createLayout(data: IDataStructureCompositionData): b.IBobrilNode[] {
    return [
        header({ content: data.title, type: HeaderType.TopicHeader }),
        getLine(),
        controlPanel({
            actions: data.actions && m.RadioButtonGroup({ value: data.onActionChange, unselectedValue: -1 },
                data.actions.map((action, index) => { return m.RadioButton({ value: index }, action); })
            ),
            options: data.parameters && m.RadioButtonGroup({ value: data.onParameterChange, unselectedValue: -1 },
                data.parameters.map((option) => { return m.RadioButton({ value: option.index }, option.title); })
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
    return m.Paper({ zDepth: 2, style: { paddingLeft: 4, marginBottom: 30 } }, createLayout(data));
}
