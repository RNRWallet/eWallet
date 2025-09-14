## Stage 1: Build the app
FROM paketobuildpacks/yarn:latest AS build

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN yarn run build

## Stage 2: Serve app with httpd server
FROM httpd:2.4.63-alpine3.22

# Copy built app to serve
COPY --from=build /app/dist /usr/local/apache2/htdocs
