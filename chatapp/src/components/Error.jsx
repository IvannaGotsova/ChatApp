function Error () {
    return (
        <>
            Something go wrong!!!
              <div>
                <button onClick={() => window.open(`${window.location.origin}/index`, '_blank')}>HOME</button>
              </div>              
        </>
    )
}

export default Error