import React from 'react';
import { Typography } from "../../../../../node_modules/@material-ui/core/index";

function RichText(props) {

}

function Text(props) {
    const { property, value } = props;
    return (<Typography key={property}>
        {value}
    </Typography>);
}

function Number(props) {

}

function DateTime(props) {
    const { property, value } = props;
    return (
        <Typography key={property}>
            {new Date(value).toLocaleDateString("en-SG", { month: 'short' })}
            &nbsp;
            {new Date(value).toLocaleDateString("en-SG", { day: 'numeric' })}
            &nbsp;
            {new Date(value).toLocaleDateString("en-SG", { year: 'numeric' })}
        </Typography>);
}

function Location(props) {

}

function Media(props) {

}

function Boolean(props) {

}

function JSON(props) {

}

function Reference(props) {

}

export {
    RichText,
    Text,
    Number,
    DateTime,
    Location,
    Media,
    Boolean,
    JSON,
    Reference
}