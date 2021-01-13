import React, {useState}  from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch }  from 'react-redux'
import {fetchData}  from '../actions'
import {Card, CardSection}  from '../common'
import SearchBox from '../components/SearchBox'
import BookList from '../components/BookList'

const SearchScreen = () => {
    const [term, setTerm] = useState(null)
    const dispatch = useDispatch()

    return (
        <Card>
            <SearchBox 
                term = {term}
                onChangeTerm = {newterm => setTerm(newterm)}
                onSubmitTerm = {() => {
                    dispatch(fetchData(term))
                    setTerm(null)
                }}
            />
        
            <CardSection>
                <BookList />
            </CardSection>
        </Card>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    }
})
