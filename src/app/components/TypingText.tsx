import { TypeAnimation } from "react-type-animation"
import { DEV, DEV1, DEV2, DEV3, DEV4, DEV6, DEV9, DEVFINAL, LINKS, P1, P2, P3 } from "../constants/string"


const TypingBio = () => {
    return (
        <TypeAnimation 
        speed={85} 
        omitDeletionAnimation={true}
        sequence={[ 
            P1, 0,
            P1 + P2, 0,
            P1 + P2 + P3, 0,
            P1 + P2 + P3 + DEV, 1000,
            P1 + P2 + P3 + DEV2, 1000,
            P1 + P2 + P3 + DEV1, 1000,
            P1 + P2 + P3 + DEV3, 1000,
            P1 + P2 + P3 + DEV4, 1000,
            P1 + P2 + P3 + DEV6, 1000,
            P1 + P2 + P3 + DEV9, 1000,
            P1 + P2 + P3 + DEVFINAL, 1000,
            P1 + P2 + P3 + DEVFINAL + "\n" + LINKS, 1000,
            ]} 
        style={{ 
            fontSize: '1rem',
            display: 'block',
            whiteSpace: "pre-line" }} />
    );
};

export default TypingBio;