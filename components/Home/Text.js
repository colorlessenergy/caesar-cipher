export default function Text({ text, setText, encryptOrDecrypt }) {
    const handleChange = event => {
        setText(event.currentTarget.value);
    };
    return (
        <>
            <label htmlFor="text" className="mb-1">
                {encryptOrDecrypt === 'encrypt'
                    ? 'plain text'
                    : 'encrypted text'}
            </label>
            <textarea id="text" onChange={handleChange} value={text}></textarea>
        </>
    );
}
