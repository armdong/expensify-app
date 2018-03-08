const add = (a, b) => a + b
const minus = (a, b) => a - b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('should minus two numbers', () => {
  const result = minus(10, 1)
  expect(result).toBe(9)
})

test('should generate greeting for name', () => {
  const result = generateGreeting('Wang Maodong')
  expect(result).toBe('Hello Wang Maodong!')
})

test('should generate greeting for no name', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello Anonymous!')
})