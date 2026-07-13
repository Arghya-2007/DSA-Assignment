/*
 * Q11: Stack operations using an array.
 * LIFO structure. push/pop/peek are all O(1).
 * `top == -1` means the stack is empty.
 */

#include <stdio.h>

#define CAPACITY 100

int stack[CAPACITY];
int top = -1;

int isFull(void)  { return top == CAPACITY - 1; }
int isEmpty(void) { return top == -1; }

void push(int value) {
    if (isFull()) {
        printf("Stack overflow: cannot push %d\n", value);
        return;
    }
    stack[++top] = value;
}

int pop(void) {
    if (isEmpty()) {
        printf("Stack underflow\n");
        return -1;
    }
    return stack[top--];
}

int peek(void) {
    if (isEmpty()) {
        printf("Stack is empty\n");
        return -1;
    }
    return stack[top];
}

int main(void) {
    push(10);
    push(20);
    push(30);

    printf("Top element: %d\n", peek());

    printf("Popped: %d\n", pop());
    printf("Popped: %d\n", pop());

    printf("Top element after pops: %d\n", peek());

    return 0;
}
