# Admin Dashboard (Partner Leads)

A React-based analytics dashboard that visualizes partner lead data with month-wise comparisons using dynamic filters and interactive charts.
Built with React + Supabase + Recharts.

This project allows users to select multiple partners and months to compare lead performance visually in a line chart.

## Features

- Fetches real-time data from Supabase
- Multi-select filters for Partners & Months
- Dynamic line chart (one line per selected month)
- Comparison of leads across partners
- Clean data transformation for chart visualization
- Environment-based configuration using .env


## Tech Stack

- React (Vite)
- JavaScript
- Supabase
- Recharts
- Tailwind CSS
- HTML / CSS


## Use Case

This dashboard is designed for:
- Comparing partner performance
- Month-over-month lead analysis
- Simple reporting dashboards
- Learning real-world React + API + chart integration


## Setup Instructions

1. Clone the repository
git clone <your-github-repo-url>
cd <project-folder>

2. Install dependencies
npm install

3. Create .env file in root
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Run the project
npm run dev



