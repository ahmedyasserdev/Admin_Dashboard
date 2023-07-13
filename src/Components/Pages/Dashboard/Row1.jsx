/* eslint-disable no-unused-vars */
import React from "react";
import { Stack, Paper, Typography, useTheme } from "@mui/material";
import Card from "./Card";
import { Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import {data1 , data2 , data3  , data4} from "./data"
const Row1 = () => {
    const theme = useTheme();

    return (
        <Stack
            sx={{ my: 2 }}
            direction={"row"}
            flexWrap={"wrap"}
            gap={1}
            justifyContent={{ xs: "center", sm: "space-between" }}
        >
            <Card
            icon={
                    // @ts-ignore
                    <Email sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />
                }
                title={"12,361"}
                subTitle={"Emails Sent"}
                increase={"+14%"}
                data = {data1}
                style = {"nivo"}
            />

            <Card
                icon={<PointOfSale
                    // @ts-ignore
                    sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
                title={"431,225"}
                subTitle={"Sales obtained"}
                increase={"+21%"} data={data2}   
                style = {"paired"}
                          />

            <Card
                icon={
                    <PersonAdd
                    // @ts-ignore
                        sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />
                }
                title={"32,441"}
                subTitle={"New Clients"}
                increase={"+5%"}
                data={data3}   
                style = {"category10"}
            />

            <Card
                icon={
                    // @ts-ignore
                    <Traffic sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />
                }
                title={"1,325,134"}
                subTitle={"Traffic Received"}
                increase={"+43%"}
                data={data4}   
                style = {"dark2"}
            />
        </Stack>
    );
};

export default Row1;
