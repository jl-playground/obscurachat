# ----------------------------
# Stage 1: Build with Bun
# ----------------------------
FROM oven/bun:1 AS build
WORKDIR /app

# Copy only dependency manifests first (for caching)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build Nuxt (creates .output)
RUN bun run build

# ----------------------------
# Stage 2: Run with Node
# ----------------------------
FROM node:24-slim AS runtime
WORKDIR /app

# Copy build output
COPY --from=build /app/.output ./.output

# Copy package metadata (for runtime deps)
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
