# freecode.academy

Prisma + Next.js + Nexus GraphQL fullstack application.

## Project Structure

```
prisma/                    # Prisma schema and migrations
├── schema.prisma          # Database schema (source of truth)
├── migrations/            # Database migrations
└── seed.ts                # Database seeding

server/nexus/types/        # Nexus GraphQL types (generated from Prisma)

src/gql/                   # Frontend GraphQL
├── src/                   # GraphQL queries/mutations (.graphql files)
├── cli/generateTypes/     # Type generation scripts
└── generated/             # Generated TypeScript types

pages/                     # Next.js pages (routing)
src/pages/                 # Page components implementation
```

## Development Workflow

### 1. Schema Changes (Prisma)

```bash
yarn prisma:db:push
yarn prisma:migrate:create --name migration_name
```

### 2. Generate Nexus Types

```bash
yarn generate:nexus
```

### 3. Add Frontend GraphQL Queries

Edit files in `src/gql/src/*.graphql`

### 4. Generate Frontend Types

```bash
yarn generate:types
```

### 5. Full Generation Pipeline

```bash
yarn generate
```

### 6. Development Server

```bash
yarn dev
```

## Quick Start

```bash
cp .env.sample .env
yarn install
yarn prisma:deploy
yarn generate
yarn build
yarn start
```

## Tests

```bash
yarn lint
yarn types
```

## Build

```bash
yarn build
yarn start
```

## Storybook

```bash
yarn storybook
```
