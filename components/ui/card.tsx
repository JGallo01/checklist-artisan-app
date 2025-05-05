
import * as React from "react"

export function Card({ children }: { children: React.ReactNode }) {
  return <div style={{
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }}>{children}</div>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
