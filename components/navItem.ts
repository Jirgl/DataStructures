module JirglStructures {
    export interface INavData {
        content: string;
        isActive: boolean;
        routeParamName: string;
    }

    interface INavItemCtx {
        data: INavData;
    }

    var toStyle = (isActive: boolean): any => {
        const style: any = {
            fontFamily: Font.baseFontFamily,
            color: Color.baseForeground,
            textAlign: "center",
            cursor: "pointer",
            fontSize: 28,
            width: 150,
            height: 41
        }

        if (isActive) {
            style.background = Color.navItemActiveBackground;
            style.borderColor = Color.navItemActiveBorderBackground;
            style.borderStyle = "solid";
            style.borderWidth = 1;
            style.borderRadius = 3;
        }

        return style;
    }

    var navItemComponent: IBobrilComponent = {
        render(ctx: INavItemCtx, me: IBobrilNode) {
            me.tag = "div";
            me.children = b.link({
                tag: "div",
                style: toStyle(ctx.data.isActive),
                children: ctx.data.content
            }, ctx.data.routeParamName);
        }
    }

    export function navItem(data: INavData): IBobrilNode {
        return { component: navItemComponent, data: data };
    }
}