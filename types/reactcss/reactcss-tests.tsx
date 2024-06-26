import * as React from "react";
import { FC } from "react";
import { CSS, default as reactCSS, hover, HoverProps, loop, LoopableProps } from "reactcss";

interface TestHoverProps extends HoverProps<any> {}

const TestHover: FC<TestHoverProps> = ({ hover }) => {
    const styles = reactCSS<{ title: CSS }>({
        default: {
            title: {
                color: "black",
            },
        },
        hover: {
            title: {
                color: "blue",
            },
        },
    }, { hover });

    const list = ["First!", "Second!", "Third!"];

    return (
        <div>
            <div style={styles.title}>
                Cool Title!
            </div>

            {list.map((item, index) => <TestLoop key={index} {...loop(index, list.length)}>{item}</TestLoop>)}
        </div>
    );
};

interface TestLoopProps extends LoopableProps {}

const TestLoop: FC<TestLoopProps> = (props) => {
    const styles = reactCSS<{ element: CSS }>({
        default: {
            element: {
                width: "200px",
                border: "1px solid black",
            },
        },
        "first-child": {
            element: {
                borderTopLeftRadius: "2px",
                borderTopRightRadius: "2px",
            },
        },
        "last-child": {
            element: {
                borderBottomLeftRadius: "2px",
                borderBottomRightRadius: "2px",
            },
        },
    }, props);

    return <div style={styles.element}>{props.children}</div>;
};

const Test = hover(TestHover);

<Test />;
