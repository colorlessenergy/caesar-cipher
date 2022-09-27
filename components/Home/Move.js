export default function Move() {
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
            />
        </div>
    );
}
