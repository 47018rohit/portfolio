import { createFileRoute } from '@tanstack/react-router'
import PortfolioMain from '@/Pages/PortfolioMain'


export const Route = createFileRoute('/')({ component: Portfolio })


function Portfolio() { return <PortfolioMain /> }
