import React, { createElement } from 'react';
import { CardMedia, Typography } from '@material-ui/core';

function ContentFulRichText(props) {
    if (!props) return;
}

function ContentFulText(props) {
    if (!props) return;
    const { property, value, className } = props;
    return (
        <Typography
            variant={props?.variant}
            key={property}
            className={className}
        >
            {value}
        </Typography>
    );
}

function ContentFulNumber(props) {
    if (!props) return;
    const { property, value, className } = props;
    return (
        <Typography
            key={property}
            className={className}
        >
            {value}
        </Typography>);
}

function ContentFulDate(props) {
    if (!props) return;
    const { property, value, className } = props;

    if ((new Date(value) !== "Invalid Date") && !isNaN(new Date(value))) {
        return (
            <Typography
                key={property}
                className={className}
            >
                {new Date(value).toLocaleDateString("en-SG", { month: 'short' })}
                &nbsp;
                {new Date(value).toLocaleDateString("en-SG", { day: 'numeric' })}
                &nbsp;
                {new Date(value).toLocaleDateString("en-SG", { year: 'numeric' })}
            </Typography>);
    } else {
        return (<Typography>
            Invalid Date
        </Typography>);
    }
}

function ContentFulLocation(props) {
    if (!props) return;

}

function ContentFulMedia(props) {
    if (!props) return;
    const { property, value, className } = props,
        { title,
            // description,
            // contentType,
            // fileName,
            // size,
            url,
            // width,
            // height
        } = value;
    // Add more dynamic checks
    // Add validations
    return (<CardMedia
        className={className}
        key={property}
        component="img"
        src={url}
        title={title}
        height={props.height}
        width={props.width}
    />
    );
}

function ContentFulBoolean(props) {
    if (!props) return;

}

function ContentFulJSON(props) { // Gets complex when there are different types of content input
    if (!props) return;

    const { property, value } = props,
        { json } = value;

    if (json.content[0].nodeType === "paragraph") {
        const contents = json.content[0].content;
        let elements = [];
        contents.forEach((content, id) => {
            if (content.nodeType === "text") {
                if (content?.marks?.length > 0) {
                    elements.push(createElement(content.marks[0].type, { key: id }, content.value));
                } else {
                    elements.push(createElement('span', { key: id }, content.value));
                }
            }
        });

        return createElement(Typography, { key: property, paragraph: true }, elements);
    }
}

function ContentFulReference(props) {
    if (!props) return;

}

export {
    ContentFulRichText,
    ContentFulText,
    ContentFulNumber,
    ContentFulDate,
    ContentFulLocation,
    ContentFulMedia,
    ContentFulBoolean,
    ContentFulJSON,
    ContentFulReference
}