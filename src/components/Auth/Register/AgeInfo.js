import React, { useEffect, useState } from "react";
import { PortionTitle } from "../styled";
import SliderList from "./../../shared/SliderList";

const AgeInfo = ({ formData, handler }) => {
    const [age, setAge] = useState([]);
    const [date, setDate] = useState([]);
    const [month] = useState([
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]);

    const [selected, setSelected] = useState({
        date: "",
        month: "",
    });

    useEffect(() => {
        let ages = [];
        for (let i = 1; i <= 100; i++) {
            ages.push(i);
        }
        setAge(ages);
        setDate(ages.filter((item) => item <= 31));
    }, []);

    const dateMonthHandler = (value, item) => {
        setSelected({
            ...selected,
            [item]: value,
        });
    };

    useEffect(() => {
        if (selected.date !== "" && selected.month !== "") {
            handler(`${selected.date}-${selected.month}`, "dob");
        }

        // eslint-disable-next-line
    }, [selected]);

    return (
        <>
            <PortionTitle style={{ textAlign: "left" }}>
                How old are <br /> You?
            </PortionTitle>

            <SliderList
                title="I am"
                endTitle="Years Old"
                data={age}
                value={formData.age}
                clickHandler={(value) => handler(value, "age")}
            />

            <SliderList
                endTitle="Date"
                data={date}
                value={selected.date}
                clickHandler={(value) => dateMonthHandler(value, "date")}
            />

            <SliderList
                endTitle="Month"
                data={month}
                value={selected.month}
                clickHandler={(value) => dateMonthHandler(value, "month")}
            />
        </>
    );
};

export default AgeInfo;
