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
# Stage 2: Run with Bun
# ----------------------------
FROM oven/bun:1-slim AS runtime
WORKDIR /app

# Copy only the built output
COPY --from=build /app/.output ./.output

ENV HOST=0.0.0.0
EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]
