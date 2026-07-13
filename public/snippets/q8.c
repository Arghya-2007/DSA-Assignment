/*
 * Q14: Evaluate a postfix expression using a stack.
 * Scan left to right: push operands; on an operator, pop two operands,
 * apply it, push the result back. The final stack value is the answer.
 * Time: O(n), single pass over the expression.
 *
 * Input format: space-separated tokens, e.g. "6 2 3 + - 4 *"
 */

#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

#define CAPACITY 100

int stack[CAPACITY];
int top = -1;

void push(int value) { stack[++top] = value; }
int pop(void)         { return stack[top--]; }

int applyOperator(int a, int b, char op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default:
            fprintf(stderr, "Unknown operator: %c\n", op);
            exit(1);
    }
}

int evaluatePostfix(const char *expr) {
    /* strtok splits on whitespace so multi-digit numbers work too */
    char buffer[CAPACITY];
    strncpy(buffer, expr, CAPACITY - 1);
    buffer[CAPACITY - 1] = '\0';

    char *tok = strtok(buffer, " ");
    while (tok != NULL) {
        if (isdigit(tok[0]) || (tok[0] == '-' && tok[1] != '\0')) {
            push(atoi(tok));
        } else {
            int b = pop();  /* second operand popped first */
            int a = pop();
            push(applyOperator(a, b, tok[0]));
        }
        tok = strtok(NULL, " ");
    }

    return pop();
}

int main(void) {
    const char *expr = "6 2 3 + - 4 *";  /* means: (6 - (2 + 3)) * 4 */
    int result = evaluatePostfix(expr);

    printf("Postfix expression: %s\n", expr);
    printf("Result: %d\n", result);

    return 0;
}
