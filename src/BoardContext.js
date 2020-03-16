import { createContext } from 'react';
import defaultData from './data.json';

const BoardContext = createContext(defaultData);

export default BoardContext;