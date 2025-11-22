# ----------------------------
# Stage 1: Build with Bun
# ----------------------------
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# ----------------------------
# Stage 2: Run with Node (Alpine is smaller than Slim)
# ----------------------------
FROM node:24-alpine AS runtime
WORKDIR /app

# You only need the .output folder. It is self-contained.
COPY --from=build /app/.output ./.output

# No npm install needed here.

ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
