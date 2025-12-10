# TaskSphere

A modern task management app built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

Next.js 16 | TypeScript | Tailwind CSS | PostgreSQL | Prisma | JWT Auth

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/tasksphere"
JWT_ACCESS_SECRET="your-access-secret"
JWT_REFRESH_SECRET="your-refresh-secret"
```

3. Run migrations:
```bash
npx prisma migrate dev
```

4. Start the app:
```bash
npm run dev
```

Open [http://localhost:5050](http://localhost:5050)

## License

MIT
