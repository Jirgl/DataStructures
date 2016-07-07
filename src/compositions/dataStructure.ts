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
            executeButton: m.Button({
                type: m.ButtonType.Raised,
                feature: m.Feature.Secondary,
                children: 'execute',
                action: data.onExecuteClick
            }),
            iteratorSlider: m.Slider({ value: 10, min: 5, max: 15, step: 1 }),
            iterateButton: m.Button({
                type: m.ButtonType.Raised,
                feature: m.Feature.Default,
                children: 'iterate',
                //action: data.onExecuteClick
            })
        })
    ]
}

export function create(data: IDataStructureCompositionData): b.IBobrilNode {
    return m.Paper({}, [
        m.Paper({ zDepth: 2, round: false, style: { padding: 10 } }, createLayout(data)),
        m.Paper({ zDepth: 2, round: false, style: { marginBottom: 30, background: m.grey100, marginTop: 1 } }, data.content)
    ]);
}
