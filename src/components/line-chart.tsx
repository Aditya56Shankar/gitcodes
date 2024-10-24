"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import './style.css'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A linear line chart"

const chartData = [
  { name: "Jai", desktop: 18 },
  { name: "Fatima", desktop: 35 },
  { name: "Mayank", desktop: 27 },
  { name: "Arpit", desktop: 73 },
  { name: "Manav", desktop: 29 },
  { name: "Aditya", desktop: 24 },
]

const chartConfig = {
  desktop: {
    label: "votes",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Election result</CardTitle>
        <CardDescription>Top 6 Candidates</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} style={{ width: '70%', height: '50%',background:"black",transition: 'background-color 0.5s ease',
          }}
          className="chart-container">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
              
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Top 6 canndidates <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          out of total Candidate
        </div>
      </CardFooter>
    </Card>
  )
}
