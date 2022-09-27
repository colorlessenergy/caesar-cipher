export default function Move({ move, setMove }) {
    const handleChange = event => {
        if (event.currentTarget.valueAsNumber < 1) {
            return setMove(1);
        }

        if (event.currentTarget.valueAsNumber > 25) {
            return setMove(25);
        }

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
