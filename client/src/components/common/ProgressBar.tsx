import { Box, Stack, Typography } from '@pankod/refine-mui'
import { IProgressBarProps } from 'interfaces/progressBar'
import React, { FC, PropsWithChildren } from 'react'

const ProgressBar: FC<PropsWithChildren<IProgressBarProps>> = (props) => {
    const { title, percentage, color } = props
    return (
        <Box width="100%">
            <Stack direction={"row"} alignItems="center" justifyContent="space-between">
                <Typography fontSize={16} fontWeight={500} color="#11142D" >{title}</Typography>
                <Typography fontSize={16} fontWeight={500} color="#11142D" >{percentage}%</Typography>
            </Stack>
            <Box mt={2} position="relative" width="100%" height="8px" borderRadius={1} bgcolor="#e4e8ef">
                <Box width={`${percentage}%`} bgcolor={color} position="absolute" height="100%" borderRadius={1} />
            </Box>
        </Box>
    )
}

export default ProgressBar