import { useState, useEffect } from 'react';

const useStage = (b) => {
    const [correctAns, setCorrectAns] = useState(0);
    
    useEffect(() => {
    // const evaluate = a => {
    //     if (a % 2===0) {
    //         setCorrectAns(prev => prev +1);
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    //     // setCorrectAns( b => evaluate(b));
    // }
    //     evaluate(b)
    });
    return [correctAns, setCorrectAns]
}

export default useStage;