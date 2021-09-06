import { Button } from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { ScrollTo } from '../App'
import styles from './StepNavigator.jss'
import EditorLayout from './steps/EditorLayout'

type ComponentProps = {
    activeStep: number
    isReader?: boolean
    canContinue: () => boolean
    next: () => void
    previous: () => void
    reset: () => void
    save: () => void
    showResult: () => boolean
    calculate: () => void
    scrollTo: ScrollTo
}

export default ({ activeStep, isReader, canContinue, next, previous, reset, save, showResult, calculate, scrollTo }: ComponentProps) => {

    const classes = styles()

    const navigatorId = 'step-navigator'

    useEffect(() => {
        const navigator = document.getElementById(navigatorId)
        const observer = new IntersectionObserver(
            ([e]) =>
                e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
            { threshold: [0, 1] }
        )
        observer.observe(navigator)
        return () => observer.unobserve(navigator)
    })

    function printPage() {
        return window.print()
    }

    const resultPage: boolean = activeStep === 2
    return <div className={classes.navigator} id={navigatorId}>
        <EditorLayout centerSidebar sidebar={activeStep === 1 ? <div className={classes.scrollButtons}>
            <Button className={classes.scrollButton} onClick={() => scrollTo('top')}>
                <ArrowDropUp />
            </Button>
            <Button className={classes.scrollButton} onClick={() => scrollTo('bottom')}>
                <ArrowDropDown/>
            </Button>
        </div> : null}>
            <div className={classes.buttons}>
                <Button disabled={activeStep === 0} tabIndex={-1} onClick={reset} variant='contained' size='small' color='primary'>
                    Zum Anfang
                </Button>
                <Button disabled={activeStep === 0} tabIndex={-1} onClick={previous} variant='contained' size='small' color='primary'>
                    Zurück
                </Button>
                <Button disabled={!canContinue()} variant='contained' color={showResult() ? 'secondary' : 'primary'}
                    onClick={showResult() ? calculate : next} size='small'>
                    {showResult() ? 'Berechnen' : 'Weiter'}
                </Button>
                <Button variant='contained' color='primary' onClick={resultPage ? printPage : save} size='small' className={classes.saveButton} disabled={isReader || false}>
                    {resultPage ? 'Drucken' : 'Speichern und Schließen'}
                </Button>
            </div>
        </EditorLayout>
    </div>

}
