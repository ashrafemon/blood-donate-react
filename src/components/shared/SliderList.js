import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled.div`
    width: 100%;
`;
const BoxTitle = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #000000;
    margin-bottom: 15px;
    text-align: center;
`;
const List = styled.ul`
    width: 100%;
    overflow-x: auto;
    margin: 0 0 10px;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    user-select: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;
const ListItem = styled.li`
    flex: 1;
    font-family: "Roboto", sans-serif;
    font-size: 35px;
    font-weight: bold;
    color: ${(props) => (props.isActive ? "#000000" : "#c5c5c5")};
    cursor: pointer;
    padding: 10px 20px;
    box-sizing: border-box;

    &:hover {
        color: #000000;
    }
`;

const SliderList = ({
    title,
    endTitle,
    data = [],
    value = "",
    clickHandler = () => {},
}) => {
    const itemRef = useRef(null);

    const wheelHandler = (event) => {
        itemRef.current.scrollTo({
            left: itemRef.current.scrollLeft + event.deltaY,
            behaviour: "smooth",
        });
    };

    return (
        <Box title="Please scroll to get your wanted data...">
            {title && <BoxTitle>{title}</BoxTitle>}

            <List ref={itemRef} onWheel={wheelHandler}>
                {data.map((item, i) => (
                    <ListItem
                        key={i}
                        isActive={value === item}
                        onClick={() => clickHandler(item)}
                    >
                        {item}
                    </ListItem>
                ))}
            </List>
            {endTitle && <BoxTitle>{endTitle}</BoxTitle>}
        </Box>
    );
};

SliderList.propTypes = {
    title: PropTypes.string,
    endTitle: PropTypes.string,
    data: PropTypes.array.isRequired,
    value: PropTypes.any.isRequired,
    clickHandler: PropTypes.func.isRequired,
};

export default SliderList;
