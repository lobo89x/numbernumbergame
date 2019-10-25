import { useState, useEffect } from 'react';

const useStage = (b) => {
    const [correctAns, setCorrectAns] = useState(0);

    function evaluate(a) {
        if (a % 2===0) {
            setCorrectAns(prev => prev +1);
            return true;
        }
        else {
            return false;
        }
    }
    useEffect(() => {
        setCorrectAns(0);
        // evaluate(b)
    });
    return [correctAns, setCorrectAns, evaluate]
}

export default useStage;