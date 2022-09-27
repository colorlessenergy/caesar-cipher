import Head from 'next/head';

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
    return (
        <div>
            <Head>
                <title>caesar cipher</title>
                <meta name="description" content="caesar cipher" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}
