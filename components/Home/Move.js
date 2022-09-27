export default function Move({ move, setMove }) {
    const handleChange = event => {
        setMove(event.currentTarget.valueAsNumber);
    };

    return (
        <div>
            <label htmlFor="move" className="mb-1">
                move
            </label>
            <input
                className="input-move"
                type="number"
                id="move"
                min="1"
                max="25"
                onChange={handleChange}
                value={move}
            />
        </div>
    );
}
