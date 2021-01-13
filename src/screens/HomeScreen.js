import React, { useEffect } from 'react'
import { useDispatch }  from 'react-redux'
import {fetchData}  from '../actions'
import {Header, Card, CardSection}  from '../common'
import BookList from '../components/BookList'

const HomeScreen = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchData('javascript'))
    }, []) 

    return (
        <Card>
            <Header />
            
            <CardSection>
                <BookList />
            </CardSection>
        </Card>
    )
}

export default HomeScreen
