function Search(props) {
    return (
        <div >
            <form style={{textAlign: "center", margin: "10px"}}>
                <input
                    style={{marginRight: "5px", width: "30%"}}
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    placeholder="Enter a role to filter by"
                    id="search"
                />
                <button 
                    onClick={props.formSubmit} 
                    className="btn btn-primary"
                    >Search
                </button>
                <button 
                    onClick={props.reset} 
                    className="btn btn-warning" 
                    style={{marginLeft:"5px"}}
                    >Reset
                </button>
            </form>
        </div>
    );
  }
  
export default Search;