import React, { useState } from 'react'
import { Search } from 'semantic-ui-react'
import { connect } from 'react-redux'
import searchService from '../../services/searchService'
import { debounce } from 'lodash'
import { setCachedFiveDay } from './locationSearchActions'
import { setError } from '../_Error/errorActions'

function LocationSearch(props) {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])

  function resultToResultObject(results) {
    if (!results) return null
    return results.map(result => (
      {
        key: result.Key,
        title: result.LocalizedName
      }
    ))
  }

  async function handleSearchChange(event) {
    const val = event.target.value // needed to use the artificial event twice
    setValue(val)
    if (val < 1) {
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    try {
      setResults(resultToResultObject(await searchService.getAutoComplete(val)))
    } catch (err) { props.setError(true, err.name, err.message);}
    setIsLoading(false)
  }

  function handleResultSelect(event, data) {
    // no need to make three extra api calls when all the required data is already saved in a hashmap
    // and can be fetched locally in O(1) instead of O(accuweather's server speed and response limit)
    if (props.favorites.has(data.result.title)) {
      return props.setCachedFiveDay(props.favorites.get(data.result.title))
    }
    // setFiveDay typically gets called upon entering to the app
    // the first argument is the latitude/longitude coordinates for the data to be fetched
    // this api call can be skipped since the city key is already fetched from the autocomplete api
    props.setFiveDay(null, data.result.key, data.result.title)
    setValue('')
  }

  return (
    <div style={style} id='search-bar'>
      <Search
        minCharacters={1}
        loading={isLoading}
        size={'large'}
        value={value}
        results={results}
        onSearchChange={debounce(handleSearchChange, 500, {
          leading: true,
        })}
        onResultSelect={handleResultSelect}>
      </Search>
    </div>
  )
}

const mapDispatchToProps = {
  setCachedFiveDay, setError
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const connectedLocationSearch = connect(mapStateToProps, mapDispatchToProps)(LocationSearch)
export default connectedLocationSearch