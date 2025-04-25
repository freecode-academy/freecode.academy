// Имитируем БД-запросы (замени на реальные SQL-запросы или API-вызовы)
export async function getLessons() {
  return [
    'Урок 1: Введение в React',
    'Урок 2: Основы TypeScript',
    'Урок 3: GraphQL API',
  ]
}

export async function getUsers() {
  return ['Алиса', 'Борис', 'Виктор']
}

export async function getTechnologies() {
  return ['React', 'Node.js', 'GraphQL']
}
