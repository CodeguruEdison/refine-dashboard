import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config'
import { Box, Typography, Stack } from '@pankod/refine-mui';
import { ArrowCircleUpOutlined } from '@mui/icons-material';

const TotalRevenue = () => {
    return (
        <Box p={4} flex={1} bgcolor="#fcfcfc" id="chart" display="flex" flexDirection="column" borderRadius="15px">
            <Typography fontSize={18} fontWeight={600} color="#11142D" >Total Revenue </Typography>
            <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
                <Typography fontSize={28} fontWeight={700} color="#11142D" >$236,535</Typography>
                <Stack direction="row" alignItems="center" gap={1}>
                    <ArrowCircleUpOutlined sx={{ fontSize: 25, color: '#475be8' }} />
                    <Stack>
                        <Typography fontSize={15} color="#475be8" >0.8%</Typography>
                        <Typography fontSize={15} color="#808191" >Than last month</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <ReactApexChart
                series={TotalRevenueSeries}
                type="bar"
                height={310}
                options={TotalRevenueOptions}>

            </ReactApexChart>


        </Box>
    )
}

export default TotalRevenue