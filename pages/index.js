import { useEffect, useState } from 'react';
import Head from 'next/head';

import Direction from '../components/Home/Direction';
import Move from '../components/Home/Move';
import EncryptOrDecrypt from '../components/Home/EncryptOrDecrypt';
import Text from '../components/Home/Text';

const caesarCipherEncrypt = ({ direction, move, text }) => {
    const A_CHAR_CODE = 97;
    const Z_CHAR_CODE = 122;
    if (direction === 'right') {
        return text.split('').map(character => {
            if (character === ' ') return character;

            let charCode = character.charCodeAt(0);
            if (charCode + move > Z_CHAR_CODE) {
                const remaining = charCode + move - Z_CHAR_CODE;
                if (remaining === 1) {
                    charCode = A_CHAR_CODE;
                } else {
                    charCode = A_CHAR_CODE + remaining;
                }
            } else {
                charCode += move;
            }

            return String.fromCharCode(charCode);
        });
    }

    if (direction === 'left') {
        return text.split('').map(character => {
            if (character === ' ') return character;

            let charCode = character.charCodeAt(0);
            if (charCode - move < A_CHAR_CODE) {
                const remaining = A_CHAR_CODE - (charCode - move);
                if (remaining === 1) {
                    charCode = Z_CHAR_CODE;
                } else {
                    charCode = Z_CHAR_CODE - remaining;
                }
            } else {
                charCode -= move;
            }

            return String.fromCharCode(charCode);
        });
    }
};

export default function Home() {
    const [direction, setDirection] = useState('right');
    const [move, setMove] = useState(1);
    const [encryptOrDecrypt, setEncryptOrDecrypt] = useState('encrypt');
    const [text, setText] = useState('');
    const [modifiedText, setModifiedText] = useState('');

    useEffect(() => {
        if (encryptOrDecrypt === 'encrypt') {
            setModifiedText(caesarCipherEncrypt({ direction, move, text }));
        }
    }, [direction, move, encryptOrDecrypt, text]);

    return (
        <div>
            <Head>
                <title>caesar cipher</title>
                <meta name="description" content="caesar cipher" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <div className="flex-flow">
                    <h1>caesar cipher</h1>

                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="24"
                            width="24">
                            <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
                        </svg>
                    </button>
                </div>
                <form>
                    <div className="flex-flow">
                        <Direction
                            direction={direction}
                            setDirection={setDirection}
                        />

                        <Move move={move} setMove={setMove} />
                    </div>

                    <EncryptOrDecrypt
                        encryptOrDecrypt={encryptOrDecrypt}
                        setEncryptOrDecrypt={setEncryptOrDecrypt}
                    />

                    <Text text={text} setText={setText} />
                </form>

                <h2>encrypted text</h2>

                <p>{modifiedText}</p>
            </div>
        </div>
    );
}
