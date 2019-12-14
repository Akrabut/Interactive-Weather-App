import React, { useState } from 'react'
import { Search } from 'semantic-ui-react'
import { style } from './locationSearchHelper'
import { set } from '../location/locationActions'
import { connect } from 'react-redux'
import searchService from '../../services/searchService'

function LocationSearch(props) {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])

  function resultToResultObject(results) {
    return results.map(result => (
      <Search.Result key={result.Key} title={result.LocalizedName}/>
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
    setResults(resultToResultObject(await searchService.getAutoComplete(val)))
    setIsLoading(false)
  }

  function handleResultSelect(event) {
    console.log(event);
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
        onSearchChange={handleSearchChange}
        onResultSelect={handleResultSelect}>
      </Search>
    </div>
  )
}

const mapDispatchToProps = {
  set,
}

function mapStateToProps(state) {
  return {
    location: state.location,
  }
}

const connectedLocationSearch = connect(mapStateToProps, mapDispatchToProps)(LocationSearch)
export default connectedLocationSearch