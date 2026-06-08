# Port de Bruges - Kitesurfing Weather Dashboard

A weather and wind forecasting dashboard for kitesurfing in Zeebrugge, Belgium.
Combines real-time data from three weather/wind sources.

## Tech Stack

- Next.js 16 (React 19, TypeScript 5)
- Tailwind CSS 4 + PostCSS
- SWR for client-side data fetching
- ISR with 1-hour revalidation

## Project Structure

- `core/` - Shared components, converters, formatters, enums
- `meetnet/` - Vlaamse Banken measurement network integration
- `openWeather/` - OpenWeatherMap API integration
- `windfinder/` - Windfinder/RapidAPI integration
- `pages/` - Next.js pages and API routes
- `style/` - Global Tailwind styles
- `public/` - Static assets (icons, images)

## Git Commit Scopes

| Scope         | Description                                |
| ------------- | ------------------------------------------ |
| `meetnet`     | Meetnet API or component changes           |
| `openweather` | OpenWeatherMap API or component changes    |
| `windfinder`  | Windfinder API or component changes        |
| `core`        | Shared utilities, converters, formatters   |
| `ui`          | UI components, layout, structure           |
| `pages`       | Page-level changes                         |
| `api`         | API routes and endpoints                   |
| `styles`      | Styling and CSS changes                    |
| `build`       | Build config (next.config, tsconfig, etc.) |
| `deps`        | Dependency updates                         |
| `lint`        | Linting and formatting                     |
| `analytics`   | Analytics and tracking                     |
