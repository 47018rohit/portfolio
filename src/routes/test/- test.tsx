import { createFileRoute } from '@tanstack/react-router'
import TestPage from '@/Pages/Test'

export const TestRoute = createFileRoute('/')({ component: Test })


function Test() { return <TestPage /> }