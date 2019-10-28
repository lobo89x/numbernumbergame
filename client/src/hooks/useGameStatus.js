import { useState, useEffect, useCallback } from 'react';


export const useGameStatus = correctAns => {
    const [score, setScore] = useState(0);
    const addScore = useCallback(() => {
        if (correctAns > 0) {
            setScore(prev => prev + (correctAns*25))
        }
    }, [correctAns]);
    

    useEffect(() => {
        addScore();
    }, [addScore, correctAns, score]);

    return [score, setScore, addScore]
};

// export default { useGameStatus, setScore, addScore};