#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Check if the project name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <project-name>"
  exit 1
fi

PROJECT_NAME=$1

# Create a new Next.js project with TypeScript, Tailwind CSS, and ESLint
echo "Creating Next.js project..."
npx create-next-app@latest plant-simulator --typescript --tailwind --eslint --use-npm  --app

cd "$PROJECT_NAME"

# Install required dependencies
echo "Installing dependencies..."
npm install lucide-react
npm install @radix-ui/react-slot

# Initialize shadcn/ui
echo "Initializing shadcn/ui..."
npx shadcn@latest init --defaults

# Install required shadcn/ui components
echo "Installing shadcn/ui components..."
npx shadcn@latest add card

# Create the component directory and file
echo "Creating component file..."
mkdir -p src/components/simulator
touch src/components/simulator/PlantGrowthSimulator.tsx

# Add PlantGrowthSimulator code from Claude to the PlantGrowthSimulator.tsx
echo "Adding code from Claude to PlantGrowthSimulator.tsx"
cat ../claude-code.txt > src/components/simulator/PlantGrowthSimulator.tsx

echo "Updating main page..."
cat <<EOL > src/app/page.tsx
import PlantGrowthSimulator from '@/components/simulator/PlantGrowthSimulator'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <PlantGrowthSimulator />
    </main>
  )
}
EOL

# Run the development server
echo "Starting development server..."
npm run dev
