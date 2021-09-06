import { makeStyles, Theme } from '@material-ui/core'

const icon = {
    width: 24,
    height: 24,
    marginRight: 4
}

export const materialIcon = {
    ...icon,
    fill: 'rgb(0, 143, 212)'
}

export default makeStyles((theme: Theme) => ({
    materialIcon,
    transportIcon: {
        ...icon,
        fill: 'rgb(128, 0, 128)'
    },
    energyIcon: {
        ...icon,
        fill: 'rgb(255, 153, 0)'
    },
    wasteIcon: {
        ...icon,
        fill: 'rgb(164, 97, 65)'
    },
    recyclableIcon: {
        ...icon,
        fill: 'rgb(41, 171, 60)'
    },
    emissionIcon: {
        ...icon,
        fill: 'rgb(97, 107, 99)'
    },
    gasIcon: {
        ...icon,
        fill: 'rgb(50, 133, 168)'
    },
    providerSingleSelect: {
        paddingTop: 1
    },
    providerMultiSelect: {
        paddingTop: 3
    },
    disabled: {
        color: theme.palette.text.primary
    },
    disabledIcon: {
        display: 'none'
    },
    empty: {
        color: 'rgb(117, 117, 117)'
    }
}))
