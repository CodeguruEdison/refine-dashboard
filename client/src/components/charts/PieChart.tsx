import { Box, Typography, Stack } from '@pankod/refine-mui';
import { PieChartProps } from 'interfaces/home';
import ReactApexChart, { } from 'react-apexcharts'
import React, { FC, PropsWithChildren } from 'react'

const Piechart: FC<PropsWithChildren<PieChartProps>> = (props) => {
    const { title, value, series, colors } = props;

    return (
        <Box
            id="chart"
            display="flex"
            flex={1}
            bgcolor="#fcfcfc"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            pl={3.5}
            py={2}
            borderRadius="15px"
            gap={2}
            minHeight="110px"
            width="fit-content"

        >
            <Stack>
                <Typography fontSize={14} color="#808191" >{title}</Typography>
                <Typography fontSize={24} fontWeight={700} color="#11142D" mt={1} >{value}</Typography>

            </Stack>
            <ReactApexChart options={{
                chart: {
                    type: 'donut',
                },
                colors,
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                }
            }} series={series} type="donut" width="120px" />
        </Box>
    )
}

export default Piechart