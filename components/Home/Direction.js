export default function Direction() {
    return (
        <div className="mb-2">
            <div className="mb-1">direction</div>

            <div className="flex-center">
                <input
                    type="radio"
                    id="left"
                    className="d-none"
                    name="direction"
                    value="left"
                />
                <label className="radio-input mr-1" htmlFor="left"></label>
                <label htmlFor="left" className="mr-2">
                    left
                </label>

                <input
                    type="radio"
                    id="right"
                    className="d-none"
                    name="direction"
                    value="right"
                />
                <label className="radio-input mr-1" htmlFor="right"></label>
                <label htmlFor="right">right</label>
            </div>
        </div>
    );
}
