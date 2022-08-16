import React from 'react'
import HomeCenter from './HomeCenter'
import HomeDescription from './HomeDescription'
import HomeFooter from './HomeFooter'
import HomeList from './HomeList'
import HomeLogo from './HomeLogo'
import HomePage from './HomePage'
import HomeViewStep from './HomeViewStep'

function index() {
    return (
        <div>
            <HomeCenter />
            <HomePage />
            <HomeViewStep/>
            <HomeList />
            <HomeLogo />
            <HomeDescription />
            <HomeFooter />
        </div>
    )
}

export default index