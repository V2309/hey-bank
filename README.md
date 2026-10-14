# hey-bank

Digital Banking System with React Client and Spring Boot Microservices.

## Project Structure

- `heybank-client/` - Frontend application built with Vite and React / TypeScript.
- `microservices_server/` - Backend microservices architecture:
  - `eureka/` - Service Discovery Server (Port 8761)
  - `configserver/` - Centralized Configuration Server (Port 8888)
  - `gateway/` - API Gateway with Security & Routing (Port 8080)
  - `authservice/` - Authentication & User Management Service (Port 8081)

## Setup & Configuration

1. **Backend Configuration**:
   - Copy all `*.yml.example` files to `*.yml` inside their respective directories (e.g., in `microservices_server/configserver/src/main/resources/config/`).
   - Fill in your local/cloud database credentials and service endpoints.

2. **Frontend Configuration**:
   - Navigate to `heybank-client/`
   - Copy `.env.example` to `.env` if required
   - Run `npm install` and `npm run dev`
