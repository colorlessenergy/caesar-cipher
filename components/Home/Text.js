export default function Text({ text, setText }) {
    const handleChange = event => {
        setText(event.currentTarget.value);
    };
    return (
        <>
            <label htmlFor="text" className="mb-1">
                plain text
            </label>
            <textarea id="text" onChange={handleChange} value={text}></textarea>
        </>
    );
}
