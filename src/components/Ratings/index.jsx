import './index.scss'

export default ({ selectedStar }) => <div className="rating-container">{getInputs(selectedStar)}</div>

const getInputs = (selectedStar) => {
    const inputs = [];

    for (let starNumber = 1; starNumber <= 5; starNumber++) {
        inputs.push(
            <>
                <input type="radio" checked={selectedStar && selectedStar === starNumber} value={starNumber} />
                <label title={`${starNumber} estrelas`}></label>
            </>
        )
    }

    return inputs;
}