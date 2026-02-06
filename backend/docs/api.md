# Scenario Market API v0

## Auth
- `POST /api/auth/signup`
  - body: `{ email, password, nickname }`
  - response: `201`
- `POST /api/auth/login`
  - body: `{ email, password }`
  - response: `{ accessToken }`

## Scripts
- `GET /api/scripts`
  - query: `category, genre, priceType, q, sort`
  - response: `{ items: Script[] }`
- `GET /api/scripts/:id`
  - response: `{ item: Script }`
- `POST /api/scripts`
  - auth required
  - body: `{ title, logline, synopsis, category, genre, runtime, priceType, price }`

## Community
- `GET /api/community/posts`
- `GET /api/community/posts/:id`
- `POST /api/community/posts`
  - auth required
  - body: `{ category, title, content, spoiler, tags }`
- `POST /api/community/posts/:id/comments`
  - auth required
  - body: `{ content, parentId? }`

## Admin
- `GET /api/admin/dashboard`
  - admin role required
  - response: `{ dau, pendingScripts, revenue }`
