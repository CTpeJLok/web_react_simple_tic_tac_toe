const Cell = ({ cell, winner, clickCell }) => {
    const getCellClass = () => {
        let result = [
            'cell',
            'bg-secondary',
            'text-white',
            winner ? 'bg-success' : 'bg-danger'
        ]
        
        return result.join(' ')
    }

    return (
        <div className={getCellClass()} onClick={clickCell}>
            {cell}
        </div>
    )
}

export default Cell
