import { Box, Stack, Typography } from '@pankod/refine-mui'
import ProgressBar from 'components/common/ProgressBar';

import { propertyReferralsInfo } from 'constants/index';

const PropertyReferrals = () => {
    return (
        <Box p={4}
            bgcolor="#fcfcfc"
            id="chart"
            display="flex"
            flexDirection="column"
            borderRadius="15px"
            minWidth={490}
        >
            <Typography fontSize={18} fontWeight={600} color="#11142D" >Property Referrals </Typography>
            <Stack my="20px" direction={"column"} gap={4}>
                {propertyReferralsInfo.map((bar) => <ProgressBar {...bar} />)}
            </Stack>

        </Box >
    )
}

export default PropertyReferrals