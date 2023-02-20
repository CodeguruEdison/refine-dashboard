import React from 'react'
import { useList } from '@pankod/refine-core'
import { TopAgent, PropertyCard, TotalRevenue, PieChart, PropertyReferrals } from 'components'
import { Box, Stack, Typography } from '@pankod/refine-mui'

const Home = () => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D" >DashBoard </Typography>
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart title="Property for Sale" value={684} series={[75, 25]} colors={['#475be8', '#e4e8ef']} />
                <PieChart title="Property for Rent" value={550} series={[75, 25]} colors={['#475ae8', '#e4e8ef']} />
                <PieChart title="Total Customers" value={584} series={[75, 25]} colors={['#275be8', '#c4e8ef']} />
                <PieChart title="Total City" value={555} series={[75, 25]} colors={['#475be8', '#e4e8ef']} />
            </Box>
            <Stack mt="25px" width="100%" direction={{
                xs: 'column',
                lg: 'row',
            }} gap={4}>
                <TotalRevenue />
                <PropertyReferrals />

            </Stack>
        </Box>
    )
}

export default Home