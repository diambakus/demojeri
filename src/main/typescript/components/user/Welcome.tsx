import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { IMU, NOCARB } from '../constants'

export default function () {
    return (
        <Container maxWidth={false} style={{ display: 'flex' }}>
            <Grid container spacing={2} style={{ display: 'flex', flexDirection: 'row' }}>
                <Grid item xs={10} sm={10} lg={10}>
                    <Typography variant='body1' component='div' gutterBottom style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <p>Herzlich Willkommen im FRED-Tool (Forging Footprint Reduction Tool).<br />
                        Diese Software unterstützt Sie bei der Berechnung von Carbon Footprints Ihrer Produkte und wird durch den Industrieverband Massivumformung e.V bereitgestellt. </p>
                        <p>Hintergrundinformationen zur Methodik und den zugrundeliegenden Daten finden Sie unter folgendem Link (
                    <a target='_blank' href='https://prosimalys-my.sharepoint.com/:w:/g/personal/drraedt_prosimalys_de/Eaz1aW-qLWBPhFIcZDQj6K0Bd1LWsFKDOl6uNAuEp7Oe_A?e=hGpMLs&CID=A93495C1-449C-4712-B35F-6A0CB57E34C9&wdLOR=c5AC3E232-2C30-470E-A7E3-B120E0192136'>Beipackzettel</a>
                    ). Dieses Dokument enthält zudem einen Leitfaden für die Kommunikation der Ergebnisse.</p>
                        <p>Bei inhaltlichen Fragen wenden Sie sich bitte an Dr.-Ing. H.-W. Raedt, prosimalys GmbH, DrRaedt@prosimalys.de, +49 173 562 6178.</p>
                    </Typography>
                </Grid>
                <Grid container item xs={2} sm={2} lg={2} spacing={1} style={{ flexDirection: 'column' }}>
                    <Grid item xs><img src={IMU} width={200} height={160} alt='IMU Logo 2019' /></Grid>
                    <Grid item xs><img src={NOCARB} width={200} height={77} alt='NOCARB LOGO' /></Grid>
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10} style={{marginTop: 100}}>
                    <Typography variant='body1' component='div' gutterBottom style={{alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                        <p>
                            Aktuell können Nutzer nur eigene PCFs sehen und bearbeiten. Um gemeinsam an PCFs zu arbeiten, legen Sie bitte einen gemeinsamen Nutzer in ihrer Organisation an.
                        </p>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
