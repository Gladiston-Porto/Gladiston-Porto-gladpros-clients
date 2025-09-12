# @gladpros/clients

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive client management module for GladPros applications, providing complete CRUD operations, user profiles, and client relationship management.

## 🚀 Features

- 👥 Complete client/user management system
- 📋 CRUD operations for client data
- 🔍 Advanced search and filtering
- 👤 User profile management
- 📊 Client analytics and reporting
- 📱 Responsive React components
- 🔒 TypeScript support with full type safety
- 🎯 Modular architecture with hooks and components

## 📦 Installation

```bash
npm install @gladpros/clients
# or
yarn add @gladpros/clients
# or
pnpm add @gladpros/clients
```

## 🛠️ Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0",
  "next": "^14.0.0 || ^15.0.0"
}
```

## 📋 Prerequisites

This module requires the following packages:
- `@gladpros/ui` - UI components library
- `@gladpros/auth` - Authentication module

And a database with the `usuarios` and `clientes` tables. See the database schema in the main GladPros repository for details.

## 🎯 Usage

```tsx
import {
  ClientProvider,
  useClients,
  ClientList,
  ClientForm,
  UserProfileCard
} from '@gladpros/clients'

function App() {
  return (
    <ClientProvider>
      <MyClientsApp />
    </ClientProvider>
  )
}

function MyClientsApp() {
  const { clients, createClient, updateClient } = useClients()

  return (
    <div>
      <ClientList clients={clients} />
      <ClientForm onSubmit={createClient} />
    </div>
  )
}
```

## 📚 API Reference

### Components

#### ClientList
Data table component for displaying clients with sorting and pagination.

```tsx
<ClientList
  clients={clients}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
```

#### ClientForm
Form component for creating and editing client information.

```tsx
<ClientForm
  initialData={client}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>
```

#### UserProfileCard
Profile card component for displaying user information.

```tsx
<UserProfileCard
  user={user}
  showActions={true}
  onEdit={handleEdit}
/>
```

### Hooks

#### useClients
Main hook for client management operations.

```tsx
const {
  clients,
  loading,
  error,
  createClient,
  updateClient,
  deleteClient,
  searchClients
} = useClients()
```

#### useClient
Hook for individual client operations.

```tsx
const {
  client,
  loading,
  updateClient,
  deleteClient
} = useClient(clientId)
```

### Types

#### Usuario
Main user/client type definition.

```typescript
interface Usuario {
  id: string
  nome: string
  email: string
  telefone?: string
  cpf?: string
  dataNascimento?: Date
  endereco?: Endereco
  status: 'ativo' | 'inativo' | 'bloqueado'
  ultimoLogin?: Date
  createdAt: Date
  updatedAt: Date
}
```

## 🏗️ Development

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/Gladiston-Porto/gladpros-clients.git
cd gladpros-clients

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

### Available Scripts

- `npm run build` - Build the library
- `npm run dev` - Start development mode with watch
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes and add tests
4. Run the test suite: `npm test`
5. Submit a pull request

## 📄 License

MIT © GladPros Team

## 🔗 Links

- [GitHub Repository](https://github.com/Gladiston-Porto/gladpros-clients)
- [Issues](https://github.com/Gladiston-Porto/gladpros-clients/issues)
- [Discussions](https://github.com/Gladiston-Porto/gladpros-clients/discussions)
- [Main GladPros Repository](https://github.com/Gladiston-Porto/GladPros)