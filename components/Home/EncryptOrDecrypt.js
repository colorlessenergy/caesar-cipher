export default function EncryptOrDecrypt({
    encryptOrDecrypt,
    setEncryptOrDecrypt
}) {
    const handleChange = event => {
        setEncryptOrDecrypt(event.currentTarget.value);
    };

    return (
        <div className="mb-2">
            <div className="mb-1">encrypt or decrypt</div>

            <div className="flex-center">
                <input
                    type="radio"
                    id="encrypt"
                    className="d-none"
                    name="encrypt-decrypt"
                    value="encrypt"
                    onChange={handleChange}
                    checked={encryptOrDecrypt === 'encrypt'}
                />
                <label className="radio-input mr-1" htmlFor="encrypt"></label>
                <label htmlFor="encrypt" className="mr-2">
                    encrypt
                </label>

                <input
                    type="radio"
                    id="decrypt"
                    className="d-none"
                    name="encrypt-decrypt"
                    value="decrypt"
                    onChange={handleChange}
                    checked={encryptOrDecrypt === 'decrypt'}
                />
                <label className="radio-input mr-1" htmlFor="decrypt"></label>
                <label htmlFor="decrypt">decrypt</label>
            </div>
        </div>
    );
}
