import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Conversation from './Conversation'
import Explore from './Explore'
import ActivityLayout from '../../layouts/Activity'

const Activity = () => {
    return (
        <>
            <ActivityLayout className="Activity">
                <Routes>
                    <Route index element={<Explore />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='chat' element={<Conversation />} />
                </Routes>
            </ActivityLayout>
        </>
    )
}

export default Activity