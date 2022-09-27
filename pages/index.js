import { useState } from 'react';
import Head from 'next/head';

import Direction from '../components/Home/Direction';
import Move from '../components/Home/Move';

const caesarCipher = ({ direction, move, text }) => {
    move = move - 1;

    const A_CHAR_CODE = 97;
    const Z_CHAR_CODE = 122;
    if (direction === 'right') {
        return text.split('').map(character => {
            if (character === ' ') return character;

            let charCode = character.charCodeAt(0);
            if (charCode + move > Z_CHAR_CODE) {
                const remaining = charCode + move - Z_CHAR_CODE;
                charCode = A_CHAR_CODE + remaining;
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

                    <div className="mb-2">
                        <div className="mb-1">encrypt or decrypt</div>

                        <div className="flex-center">
                            <input
                                type="radio"
                                id="encrypt"
                                className="d-none"
                                name="encrypt-decrypt"
                                value="encrypt"
                            />
                            <label
                                className="radio-input mr-1"
                                htmlFor="encrypt"></label>
                            <label htmlFor="encrypt" className="mr-2">
                                encrypt
                            </label>

                            <input
                                type="radio"
                                id="decrypt"
                                className="d-none"
                                name="encrypt-decrypt"
                                value="decrypt"
                            />
                            <label
                                className="radio-input mr-1"
                                htmlFor="decrypt"></label>
                            <label htmlFor="decrypt">decrypt</label>
                        </div>
                    </div>

                    <label htmlFor="plain-text" className="mb-1">
                        plain text
                    </label>
                    <textarea id="plain-text"></textarea>
                </form>

                <h2>encrypted text</h2>
            </div>
        </div>
    );
}
