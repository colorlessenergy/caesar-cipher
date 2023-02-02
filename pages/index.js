import { useState } from 'react';
import Head from 'next/head';

import Theme from '../components/Theme';
import Direction from '../components/Home/Direction';
import Move from '../components/Home/Move';
import EncryptOrDecrypt from '../components/Home/EncryptOrDecrypt';
import Text from '../components/Home/Text';

const caesarCipher = ({ encryptOrDecrypt, direction, move, text }) => {
    if (encryptOrDecrypt === 'decrypt') {
        if (direction === 'right') {
            direction = 'left';
        } else if (direction === 'left') {
            direction = 'right';
        }
    }

    text = text.toLowerCase();

    const A_CHAR_CODE = 97;
    const Z_CHAR_CODE = 122;
    if (direction === 'right') {
        return text.split('').map(character => {
            let charCode = character.charCodeAt(0);
            if (charCode < A_CHAR_CODE || charCode > Z_CHAR_CODE) {
                return character;
            }
            if (charCode + move > Z_CHAR_CODE) {
                const remaining = charCode + move - Z_CHAR_CODE - 1;
                charCode = A_CHAR_CODE + remaining;
            } else {
                charCode += move;
            }

            return String.fromCharCode(charCode);
        });
    }

    if (direction === 'left') {
        return text.split('').map(character => {
            let charCode = character.charCodeAt(0);
            if (charCode < A_CHAR_CODE || charCode > Z_CHAR_CODE) {
                return character;
            }
            if (charCode - move < A_CHAR_CODE) {
                const remaining = A_CHAR_CODE - (charCode - move) - 1;
                charCode = Z_CHAR_CODE - remaining;
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

                    <Theme />
                </div>
                <form>
                    <div className="flex-flow mb-2">
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

                    <Text
                        text={text}
                        setText={setText}
                        encryptOrDecrypt={encryptOrDecrypt}
                    />
                </form>

                <h2>
                    {encryptOrDecrypt === 'encrypt'
                        ? 'encrypted text'
                        : 'decrypted text'}
                </h2>

                <p>
                    {caesarCipher({ encryptOrDecrypt, direction, move, text })}
                </p>
            </div>
        </div>
    );
}
