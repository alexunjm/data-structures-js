const { expect } = require("@jest/globals");
const SinglyLinkedList = require("./SinglyLinkedList");

test("debería instanciarse la clase SinglyLinkedList", () => {
  expect(new SinglyLinkedList(1)).toBeInstanceOf(SinglyLinkedList);
});

test("una lista nueva, debería tener tamaño 1", () => {
  expect(new SinglyLinkedList(1).size()).toBe(1);
});

test("una lista nueva con un push, debería tener tamaño 2", () => {
  expect(new SinglyLinkedList(1).push(2).size()).toBe(2);
});

test("una lista nueva con argumento 1, debería retornar 1 el primer elemento", () => {
  expect(new SinglyLinkedList(1).getFirst()).toBe(1);
});

test("una lista nueva con argumento 1, debería retornar 1 el último elemento", () => {
  expect(new SinglyLinkedList(1).getLast()).toBe(1);
});

test("una lista nueva con push 2, debería retornar 2 el último elemento", () => {
  expect(new SinglyLinkedList(1).push(2).getLast()).toBe(2);
});

test("una lista nueva al darle clear, debería retornar tamaño 0", () => {
  expect(new SinglyLinkedList(1).clear().size()).toBe(0);
});

test("una lista nueva con push 2, debería retornar 2 el último elemento", () => {
  expect(new SinglyLinkedList(1).push(2).getLast()).toBe(2);
});

test("una lista nueva con unshift 0, debería retornar 0 el primer elemento", () => {
  expect(new SinglyLinkedList(1).unshift(0).getFirst()).toBe(0);
});

test("una lista nueva con unshift 0, debería retornar 1 el último elemento", () => {
  expect(new SinglyLinkedList(1).unshift(0).getLast()).toBe(1);
});
