export const ACTIONS = {
    CLEAR: 'clear',
    ADD_DIGIT: 'add-digit',
    DELETE_DIGIT: 'delete-digit',
    CHOOSE_OPERATION: 'choose-operation',
    EVALUATE: 'evaluate'
  } 
  
export default function reducer(state, {type, payload}) {
    console.log(state)
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            // Allows to overwrite the evaluation
            if(state.overwrite) { return {...state, currentOperand: payload, overwrite: false}}
            //If the current operand is 0 doesn't allow more zeros
            if (payload === '0' && state.currentOperand === '0') {return state}
            //If the current operand has a . doesn't allow more zeros
            if (payload === '.' && state.currentOperand.includes('.')) {return state}
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload}`
            }
        
        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {return state}
            // If pressed a wrong operation it allows to pick another operation 
            if (state.currentOperand == null) {return {...state, operation: payload}}
            //After inserting our first operand when we add an operation it transfers to the area of previous operand
            if (state.previousOperand == null) { 
                return {
                    ...state,
                    operation: payload,
                    previousOperand: state.currentOperand,
                    currentOperand: null
                }} 
            // After making an operation when we press an operand it starts working with the previous operand
            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload,
                currentOperand: null
            }

        case ACTIONS.CLEAR:
            return {}
        
        case ACTIONS.DELETE_DIGIT:
            if (state.overwrite){
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: null
                }
            }
            if (state.currentOperand == null) {return state}
            if (state.currentOperand.length === 1) {return {...state, currentOperand: null}}
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1)
            }

        case ACTIONS.EVALUATE:
            if (state.operation == null || state.currentOperand == null || state.previousOperand == null) {
                return state
            }
            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state)
            }

        // no default
        }
    }

function evaluate ({currentOperand, previousOperand, operation}) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) {return ""}
    let computation = "";
    switch (operation) {
        case '+':
            computation = prev + current;
            break
        case '-':
            computation = prev - current;
            break
        case '*':
            computation = prev * current;
            break
        case '/':
            computation = prev / current;
            break
        // no default   
        }   
    return computation.toString();
    }


