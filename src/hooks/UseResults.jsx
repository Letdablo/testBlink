import  { useState, useEffect } from 'react';
import { getTestAnswers, getTestPossibleResponses } from '../utils/fakeapi';

export function useResults(temporalResponses) {
  const [valid, setValid] = useState([]);
  const testAnswers = getTestAnswers();
  const testPossibleResponses = getTestPossibleResponses();

    useEffect(() => {
      let valid = false;
      testAnswers?.forEach(answer => {
        if (!temporalResponses[answer.answerId])
        valid = true
    })
    setValid(valid) 
    }, [temporalResponses, testAnswers, testPossibleResponses]);
  
    return { valid ,testAnswers, testPossibleResponses};
  }