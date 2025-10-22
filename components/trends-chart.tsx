"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { day: "Mon", score: 76 },
  { day: "Tue", score: 78 },
  { day: "Wed", score: 77 },
  { day: "Thu", score: 79 },
  { day: "Fri", score: 81 },
  { day: "Sat", score: 80 },
  { day: "Sun", score: 82 },
]

export function TrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>7-Day Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Score</span>
                          <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
