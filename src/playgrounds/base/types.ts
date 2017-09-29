export interface IPlaygroundData {
    width: number;
}

type ActionType = {
    disableContent: boolean;
    params: { [parameter: string]: (content?: string) => void };
}

export type StructureFunctionsType = {
    [action: string]: ActionType
};
